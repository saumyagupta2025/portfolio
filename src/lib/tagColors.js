// ── Tag colour palette ────────────────────────────────────────
// Add new tags here to assign a colour. Falls back to stone (neutral).

const palette = {
  blue:   'bg-blue-50 text-blue-700 border-blue-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  violet: 'bg-violet-50 text-violet-700 border-violet-200',
  emerald:'bg-emerald-50 text-emerald-700 border-emerald-200',
  amber:  'bg-amber-50 text-amber-700 border-amber-200',
  rose:   'bg-rose-50 text-rose-700 border-rose-200',
  sky:    'bg-sky-50 text-sky-700 border-sky-200',
  stone:  'bg-stone-100 text-stone-600 border-stone-200',
}

const tagMap = {
  // AI / ML
  'LLM': 'blue', 'GenAI': 'blue', 'AI': 'blue', 'AI/ML': 'blue', 'ML': 'blue',
  'Machine Learning': 'blue', 'NLP': 'blue', 'Deep Learning': 'blue',
  'HuggingFace': 'blue', 'AI Research': 'blue',

  // Evaluation / Research
  'Evaluation': 'indigo', 'DeepEval': 'indigo', 'LangSmith': 'indigo',
  'RAGAS': 'indigo', 'Research': 'indigo', 'Enterprise': 'indigo',

  // Agents / Orchestration
  'Agents': 'rose', 'LangGraph': 'rose', 'Automation': 'rose',
  'Agentic': 'rose', 'Crew.AI': 'rose', 'Multi-Agent': 'rose',

  // LangChain / RAG
  'LangChain': 'violet', 'RAG': 'violet', 'Vector DB': 'violet',
  'ChromaDB': 'violet', 'Unstructured': 'violet', 'Streamlit': 'violet',

  // Data Engineering
  'Data Engineering': 'emerald', 'DBT': 'emerald', 'Databricks': 'emerald',
  'PySpark': 'emerald', 'Spark': 'emerald', 'Delta Lake': 'emerald',
  'ETL': 'emerald', 'Pipeline': 'emerald', 'SQL': 'emerald',

  // Cloud / Infra
  'Azure': 'sky', 'AWS': 'sky', 'Cloud': 'sky', 'Terraform': 'sky',
  'Docker': 'sky', 'CI/CD': 'sky', 'GitHub Actions': 'sky',

  // Learning / Resources / Meta
  'Resources': 'amber', 'Learning': 'amber', 'meta': 'amber',
  'Books': 'amber', 'Tools': 'amber',
}

export function tagClass(tag) {
  const key = tagMap[tag] ?? 'stone'
  return `${palette[key]} text-xs px-2 py-0.5 rounded border`
}
