// ── Library ───────────────────────────────────────────────────
// Edit this file to update your Books, Videos, and Articles pages.
// status for books: "reading" | "read" | "want-to-read"
// type for videos: "channel" | "video"

export const books = [
  {
    title: 'The Alignment Problem',
    author: 'Brian Christian',
    status: 'reading',
    tag: 'AI',
    notes: 'A deep look at the challenge of making AI systems behave as intended. Required reading for anyone building AI.',
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
    title: 'Building a Second Brain',
    author: 'Tiago Forte',
    status: 'read',
    tag: 'Productivity',
    notes: 'Changed how I organise notes and knowledge. Introduced me to the PARA method.',
    link: null,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    status: 'read',
    tag: 'Engineering',
    notes: 'Timeless software engineering philosophy. Re-read sections regularly.',
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
    title: '3Blue1Brown',
    description: 'Beautiful visual explanations of math, linear algebra, and neural networks. Changed how I think about gradients.',
    url: 'https://www.youtube.com/@3blue1brown',
    type: 'channel',
    tag: 'Math',
  },
  {
    title: 'Yannic Kilcher',
    description: 'In-depth walkthroughs of AI research papers and commentary on the field.',
    url: 'https://www.youtube.com/@YannicKilcher',
    type: 'channel',
    tag: 'AI Research',
  },
  {
    title: 'Two Minute Papers',
    description: 'Quick, enthusiastic summaries of the latest AI research. Great for staying current.',
    url: 'https://www.youtube.com/@TwoMinutePapers',
    type: 'channel',
    tag: 'AI Research',
  },
  {
    title: 'Lex Fridman',
    description: 'Long-form interviews with researchers, engineers, and thinkers at the frontier of AI.',
    url: 'https://www.youtube.com/@lexfridman',
    type: 'channel',
    tag: 'Interviews',
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
    title: 'The Batch by Andrew Ng',
    source: 'deeplearning.ai',
    url: 'https://www.deeplearning.ai/the-batch/',
    tag: 'AI/ML',
    notes: 'Weekly AI newsletter — good signal-to-noise ratio.',
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
