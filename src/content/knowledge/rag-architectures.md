---
title: "RAG Architectures"
category: "AI/ML"
updated: "2025-05-20"
summary: "Notes on retrieval-augmented generation patterns — from naive RAG to multimodal and agentic variants. Includes personal notes from building a multimodal RAG system."
tags: ["RAG", "LLM", "Vector DB", "LangChain"]
---

## What is RAG?

Retrieval-Augmented Generation (RAG) grounds LLM responses in retrieved documents, reducing hallucination and enabling knowledge beyond the model's training cutoff.

**Basic flow:**
```
User query → Embed query → Search vector store → Retrieve top-k chunks → LLM generates answer with chunks as context
```

## Naive RAG

The simplest form. Chunk documents, embed them, store in a vector DB, retrieve by cosine similarity, pass to LLM.

**When it works well:** Single-domain, well-structured text (e.g. PDFs with clean prose), questions that map naturally to document sections.

**When it breaks:**
- Multi-hop questions requiring reasoning across multiple documents
- Questions about tables, charts, or code
- Queries that need aggregation ("what are all the risks mentioned?")
- Short, ambiguous queries that don't embed well

## Advanced RAG

Improvements on each pipeline stage:

### Pre-retrieval
- **Query rewriting** — use an LLM to rewrite the query for better retrieval
- **HyDE (Hypothetical Document Embeddings)** — generate a hypothetical answer, embed *that*, then retrieve
- **Step-back prompting** — abstract the query to a higher-level question first

### Retrieval
- **Hybrid search** — combine dense (embedding) and sparse (BM25/keyword) retrieval
- **Re-ranking** — use a cross-encoder to re-score top-k results
- **Parent-child chunking** — retrieve small chunks, return their larger parent context

### Post-retrieval
- **Context compression** — remove irrelevant sentences before passing to LLM
- **Fusion** — merge results from multiple retrieval strategies

## Multimodal RAG

Extends RAG to handle images, tables, and charts alongside text.

Two main approaches:

**1. Summarise everything as text**  
Use a multimodal LLM (GPT-4o, Gemini) to generate text summaries of images and tables. Store summaries in the vector DB; retrieve summaries, pass with original elements to the LLM.

**2. Multimodal embeddings**  
Use models like CLIP or GPT-4V to embed images and text in the same embedding space. Retrieve across modalities directly.

I used approach 1 in my [Multimodal RAG project](/projects) — it's simpler and more reliable, though it loses some detail in the summarisation step.

**Useful tools:**
- `Unstructured` library for parsing PDFs with mixed content
- `ChromaDB` for vector storage
- `LangChain`'s multi-vector retriever for linking summaries to originals

## Agentic RAG

Instead of a fixed pipeline, an agent decides *how* to retrieve — choosing between tools, querying multiple sources, and iterating if initial retrieval is insufficient.

```
User query → Agent → [search_docs, search_web, query_db] → synthesise → answer
```

**When to use:** Complex, multi-step questions; when the retrieval strategy depends on the question type; when you need to combine internal and external knowledge.

**Downside:** Harder to debug, more latency, less predictable.

## Evaluation

Key metrics for RAG:
| Metric | What it measures |
|--------|-----------------|
| **Faithfulness** | Does the answer stay grounded in retrieved context? |
| **Answer Relevancy** | Does the answer address the question? |
| **Context Precision** | Are the retrieved chunks actually relevant? |
| **Context Recall** | Did retrieval find all necessary information? |

Tools: **RAGAS**, **DeepEval**, **TruLens**

## Personal Notes

From building the multimodal RAG system:
- `Unstructured` is excellent for PDF parsing but slow — pre-process offline
- ChromaDB's persistence is straightforward but watch out for embedding dimension mismatches after model changes
- GPT-4o-mini is surprisingly good for summarising tables; Gemini-1.5-pro handles complex charts better
- Always evaluate the full pipeline, not just retrieval quality — good retrieval with a bad prompt template still fails

## Resources

- [RAGAS paper](https://arxiv.org/abs/2309.15217) — evaluation framework
- [Advanced RAG survey](https://arxiv.org/abs/2312.10997) — comprehensive overview
- Lilian Weng's post on RAG — clear conceptual breakdown
