// ── Library ───────────────────────────────────────────────────
// Edit this file to update your Books, Videos, and Articles pages.
// status for books: "reading" | "read" | "want-to-read"
// type for videos: "channel" | "video"

export const books = [
  {
    title: 'The Mountain is You',
    author: 'Brianna Wiest',
    status: 'reading',
    tag: 'Self',
    notes: 'On self-sabotage and the inner work of becoming who you want to be.',
    link: null,
  },
  {
    title: 'Designing Machine Learning Systems',
    author: 'Chip Huyen',
    status: 'reading',
    tag: 'AI/ML',
    notes: 'Comprehensive guide to production ML — from data pipelines to deployment.',
    link: null,
  },
  {
    title: 'Hands-On Large Language Models',
    author: 'Jay Alammar & Maarten Grootendorst',
    status: 'want-to-read',
    tag: 'AI/ML',
    notes: null,
    link: null,
  },
  {
    title: 'The Inevitable',
    author: 'Kevin Kelly',
    status: 'want-to-read',
    tag: 'Technology',
    notes: 'On the 12 technological forces shaping our future.',
    link: null,
  },
]

export const videos = [
  {
    title: 'Andrej Karpathy',
    description: 'Deep dives into neural networks, LLMs, and AI fundamentals. His "Neural Networks: Zero to Hero" series is exceptional.',
    url: 'https://www.youtube.com/@AndrejKarpathy',
    type: 'channel',
    tag: 'AI/ML',
  },
  {
    title: 'Two Minute Papers',
    description: 'Quick, enthusiastic summaries of the latest AI research. Great for staying current.',
    url: 'https://www.youtube.com/@TwoMinutePapers',
    type: 'channel',
    tag: 'AI Research',
  },
  {
    title: "Let's build GPT: from scratch, in code, spelled out",
    description: 'Andrej Karpathy builds a GPT from scratch. The clearest explanation of transformers I\'ve seen.',
    url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY',
    type: 'video',
    tag: 'AI/ML',
  },
  {
    title: 'AI Engineer',
    description: 'Conference talks, interviews, and deep-dives from the AI Engineer Summit. Covers agents, evals, RAG, and the state of AI engineering.',
    url: 'https://www.youtube.com/@aiDotEngineer',
    type: 'channel',
    tag: 'AI Engineering',
  },
]

export const podcasts = [
  {
    title: 'Latent Space',
    description: 'The AI engineering podcast. Deeply technical conversations about building with LLMs — evals, agents, infra, and the people doing it.',
    url: 'https://www.latent.space/podcast',
    tag: 'AI Engineering',
  },
  {
    title: 'Lex Fridman Podcast',
    description: 'Long-form conversations with researchers, engineers, and scientists. The AI episodes are essential listening.',
    url: 'https://lexfridman.com/podcast/',
    tag: 'AI/ML',
  },
  {
    title: 'The TWIML AI Podcast',
    description: 'This Week in Machine Learning — interviews with ML researchers and practitioners on the latest in the field.',
    url: 'https://twimlai.com/podcast/twimlai/',
    tag: 'AI/ML',
  },
]

export const articles = [
  {
    title: "Lilian Weng's Blog",
    source: 'lilianweng.github.io',
    url: 'https://lilianweng.github.io',
    tag: 'AI/ML',
    notes: 'Exceptional technical deep-dives on RL, diffusion models, agents, and LLMs from an OpenAI researcher.',
  },
  {
    title: "Simon Willison's Weblog",
    source: 'simonwillison.net',
    url: 'https://simonwillison.net',
    tag: 'AI Tools',
    notes: 'Best practical writing on LLM tooling, prompt engineering, and AI safety.',
  },
  {
    title: 'Hacker News',
    source: 'news.ycombinator.com',
    url: 'https://news.ycombinator.com',
    tag: 'Tech',
    notes: 'Morning reading. Comments are often better than the articles.',
  },
  {
    title: "Eugene Yan's Blog",
    source: 'eugeneyan.com',
    url: 'https://eugeneyan.com',
    tag: 'AI/ML',
    notes: 'Practical ML systems writing — RecSys, LLMs, and career reflections.',
  },
]
