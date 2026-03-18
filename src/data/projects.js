export const projects = [
  {
    id: 12,
    title: "Argus",
    description:
      "An AI-powered portfolio risk copilot that synthesizes live market data, SEC 10-K filings, and GPT-4o to generate per-position risk narratives and sentiment scores — delivering a weighted portfolio-level risk assessment in seconds.",
    tags: ["React", "FastAPI", "GPT-4o", "LangChain", "EDGAR API", "Alpaca API", "Python", "Tailwind CSS", "DistilBERT", "Railway"],
    github: "https://github.com/sharathm2020/argus",
    live: "https://argus-production-0f5b.up.railway.app",
    category: "Full Stack AI",
    featured: true,
    features: [
      "Per-position GPT-4o risk narratives with 3–5 key risk factors each",
      "Sentiment scored as weighted Positive / Negative / Neutral % via a fine-tuned DistilBERT model trained on financial_phrasebank, FIQA-sentiment-classification, and GPT-4o-generated mixed-label sentences",
      "SEC 10-K regulatory disclosure extraction via the EDGAR REST API",
      "Bloomberg-style dark UI built on React, Tailwind and FastAPI, deployed to production with Railway",
    ],
  },
  {
    id: 1,
    title: "BOB Assistant",
    description:
      "A personal AI assistant designed for everyday tasks, capable of understanding natural language commands and providing intelligent responses.",
    tags: ["AI", "Python", "LLM", "Personal Assistant"],
    github: "https://github.com/sharathm2020/bob-assistant",
    category: "AI / LLM",
    featured: true,
  },
  {
    id: 2,
    title: "RL Trading Agent",
    description:
      "A Reinforcement Learning-based automated trading system that learns optimal buy/sell strategies through environment simulation and reward maximization.",
    tags: ["Python", "Reinforcement Learning", "Trading", "RL"],
    github: "https://github.com/sharathm2020/RLTradingProj",
    category: "Machine Learning",
    featured: true,
  },
  {
    id: 3,
    title: "NBA ML Predictor",
    description:
      "Machine Learning model that predicts the winner of NBA matchups and playoff results using historical game data and statistical features.",
    tags: ["Python", "Jupyter", "ML", "Sports Analytics"],
    github: "https://github.com/sharathm2020/nba_ML_model",
    category: "Machine Learning",
    featured: true,
  },
  {
    id: 4,
    title: "Jarvis — AI Assistant",
    description:
      "A prototype inspired by Iron Man's JARVIS, built on top of OpenAI's ChatGPT API with voice-like interaction and intelligent dialogue management.",
    tags: ["Python", "OpenAI API", "ChatGPT", "Jupyter", "NLP"],
    github: "https://github.com/sharathm2020/Jarvis",
    category: "AI / LLM",
    featured: false,
  },
  {
    id: 5,
    title: "NLP Chatbot",
    description:
      "A chatbot built from the ground up using NLP techniques including tokenization, intent classification, and response generation without relying on pre-trained LLMs.",
    tags: ["Python", "NLP", "NLTK", "Chatbot"],
    github: "https://github.com/sharathm2020/NLPChatBot",
    category: "NLP",
    featured: false,
  },
  {
    id: 6,
    title: "KNN ML Model",
    description:
      "K-Nearest Neighbors classifier trained on the Yale Faces and CTG datasets, demonstrating image recognition and medical data classification.",
    tags: ["Python", "ML", "KNN", "Computer Vision"],
    github: "https://github.com/sharathm2020/Machine-Learning-KNN-Model",
    category: "Machine Learning",
    featured: false,
  },
  {
    id: 7,
    title: "Logistic Regression Classifier",
    description:
      "Binary classification model using Logistic Regression, built to demonstrate core ML concepts including gradient descent and sigmoid activation.",
    tags: ["Python", "ML", "Classification", "Statistics"],
    github: "https://github.com/sharathm2020/Machine-Learning-Logistic-Regression-Classifier",
    category: "Machine Learning",
    featured: false,
  },
  {
    id: 8,
    title: "Linear Regression Model",
    description:
      "Linear Regression implemented from scratch in Python without using ML libraries, showcasing fundamental understanding of the algorithm and mathematics.",
    tags: ["Python", "ML", "Statistics", "From Scratch"],
    github: "https://github.com/sharathm2020/Machine-Learning-Linear-Regression-Model",
    category: "Machine Learning",
    featured: false,
  },
  {
    id: 9,
    title: "Naive Bayes Classifier",
    description:
      "Probabilistic classifier implementing the Naive Bayes algorithm for text and data classification, built on Bayes' theorem principles.",
    tags: ["Python", "ML", "Probabilistic", "Classification"],
    github: "https://github.com/sharathm2020/Machine-Learning-Naive-Bayes-Classifier",
    category: "Machine Learning",
    featured: false,
  },
  {
    id: 10,
    title: "Rush Hour Solver",
    description:
      "An AI agent trained to solve the classic Rush Hour puzzle game using search algorithms including BFS, DFS, and A* pathfinding.",
    tags: ["Python", "AI", "Search Algorithms", "A*"],
    github: "https://github.com/sharathm2020/RushHour",
    category: "AI / Algorithms",
    featured: false,
  },
  {
    id: 11,
    title: "Munch Game Agent",
    description:
      "A game-playing agent for the Munch game, designed using the Mini-Max algorithm with alpha-beta pruning for optimal decision making.",
    tags: ["Python", "AI", "MiniMax", "Game Theory"],
    github: "https://github.com/sharathm2020/Munch",
    category: "AI / Algorithms",
    featured: false,
  },
];

export const categories = [
  "All",
  "AI / LLM",
  "Machine Learning",
  "NLP",
  "AI / Algorithms",
  "Web Development",
];
