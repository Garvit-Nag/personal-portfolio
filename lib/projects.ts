export interface Project {
  slug: string
  name: string
  tagline: string
  year: string
  stack: string[]
  github?: string
  live?: string
  featured?: boolean
  image?: string
  description: string
}

export const projects: Project[] = [
  {
    slug: 'qodex',
    name: 'Qodex',
    tagline: 'query any github repository in plain english.',
    year: '2025',
    stack: ['NextJs', 'React', 'TypeScript', 'TailwindCSS', 'FastAPI', 'Python', 'Pinecone', 'PostgreSQL', 'Appwrite', 'RAG'],
    github: 'https://github.com/Garvit-Nag/Qodex',
    live: 'https://qodex-gules.vercel.app',
    featured: true,
    image: '/projects/qodex.png',
    description: 'an ai-powered code repository analysis and chat system. upload a github url — the backend clones it, generates embeddings locally using sentencetransformer (all-minilm-l6-v2), stores full code in postgresql, and indexes vectors in pinecone. ask questions and get accurate answers with precise code citations. features appwrite authentication and repository-scoped conversations.'
  },
  {
    slug: 'credify',
    name: 'Credify',
    tagline: 'digital content authentication and forgery detection.',
    year: '2024',
    stack: ['NextJs', 'React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'FastAPI', 'Python', 'Machine Learning'],
    github: 'https://github.com/abhisheksharm-3/credify',
    live: 'https://verifiedbycredify.vercel.app',
    featured: true,
    image: '/projects/credify.png',
    description: 'built during the gen ai exchange hackathon, won the network 18 track. tackles misinformation through creator verification with secure identity auth, blockchain-inspired hashing for tamper-proof content attribution, and advanced forgery detection algorithms via machine learning models. built with a team of four in 48 hours.'
  },
  {
    slug: 'maestro',
    name: 'Maestro',
    tagline: 'conversational football intelligence with multi-tool ai.',
    year: '2025',
    stack: ['NextJs', 'React', 'TypeScript', 'TailwindCSS', 'Supabase', 'HTML', 'CSS'],
    github: 'https://github.com/Garvit-Nag/maestro',
    live: 'https://maestro-opal-psi.vercel.app',
    image: '/projects/maestro.png',
    description: 'a conversational football assistant with multi-tool ai orchestration. users ask questions in natural language; the server decides which live-data apis to call across football-data.org, api-football, thesportsdb, and newsapi, executes them in parallel, and returns combined text + visualization responses through 19 typed ui components. features multi-turn conversations stored in supabase.'
  },
  {
    slug: 'weather',
    name: 'Weather',
    tagline: 'minimal weather app with multi-provider fallback.',
    year: '2025',
    stack: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'CSS', 'HTML'],
    github: 'https://github.com/Garvit-Nag/weather',
    live: 'https://weather-rouge-chi.vercel.app',
    image: '/projects/weather.png',
    description: 'a precise weather application orchestrating seamlessly between openweathermap, weatherapi, and open-meteo to guarantee data freshness and reliable uptime. features high-precision geocoding with rapid city search, unblocked ui interactions, strict typescript with modular adapter patterns, and persistent theme (dark/light) preferences.'
  },
  {
    slug: 'dev-events',
    name: 'Dev Events',
    tagline: 'developer event discovery and management platform.',
    year: '2025',
    stack: ['NextJs', 'React', 'TypeScript', 'TailwindCSS', 'MongoDB'],
    github: 'https://github.com/Garvit-Nag/dev-events',
    live: 'https://dev-events-ebon-theta.vercel.app',
    image: '/projects/dev.png',
    description: 'a platform for discovering and managing developer events, hackathons, and conferences. features a public event catalog with seo-friendly dynamic routing, a secure admin dashboard with full crud functionality behind cookie-based session middleware, and integrated image hosting.'
  },
  {
    slug: 'medisage',
    name: 'MediSage',
    tagline: 'ai-powered medical symptom analysis platform.',
    year: '2024',
    stack: ['NextJs', 'React', 'TypeScript', 'TailwindCSS', 'FastAPI', 'Python', 'MongoDB', 'Appwrite'],
    github: 'https://github.com/Garvit-Nag/MediSage',
    live: 'https://medi-sage.vercel.app',
    image: '/projects/medisage.png',
    description: 'a medical symptom analysis platform offering holistic health assessment and anatomical precision analysis via body mapping. utilizes a fastapi backend, appwrite auth, and stripe subscriptions (free/premium/clinical tiers). uses mongodb for data and redis for rate limiting on the free tier.'
  },
  {
    slug: 'revibe',
    name: 'Revibe',
    tagline: 'music recommender using clustering algorithms.',
    year: '2024',
    stack: ['NextJs', 'React', 'TypeScript', 'TailwindCSS', 'FastAPI', 'Python', 'Machine Learning'],
    github: 'https://github.com/Garvit-Nag/Revibe-Remastered',
    live: 'https://revibe-audio.vercel.app',
    image: '/projects/revibe.png',
    description: 'an intelligent music recommendation system that analyzes 12 audio features to find similar songs. features 30-second preview clips from itunes, real-time recommendations, and a fastapi backend leveraging python machine learning for advanced data processing and grouping.'
  },
  {
    slug: 'cosmic-share',
    name: 'Cosmic Share',
    tagline: 'file sharing platform with secure, auto-expiring links.',
    year: '2024',
    stack: ['NextJs', 'React', 'TypeScript', 'TailwindCSS', 'FastAPI', 'Python', 'Appwrite', 'CSS'],
    github: 'https://github.com/Garvit-Nag/CosmicShare',
    live: 'https://cosmic-share.vercel.app',
    image: '/projects/cosmic.png',
    description: 'a file sharing platform with auto-expiring links (30 seconds to 1 week). supports documents, images, audio, and video up to 50mb. uses appwrite storage on the backend with automatic cleanup of expired files. features a space-themed ui with animated vortex background.'
  },
  {
    slug: 'taskflow',
    name: 'TaskFlow',
    tagline: 'full-stack todo app with jwt auth and dark ui.',
    year: '2024',
    stack: ['React', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'FastAPI', 'Python', 'PostgreSQL', 'Supabase'],
    github: 'https://github.com/Garvit-Nag/Taskflow',
    live: 'https://taskflow-delta-three.vercel.app',
    image: '/projects/taskflow.png',
    description: 'a full-stack todo application with fastapi backend, react frontend, and postgresql (supabase). features jwt auth via oauth2 password flow, per-user crud operations, admin endpoints, and robust database migrations. includes user profile management and password change functionality.'
  },
  {
    slug: 'inklore',
    name: 'InkLore',
    tagline: 'ai story generator trained on custom models.',
    year: '2023',
    stack: ['NextJs', 'React', 'TypeScript', 'TailwindCSS', 'FastAPI', 'Python', 'Machine Learning'],
    github: 'https://github.com/Garvit-Nag/InkLore',
    image: '/projects/inklore.png',
    description: 'an ai story generator utilizing specialized training data to craft unique narratives. features adjustable creativity via temperature parameter (0.1–1.0) and a multi-stage text processing pipeline. built with a highly responsive nextjs frontend communicating with a python ml backend.'
  },
  {
    slug: 'sumitup',
    name: 'SumItUp',
    tagline: 'document summarization via natural language processing.',
    year: '2024',
    stack: ['Python', 'Machine Learning', 'HTML', 'CSS'],
    github: 'https://github.com/Garvit-Nag/SumItUp',
    live: 'https://huggingface.co/spaces/garvitcpp/Sum-it-up',
    image: '/projects/sumitup.png',
    description: 'a document summarization tool using advanced large language models via huggingface transformers. supports direct text input and file uploads (txt, pdf, docx) with configurable summary lengths. built with streamlit for the interface and robust ml frameworks for the backend.'
  },
  {
    slug: 'pmsss-portal',
    name: 'PMSSS Portal',
    tagline: 'scholarship application and upload management portal.',
    year: '2024',
    stack: ['NextJs', 'React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Appwrite'],
    github: 'https://github.com/binge-coder/pmsss-website',
    live: 'https://pramanik.vercel.app',
    image: '/projects/pmsss.png',
    description: 'a scholarship application portal for pmsss built with nextjs, typescript, and appwrite. designed for the smart india hackathon (internal winner, aicte id: 1728). streamlines document uploads and application tracking for scholarship disbursement.'
  },
  {
    slug: 'reciperover',
    name: 'Recipe Rover',
    tagline: 'recipe discovery based on available ingredients.',
    year: '2024',
    stack: ['NextJs', 'React', 'TypeScript', 'TailwindCSS', 'FastAPI', 'Python', 'MongoDB'],
    github: 'https://github.com/Garvit-Nag/RecipeRover-Production',
    live: 'https://recipe-rover-fun.vercel.app',
    image: '/projects/recipe.png',
    description: 'a full-stack web application for recipe discovery based on available ingredients. features customizable search filters by ingredients, preparation time, and cuisine type, along with ingredient inventory management. constructed using a robust python backend and interactive nextjs frontend.'
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}
