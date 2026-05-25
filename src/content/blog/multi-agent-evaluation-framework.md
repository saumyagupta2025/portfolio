---
title: "Resources for Getting Started with LLMs"
date: "2025-04-02"
tags: ["LLM", "Resources", "Learning"]
excerpt: "A curated list of resources I'd recommend to anyone getting into large language models — papers, courses, and people worth following."
---

Getting into LLMs can feel overwhelming. Here's what I'd actually recommend, roughly in the order I'd suggest approaching them.

## Start with intuition, not papers

Before reading any paper, watch Andrej Karpathy's [Neural Networks: Zero to Hero](https://www.youtube.com/@AndrejKarpathy) series on YouTube. It builds genuine understanding of how transformers work from the ground up. No shortcuts, but worth every hour.

3Blue1Brown's [neural network series](https://www.youtube.com/@3blue1brown) is excellent if you need the linear algebra foundations to click first.

## The essential papers

Once you have intuition, these papers are worth reading in order:

1. **Attention Is All You Need** (Vaswani et al., 2017) — the transformer paper
2. **BERT** (Devlin et al., 2018) — bidirectional pretraining
3. **GPT-3** (Brown et al., 2020) — scaling and few-shot learning
4. **InstructGPT** (Ouyang et al., 2022) — RLHF and alignment

You don't need to understand every equation on the first pass. Read for the ideas.

## For practical work

If you're building with LLMs rather than researching them:

- **LangChain docs** — start with the LCEL (LangChain Expression Language) section
- **LlamaIndex docs** — better for RAG-heavy applications
- **Chip Huyen's *Designing Machine Learning Systems*** — not LLM-specific but essential for production thinking

## People worth following

- [Lilian Weng](https://lilianweng.github.io) — best technical blog on the internet for ML
- [Simon Willison](https://simonwillison.net) — best practical writing on LLM tooling
- [Eugene Yan](https://eugeneyan.com) — applied ML and system design

---

This list will drift as the field moves. Last updated May 2025.
