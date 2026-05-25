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
  {
    title: "Let's build GPT: from scratch, in code, spelled out",
    description: 'Andrej Karpathy builds a GPT from scratch. The clearest explanation of transformers I\'ve seen.',
    url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY',
    type: 'video',
    tag: 'AI/ML',
  },
  {
    title: 'Intro to Large Language Models',
    description: 'Karpathy\'s one-hour overview of LLMs — how they work, how they\'re trained, and where they\'re going.',
    url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g',
    type: 'video',
    tag: 'LLM',
  },
  {
    title: 'But what is a neural network?',
    description: '3Blue1Brown\'s legendary visual introduction to neural networks. The best starting point for anyone.',
    url: 'https://www.youtube.com/watch?v=aircAruvnKk',
    type: 'video',
    tag: 'AI/ML',
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
  {
    title: 'The Data Engineering Podcast',
    description: 'Practical conversations about data pipelines, infrastructure, and the tools that make modern data work.',
    url: 'https://www.dataengineeringpodcast.com/',
    tag: 'Data Engineering',
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
