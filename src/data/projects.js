// ── Projects ─────────────────────────────────────────────────
// Add new projects at the top (most recent first).
// Set github/demo to null if not available.

export const projects = [
  {
    name: 'Multimodal RAG using LangChain',
    date: 'Feb 2025',
    description:
      'A multimodal RAG system that retrieves information across text, tables, and images — overcoming the limitations of text-only retrieval. Uses GPT-4o-mini, Gemini-1.5-pro, and Groq for summarisation, ChromaDB for vector storage, and Streamlit for the query interface.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'Unstructured', 'Streamlit'],
    github: 'https://github.com/saumyagupta2025',
    demo: null,
    app: null,   // Add live app URL here e.g. 'https://myapp.streamlit.app'
  },
  {
    name: 'Health Information & Diagnostic System',
    date: 'Jun 2022',
    description:
      'Web application predicting diseases from health parameters and diagnostic images. Achieved 97% accuracy for brain stroke, 95% for heart attack and tuberculosis, 85% for diabetes, and 95%+ for symptom-based prediction.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Streamlit'],
    github: 'https://github.com/saumyagupta2025',
    demo: null,
    app: null,   // Add live app URL here
  },
]
