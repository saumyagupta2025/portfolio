---
title: "System Design Fundamentals"
category: "System Design"
updated: "2026-05-25"
summary: "Core concepts for designing scalable systems — load balancing, caching, databases, and distributed systems patterns."
tags: ["System Design", "Distributed Systems", "Scalability"]
---

## Core Principles

Good system design balances three things: **scalability**, **reliability**, and **maintainability**. Most trade-offs in system design are between one of these.

## Horizontal vs Vertical Scaling

- **Vertical scaling**: bigger machine, more RAM/CPU. Simple but has a ceiling.
- **Horizontal scaling**: more machines. Harder to implement but theoretically unlimited.

Most modern systems scale horizontally with stateless services and a shared data layer.

## Load Balancing

Distributes traffic across multiple servers. Key algorithms:
- **Round-robin**: requests distributed evenly
- **Least connections**: sends to server with fewest active connections
- **IP hash**: same client always hits same server (useful for sessions)

## Caching

The single biggest lever for performance. Cache at multiple layers:

| Layer | Tool | Use case |
|-------|------|----------|
| Client | Browser cache | Static assets |
| CDN | Cloudflare, CloudFront | Media, global static content |
| Application | Redis, Memcached | DB query results, session data |
| Database | Query cache | Repeated read-heavy queries |

**Cache invalidation** is the hard part — decide between TTL-based expiry vs event-driven invalidation based on your consistency requirements.

## Databases

### SQL vs NoSQL

Use **SQL** when:
- Data is relational and structured
- You need ACID transactions
- Query patterns are well-defined

Use **NoSQL** when:
- Schema is flexible or evolving
- You need horizontal scaling by design
- High write throughput is required

### CAP Theorem

A distributed system can only guarantee two of:
- **Consistency** — every read gets the most recent write
- **Availability** — every request gets a response
- **Partition tolerance** — system works despite network failures

In practice, partition tolerance is non-negotiable in distributed systems, so the real choice is C vs A during a network partition.

## Message Queues

Decouple producers from consumers. Essential for:
- Async processing (emails, notifications, reports)
- Smoothing traffic spikes
- Reliable delivery across services

Tools: Kafka (high throughput, replay), RabbitMQ (routing, priorities), SQS (managed, AWS-native).

## Consistent Hashing

Used in distributed caches and databases to minimize reshuffling when nodes are added/removed. Each node is responsible for a range of the hash space — adding a node only affects its neighbors.

## Things I'm Still Thinking About

- When does eventual consistency become unacceptable vs a reasonable trade-off?
- How to design for observability from day one, not as an afterthought
- The right granularity for microservices — when does splitting services create more problems than it solves?
