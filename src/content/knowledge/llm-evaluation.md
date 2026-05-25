---
title: "LLM Evaluation Frameworks"
category: "AI/ML"
updated: "2025-05-15"
summary: "Comparing DeepEval, LangSmith, RAGAS, and other tools for evaluating LLMs in production. Includes notes from enterprise benchmarking at Shell."
tags: ["LLM", "Evaluation", "DeepEval", "LangSmith", "RAGAS"]
---

## Why Evaluation is Hard

The core difficulty: there's no ground truth. Unlike classification (accuracy vs. labels), LLM outputs are open-ended. A factually correct answer can be poorly worded; a beautifully written answer can be wrong.

This pushes evaluation toward three approaches:
1. **Automatic metrics** — deterministic (BLEU, ROUGE) or LLM-as-judge
2. **Human evaluation** — slow, expensive, inconsistent at scale
3. **Hybrid** — automated first-pass + human review for edge cases

In production, you want mostly (1) with (3) as a backstop.

## Dimensions of Evaluation

| Dimension | Question |
|-----------|---------|
| **Faithfulness** | Is the answer grounded in the provided context? |
| **Relevance** | Does the answer address the actual question? |
| **Completeness** | Does it cover all relevant aspects? |
| **Coherence** | Is it well-structured and logically consistent? |
| **Harmlessness** | Does it avoid harmful, biased, or unsafe content? |
| **Latency** | How fast is it? (often overlooked as a metric) |
| **Cost** | Tokens in/out × price. First-class in enterprise. |

For code-specific tasks, add: **correctness**, **security**, **efficiency**.

## Tools

### DeepEval

Best for: teams that want pytest-style evaluation with CI/CD integration.

```python
from deepeval import assert_test
from deepeval.metrics import (
    AnswerRelevancyMetric,
    FaithfulnessMetric, 
    ContextualPrecisionMetric,
)
from deepeval.test_case import LLMTestCase

def test_rag_response():
    test_case = LLMTestCase(
        input="What is the Medallion Architecture?",
        actual_output=model_output,
        expected_output=reference_answer,  # optional
        retrieval_context=retrieved_docs
    )
    assert_test(test_case, [
        AnswerRelevancyMetric(threshold=0.7),
        FaithfulnessMetric(threshold=0.8),
        ContextualPrecisionMetric(threshold=0.6),
    ])
```

**Strengths:** CI/CD integration, good metric library, clear threshold-based pass/fail  
**Weaknesses:** requires an LLM evaluator (costs tokens), thresholds feel arbitrary without baselines

### LangSmith

Best for: observability, tracing, and comparing runs across model versions.

Every LangChain or LangGraph run gets traced automatically. You can:
- Compare prompts/models on the same dataset
- Track latency and token usage across versions
- Set up automated eval runs on a schedule

**Strengths:** excellent tracing, dataset management, model comparison UI  
**Weaknesses:** tightly coupled to LangChain ecosystem; can be overkill for simple use cases

### RAGAS

Best for: evaluating RAG pipelines specifically.

```python
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision

result = evaluate(
    dataset=eval_dataset,  # HuggingFace Dataset
    metrics=[faithfulness, answer_relevancy, context_precision]
)
print(result.to_pandas())
```

**Strengths:** RAG-specific metrics, clean API, good for benchmarking retrieval strategies  
**Weaknesses:** less useful for non-RAG use cases; slow on large datasets

### GitHub Models (for benchmarking)

Not an evaluation framework per se, but valuable for model comparison. Same prompts, same tasks, multiple models in one place.

For our use case at Shell: invaluable for selecting the right model per task type.

## LLM-as-Judge

Using a stronger LLM to evaluate weaker LLM outputs. Common pattern:

```python
EVAL_PROMPT = """
You are evaluating an AI assistant's response.

Question: {question}
Response: {response}
Reference: {reference}

Rate the response on:
- Accuracy (0-10): Is it factually correct?
- Relevance (0-10): Does it answer the question?
- Clarity (0-10): Is it clearly written?

Return JSON: {{"accuracy": X, "relevance": X, "clarity": X, "reasoning": "..."}}
"""
```

**Watch out for:** position bias (first answer rated higher), verbosity bias (longer ≠ better), self-evaluation bias (GPT-4 prefers GPT-4-style answers).

## What I'd Recommend

For a team just starting:
1. Pick **DeepEval** for automated metrics + CI integration
2. Use **LangSmith** for tracing and debugging (especially with LangChain/LangGraph)
3. Add **RAGAS** if you're building RAG specifically
4. Build a custom scoring rubric for domain-specific tasks (code quality, security)

The most important thing: **automate before you scale.** Manual evaluation doesn't compound; automated evaluation does.

## Open Questions I'm Still Thinking About

- How do you evaluate "style" alignment — matching an organisation's voice?
- When does LLM-as-judge become circular? (Evaluating GPT-4 with GPT-4)
- How do you handle evaluation dataset drift over time?
