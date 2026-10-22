export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export const getExperiences = (): Experience[] => [
  {
    role: "Software Engineer 1, Generative AI",
    company: "Build Fast with AI",
    period: "Present",
    highlights: [
      "Built a production-grade document processing pipeline using Redis-backed queues and LLMs to extract and process data, cutting manual workload by 60%.",
      "Reduced LLM costs by 60% through token optimization on a tech product for one of the largest solar providers in the US.",
      "Designed and shipped an internal email platform on AWS SES, SQS, Next.js, and PostgreSQL in 4 weeks, cutting email costs by 87%.",
      "Built GenAI apps and custom pipelines for text generation, summarization, code assistance, image generation, and chat, using GPT, Claude, Mistral, LLaMA, and Gemini through OpenRouter.",
      "Worked with the deployment team to ship applications to production on Azure.",
      "Maintain backend services on PostgreSQL, Supabase, and vector databases, and mentor junior developers.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Build Fast with AI",
    period: "Aug 2023 to Jan 2024",
    highlights: [
      "Designed the database schema, relationships, and CRUD operations, and built a custom authentication system on Supabase.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Bharat One Care",
    period: "Oct 2023 to Dec 2023",
    highlights: [
      "Built RESTful APIs and Firebase authentication with role-based access control, and took part in code reviews.",
    ],
  },
  {
    role: "Product Engineer",
    company: "Ensemble Inc",
    period: "Nov 2022 to Oct 2023",
    highlights: [
      "Built responsive web apps with React.js and Next.js in an Agile team.",
    ],
  },
  {
    role: "Project Intern",
    company: "TCS iON",
    period: "Jun 2022 to Jul 2022",
    highlights: [
      "Built a deep learning model to detect emotions in English text and automate sentiment analysis of feedback.",
    ],
  },
];

export const earlierRoles =
  "Earlier roles: MERN Stack Developer at Docsup in 2022, and Web Software Developer at Arca Innovation in 2021.";
