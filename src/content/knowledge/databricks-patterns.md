---
title: "Databricks Patterns & Optimisations"
category: "Data Engineering"
updated: "2025-05-10"
summary: "Notes on Databricks optimisation — Autoloader, Delta Lake, cluster configuration, and cost management patterns."
tags: ["Databricks", "PySpark", "Delta Lake", "Data Engineering"]
---

## Autoloader

Databricks Autoloader (`cloudFiles`) is the recommended way to incrementally ingest files from cloud storage.

```python
df = (
    spark.readStream
    .format("cloudFiles")
    .option("cloudFiles.format", "json")
    .option("cloudFiles.schemaLocation", schema_path)
    .option("cloudFiles.inferColumnTypes", "true")
    .load(source_path)
)

df.writeStream
    .format("delta")
    .option("checkpointLocation", checkpoint_path)
    .trigger(availableNow=True)  # or processingTime="10 minutes"
    .start(target_path)
```

### Key optimisations I've used

**`trigger(availableNow=True)`** — processes all available files and stops. Cheaper than always-on streaming; use with a scheduled job.

**Schema evolution** — set `mergeSchema` to handle new columns without manual schema updates:
```python
.option("mergeSchema", "true")
```

**File notification mode** vs polling mode — for Azure ADLS, use Event Grid notifications instead of directory listing. Much faster for large directories with millions of files.

**Fail-safe for indefinite executions:**
```python
.option("cloudFiles.maxFilesPerTrigger", 1000)  # limit per trigger
```
Use this to prevent runaway jobs from processing unexpectedly large batches.

### What I learned from optimising Autoloader (70% runtime reduction)

The bottleneck wasn't compute — it was the schema inference and directory listing. Fixes:
1. Provide an explicit schema (skip inference)
2. Use file notifications instead of polling
3. Tune `maxFilesPerTrigger` to match downstream capacity
4. Move from `trigger(once=True)` to `trigger(availableNow=True)` (Databricks 11.3+)

## Delta Lake Patterns

### Z-Ordering

Cluster related data together for faster query performance:
```python
spark.sql("""
    OPTIMIZE events
    ZORDER BY (date, user_id)
""")
```
Use when queries frequently filter on those columns. Don't over-Z-Order — pick 1-2 columns max.

### Vacuum

Remove old Delta files:
```python
spark.sql("VACUUM events RETAIN 168 HOURS")  # 7 days
```
Don't go below 7 days unless you're certain no active jobs read old snapshots.

### Shallow vs Deep Clone

```python
# Shallow: references original files (fast, no storage duplication)
spark.sql("CREATE TABLE dev_events SHALLOW CLONE prod_events")

# Deep: full copy (independent, costs storage)
spark.sql("CREATE TABLE backup_events DEEP CLONE prod_events")
```

Use shallow clones for dev/test environments — zero storage cost.

## Cluster Configuration

### Job Clusters vs All-Purpose Clusters

- **Job clusters**: spin up fresh for each run, terminate when done. Cheapest for scheduled jobs.
- **All-Purpose clusters**: persistent, shared. Good for development; expensive if left running.

**Rule:** All scheduled production jobs should use job clusters.

### Spot Instances

Use spot instances (AWS) / spot VMs (Azure) for non-production and fault-tolerant workloads:
```json
{
  "aws_attributes": {
    "first_on_demand": 1,
    "availability": "SPOT_WITH_FALLBACK",
    "spot_bid_price_percent": 100
  }
}
```

`SPOT_WITH_FALLBACK` uses spot if available, falls back to on-demand. Good balance.

### Cluster Auto-Scaling

```json
{
  "autoscale": {
    "min_workers": 2,
    "max_workers": 10
  }
}
```

Watch out: auto-scaling doesn't always scale down fast enough. Set `spark.databricks.delta.optimizeWrite.enabled` to reduce small file accumulation.

## Terraform for Databricks Infrastructure

Managing Databricks infrastructure as Terraform:

```hcl
resource "databricks_job" "etl_pipeline" {
  name = "daily-etl"

  new_cluster {
    num_workers   = 4
    spark_version = data.databricks_spark_version.latest.id
    node_type_id  = "Standard_DS3_v2"
    
    azure_attributes {
      availability = "SPOT_WITH_FALLBACK_AZURE"
    }
  }

  spark_python_task {
    python_file = "dbfs:/jobs/etl.py"
    parameters  = ["--env", "prod"]
  }

  schedule {
    quartz_cron_expression = "0 0 2 * * ?"  # 2am daily
    timezone_id            = "UTC"
  }
}
```

**Why it matters:** reproducible environments, version-controlled changes, easy promotion from dev → staging → prod.

## DBT on Databricks

DBT (Data Build Tool) is excellent for the transformation layer. Key patterns:

```sql
-- models/marts/fact_events.sql
{{ config(
    materialized='incremental',
    unique_key='event_id',
    incremental_strategy='merge'
) }}

SELECT
    event_id,
    user_id,
    event_type,
    created_at
FROM {{ ref('stg_events') }}
{% if is_incremental() %}
WHERE created_at > (SELECT MAX(created_at) FROM {{ this }})
{% endif %}
```

Key gains from this pattern:
1. Replacing full table rebuilds with incremental models
2. Adding proper partitioning and Z-ordering
3. Eliminating redundant intermediate tables
