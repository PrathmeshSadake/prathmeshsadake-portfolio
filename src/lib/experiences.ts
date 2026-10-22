export interface ExperienceTech {
  name: string;
  icon: string; // file in /public/assets/icons
}

export interface ExperienceRole {
  role: string;
  period: string;
  highlights: string[];
  tech: ExperienceTech[];
}

export interface Experience {
  company: string;
  roles: ExperienceRole[];
}

export const getExperiences = (): Experience[] => [
  {
    company: "Build Fast with AI",
    roles: [
      {
        role: "Software Development Intern",
        period: "Aug 2023 to Jan 2024",
        highlights: [
          "Designed the database schema, relationships, and CRUD operations, and built a custom authentication system on Supabase.",
        ],
        tech: [
          { name: "Supabase", icon: "supabase" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Next.js", icon: "nextdotjs" },
          { name: "React", icon: "react" },
        ],
      },
      {
        role: "Software Engineer 1, Generative AI",
        period: "Present",
        highlights: [
          "Built a production-grade document processing pipeline using Redis-backed queues and LLMs to extract and process data, cutting manual workload by 60%.",
          "Reduced LLM costs by 60% through token optimization on a tech product for one of the largest solar providers in the US.",
          "Designed and shipped an internal email platform on AWS SES, SQS, Next.js, and PostgreSQL in 4 weeks, cutting email costs by 87%.",
          "Built GenAI apps and custom pipelines for text generation, summarization, code assistance, image generation, and chat, using GPT, Claude, Mistral, LLaMA, and Gemini through OpenRouter.",
          "Worked with the deployment team to ship applications to production on Azure.",
          "Maintain backend services on PostgreSQL, Supabase, and vector databases, and mentor junior developers.",
        ],
        tech: [
          { name: "OpenAI", icon: "openai" },
          { name: "Anthropic Claude", icon: "anthropic" },
          { name: "AWS", icon: "amazonwebservices" },
          { name: "Redis", icon: "redis" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Supabase", icon: "supabase" },
          { name: "Next.js", icon: "nextdotjs" },
          { name: "Node.js", icon: "nodedotjs" },
          { name: "Python", icon: "python" },
          { name: "React", icon: "react" },
          { name: "MySQL", icon: "mysql" },
          { name: "JavaScript", icon: "javascript" },
        ],
      },
    ],
  },
  {
    company: "Bharat One Care",
    roles: [
      {
        role: "Software Development Intern",
        period: "Oct 2023 to Dec 2023",
        highlights: [
          "Built RESTful APIs and Firebase authentication with role-based access control, and took part in code reviews.",
        ],
        tech: [
          { name: "Firebase", icon: "firebase" },
          { name: "Node.js", icon: "nodedotjs" },
          { name: "JavaScript", icon: "javascript" },
          { name: "React", icon: "react" },
          { name: "MySQL", icon: "mysql" },
        ],
      },
    ],
  },
  {
    company: "Ensemble Inc",
    roles: [
      {
        role: "Product Engineer",
        period: "Nov 2022 to Oct 2023",
        highlights: [
          "Built responsive web apps with React.js and Next.js in an Agile team.",
        ],
        tech: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextdotjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Node.js", icon: "nodedotjs" },
        ],
      },
    ],
  },
  {
    company: "TCS iON",
    roles: [
      {
        role: "Project Intern",
        period: "Jun 2022 to Jul 2022",
        highlights: [
          "Built a deep learning model to detect emotions in English text and automate sentiment analysis of feedback.",
        ],
        tech: [
          { name: "Python", icon: "python" },
          { name: "PyTorch", icon: "pytorch" },
          { name: "pandas", icon: "pandas" },
          { name: "NumPy", icon: "numpy" },
          { name: "Jupyter", icon: "jupyter" },
        ],
      },
    ],
  },
];

export const earlierRoles =
  "Earlier roles: MERN Stack Developer at Docsup in 2022, and Web Software Developer at Arca Innovation in 2021.";
