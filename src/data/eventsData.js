export const SECTION_METADATA = {
  hackathons: {
    id: 'hackathons',
    title: 'Hackathons',
    subtitle: 'Build revolutionary prototypes, hack around the clock, and compete for massive prize pools.',
    icon: 'terminal',
    tagline: '48-72h Sprint Competitions',
    bannerImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
  },
  competitions: {
    id: 'competitions',
    title: 'Competitions',
    subtitle: 'Sharpen your algorithmic prowess, solve complex optimization problems, and climb global rank lists.',
    icon: 'emoji_events',
    tagline: 'Speed & Code Mastery',
    bannerImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80'
  },
  workshops: {
    id: 'workshops',
    title: 'Workshops',
    subtitle: 'Hands-on masterclasses hosted by industry architects, core maintainers, and tech leaders.',
    icon: 'lightbulb',
    tagline: 'Interactive Skill Acceleration',
    bannerImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80'
  },
  quizzes: {
    id: 'quizzes',
    title: 'Quizzes',
    subtitle: 'Fast-paced, timed technical trivia challenges to test your core computer science & dev mastery.',
    icon: 'quiz',
    tagline: 'Daily & Weekly Trivia Challenges',
    bannerImage: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80'
  }
};

export const EVENTS_DATA = {
  hackathons: {
    ongoing: [
      {
        id: 'hack-1',
        title: 'Quantum Computing Hack Matrix 2026',
        category: 'Quantum SDK & AI',
        difficulty: 'Advanced',
        prizePool: '$50,000',
        participantsCount: 1420,
        endsIn: '18:45:12',
        description: 'Push the limits of distributed quantum computing! Build high-performance hybrid quantum algorithms leveraging Qiskit and PennyLane SDKs.',
        tags: ['Quantum', 'Python', 'Qiskit', 'Linear Algebra'],
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
        organizer: 'Q-Labs Global'
      },
      {
        id: 'hack-2',
        title: 'Autonomous AI Agents Challenge',
        category: 'AI & Machine Learning',
        difficulty: 'Intermediate',
        prizePool: '$35,000',
        participantsCount: 2150,
        endsIn: '06:12:40',
        description: 'Design multi-agent collaborative systems capable of solving real-world code refactoring and multi-tool planning tasks.',
        tags: ['LLMs', 'LangChain', 'Python', 'AutoGPT'],
        isFeatured: false,
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        organizer: 'OpenAI Ecosystem'
      }
    ],
    upcoming: [
      {
        id: 'hack-3',
        title: 'Web3 Zero-Knowledge Privacy Hack',
        category: 'Blockchain & Cryptography',
        difficulty: 'Advanced',
        prizePool: '$40,000',
        startsIn: '3 Days',
        startDate: 'Aug 20, 2026',
        regDeadline: 'Aug 19, 2026',
        description: 'Build zero-knowledge proof protocols and confidential smart contract systems using Circom and Noir.',
        tags: ['ZK-Rollups', 'Rust', 'Solidity', 'Circom'],
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
        organizer: 'PrivacyDAO'
      },
      {
        id: 'hack-4',
        title: 'GreenCode Eco-Tech 2026',
        category: 'Sustainability & IoT',
        difficulty: 'All Levels',
        prizePool: '$25,000',
        startsIn: '1 Week',
        startDate: 'Aug 25, 2026',
        regDeadline: 'Aug 24, 2026',
        description: 'Create low-energy consumption embedded systems and smart grid optimization platforms for green urban living.',
        tags: ['IoT', 'Embedded C', 'React', 'Sustainability'],
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
        organizer: 'EcoTech Foundation'
      }
    ],
    concluded: [
      {
        id: 'hack-5',
        title: 'Global CyberDefense Hackathon 2025',
        category: 'Cybersecurity',
        prizePool: '$60,000',
        totalTeams: 480,
        winners: [
          { rank: '1st Place', team: 'Team AegisZK', prize: '$30,000', project: 'Real-time Autonomous Threat Neutralizer' },
          { rank: '2nd Place', team: 'NullPointer Guild', prize: '$18,000', project: 'Decentralized Identity Firewall' },
          { rank: '3rd Place', team: 'ByteShield', prize: '$12,000', project: 'AI Log Anomaly Parser' }
        ],
        summary: 'Over 480 teams submitted 320 valid security defense systems within 48 continuous hacking hours.',
        tags: ['Security', 'Rust', 'eBPF', 'AI'],
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  competitions: {
    ongoing: [
      {
        id: 'comp-1',
        title: 'AlgoSprint #42: Dynamic Programming Arena',
        category: 'Competitive Programming',
        difficulty: 'Hard',
        prizePool: '$5,000',
        participantsCount: 3400,
        endsIn: '02:15:00',
        description: '6 hard dynamic programming & Graph theory challenges in 3 hours. Rapid algorithmic submission with automated testing.',
        tags: ['C++', 'Python', 'Algorithms', 'Data Structures'],
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        organizer: 'HackWithUs CodeLeague'
      }
    ],
    upcoming: [
      {
        id: 'comp-2',
        title: 'UI/UX Design Royale 2026',
        category: 'UI/UX & Product',
        difficulty: 'Intermediate',
        prizePool: '$8,000',
        startsIn: '2 Days',
        startDate: 'Aug 18, 2026',
        regDeadline: 'Aug 17, 2026',
        description: 'Design a sleek responsive interface for futuristic space exploration logistics. Judged on typography, UX flow, and micro-interactions.',
        tags: ['Figma', 'Design System', 'UI/UX', 'Prototyping'],
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
        organizer: 'DesignWorks Guild'
      },
      {
        id: 'comp-3',
        title: 'CyberShield CTF: Capture The Flag',
        category: 'Security / CTF',
        difficulty: 'Advanced',
        prizePool: '$15,000',
        startsIn: '5 Days',
        startDate: 'Aug 21, 2026',
        regDeadline: 'Aug 20, 2026',
        description: 'Jeopardy-style CTF challenge featuring Binary Exploitation, Reverse Engineering, Cryptography, and Web Hacking.',
        tags: ['CTF', 'Pwn', 'Reverse Engineering', 'Crypto'],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        organizer: 'RedTeam Security'
      }
    ],
    concluded: [
      {
        id: 'comp-4',
        title: 'Data Science ML Speedrun 2025',
        category: 'Machine Learning',
        prizePool: '$20,000',
        totalTeams: 850,
        winners: [
          { rank: '1st Place', team: 'DeepMinds_X', prize: '$10,000', project: '0.998 F1-Score Predictor' },
          { rank: '2nd Place', team: 'GradientBoosted', prize: '$6,000', project: 'XGBoost Ensemble Model' },
          { rank: '3rd Place', team: 'FeatureEngineering', prize: '$4,000', project: 'Transformer Embeddings' }
        ],
        summary: 'Competitors optimized predictive model latency and accuracy over a 10GB streaming financial dataset.',
        tags: ['PyTorch', 'Scikit-Learn', 'Pandas', 'XGBoost'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  workshops: {
    ongoing: [
      {
        id: 'work-1',
        title: 'Mastering Rust & WebAssembly for Ultra-Fast Web Apps',
        category: 'Systems & Web',
        difficulty: 'Intermediate',
        prizePool: 'Free Swag + Certificate',
        participantsCount: 890,
        endsIn: '01:30:20',
        description: 'Live hands-on workshop building high-performance image processing modules with Rust compiled directly to WebAssembly.',
        tags: ['Rust', 'WebAssembly', 'JavaScript', 'Performance'],
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
        organizer: 'Rust Foundation Lead Devs'
      }
    ],
    upcoming: [
      {
        id: 'work-2',
        title: 'Building Production-Ready LLM Agents from Scratch',
        category: 'AI Engineering',
        difficulty: 'Intermediate',
        prizePool: 'Course Voucher ($300 value)',
        startsIn: 'Tomorrow at 4 PM UTC',
        startDate: 'Aug 17, 2026',
        regDeadline: 'Aug 16, 2026',
        description: 'Learn memory management, function calling, tool use, and evaluation benchmarks for LLM-powered agentic systems.',
        tags: ['Python', 'OpenAI API', 'LangGraph', 'RAG'],
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        organizer: 'AI Architects Club'
      },
      {
        id: 'work-3',
        title: 'Kubernetes & GitOps CI/CD Pipelines Masterclass',
        category: 'DevOps & Cloud',
        difficulty: 'Advanced',
        prizePool: 'Cloud Credits $500',
        startsIn: '4 Days',
        startDate: 'Aug 19, 2026',
        regDeadline: 'Aug 18, 2026',
        description: 'Deploy auto-scaling microservices on Kubernetes using ArgoCD, Helm charts, and Terraform infrastructure as code.',
        tags: ['Kubernetes', 'ArgoCD', 'Docker', 'Terraform'],
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
        organizer: 'CloudNative Guild'
      }
    ],
    concluded: [
      {
        id: 'work-4',
        title: 'Next.js 15 & Server Actions Architecture Workshop',
        category: 'Frontend Engineering',
        prizePool: 'Verified Badge',
        totalTeams: 1200,
        winners: [
          { rank: 'Top Contributor', team: 'Alex Rivera', prize: 'Pro License', project: 'Full-stack E-commerce Engine' },
          { rank: 'Best Project', team: 'DevSquad', prize: 'Cloud Subscriptions', project: 'Real-time Canvas Whiteboard' }
        ],
        summary: 'Attended by 1,200+ frontend engineers learning server components, caching strategies, and streaming SSR.',
        tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  quizzes: {
    ongoing: [
      {
        id: 'quiz-1',
        title: 'Daily JavaScript Engine & V8 Internal Blitz Quiz',
        category: 'JavaScript & Web CS',
        difficulty: 'Medium',
        prizePool: '$500 Daily Prize',
        participantsCount: 4200,
        endsIn: '04:10:00',
        description: '15 quick-fire questions on event loop microtasks, prototype inheritance, and JIT compilation quirks in V8.',
        tags: ['JavaScript', 'V8 Engine', 'Async/Await', 'Memory'],
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80',
        organizer: 'JS Mastery Hub'
      }
    ],
    upcoming: [
      {
        id: 'quiz-2',
        title: 'System Design & Distributed Architecture Quiz',
        category: 'System Design',
        difficulty: 'Hard',
        prizePool: '$1,000 Cash + Swag',
        startsIn: '2 Days',
        startDate: 'Aug 18, 2026',
        regDeadline: 'Aug 17, 2026',
        description: 'Test your knowledge on CAP theorem, database sharding, rate limiting algorithms, and consensus protocols (Raft/Paxos).',
        tags: ['System Design', 'Kafka', 'Redis', 'Distributed Systems'],
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
        organizer: 'Architects Alliance'
      },
      {
        id: 'quiz-3',
        title: 'Git Internals & Command Mastery Speedrun',
        category: 'Developer Tools',
        difficulty: 'Easy/Medium',
        prizePool: 'Dev Swag Pack',
        startsIn: '5 Days',
        startDate: 'Aug 21, 2026',
        regDeadline: 'Aug 20, 2026',
        description: 'Do you know your git reflogs from your git cherry-picks? Test your mastery of Git objects, trees, and interactive rebase.',
        tags: ['Git', 'CLI', 'DevTools', 'Linux'],
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
        organizer: 'HackWithUs QuizMaster'
      }
    ],
    concluded: [
      {
        id: 'quiz-4',
        title: 'Weekly Computer Science Core Trivia #88',
        category: 'CS Fundamentals',
        prizePool: '$1,500 Prize Pool',
        totalTeams: 3100,
        winners: [
          { rank: '1st Place (100% Score - 42s)', team: 'ByteWizard', prize: '$750', project: '15/15 Correct' },
          { rank: '2nd Place (100% Score - 58s)', team: 'StackOverflowed', prize: '$450', project: '15/15 Correct' },
          { rank: '3rd Place (93% Score - 35s)', team: 'MemoryLeak', prize: '$300', project: '14/15 Correct' }
        ],
        summary: 'Over 3,100 developers participated in our weekly CS fundamentals trivia battle.',
        tags: ['CS Core', 'OS', 'Networking', 'Algorithms'],
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
};
