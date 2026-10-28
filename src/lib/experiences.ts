export interface ExperienceTech {
  name: string;
  icon: string; // file in /public/assets/icons
}

export interface ExperienceRole {
  role: string;
  period: string;
  /** Full-time, Part-time, Freelance, Internship */
  type: string;
  location: string;
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
        role: "Lead Software Engineer (Founding Team)",
        period: "Jan 2024 to present",
        type: "Full-time",
        location: "Remote",
        highlights: [
          "Lead the engineering of production Generative AI products built on Claude, Gemini and open models, from design through deployment.",
          "Ship secure LLM systems and AI agents: guardrails against prompt injection and data leaks, an LLM gateway for routing, rate limits and cost control, eval suites with LLM-as-judge, and tracing so every run can be inspected.",
          "Built a document processing pipeline on Redis-backed queues and LLMs that turns unstructured documents into structured data at scale.",
          "Cut LLM costs for a large US solar provider's product through token optimization, caching and model routing.",
          "Designed and shipped an internal email platform on AWS and PostgreSQL, replacing a paid provider.",
          "Work with coding agents and deep-agent workflows (Claude Code, subagents, MCP) as the default way to build, with every change reviewed.",
          "Own backend services on PostgreSQL, Redis and Pinecone, ship to production on Azure, and mentor junior developers.",
        ],
        tech: [
          { name: "OpenAI", icon: "openai" },
          { name: "Anthropic Claude", icon: "anthropic" },
          { name: "Python", icon: "python" },
          { name: "AWS", icon: "amazonwebservices" },
          { name: "Redis", icon: "redis" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Next.js", icon: "nextdotjs" },
          { name: "Node.js", icon: "nodedotjs" },
          { name: "TypeScript", icon: "typescript" },
        ],
      },
      {
        role: "Software Development Intern (Founding Team)",
        period: "Aug 2023 to Jan 2024",
        type: "Internship",
        location: "Remote",
        highlights: [
          "Designed the database schema, relationships and CRUD operations for the first version of the platform.",
          "Built a custom authentication system with sessions and role-based access.",
        ],
        tech: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Next.js", icon: "nextdotjs" },
          { name: "React", icon: "react" },
        ],
      },
    ],
  },
  {
    company: "BharatOne Care",
    roles: [
      {
        role: "Software Development Intern",
        period: "Oct 2023 to Dec 2023",
        type: "Part-time",
        location: "Remote",
        highlights: [
          "Implemented RESTful APIs for communication between the client and server.",
          "Built user authentication and authorization: registration, login, password reset and role-based access control.",
          "Took part in code reviews to keep code quality up and learn from more experienced developers on the team.",
        ],
        tech: [
          { name: "React", icon: "react" },
          { name: "Node.js", icon: "nodedotjs" },
          { name: "JavaScript", icon: "javascript" },
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
        type: "Freelance",
        location: "Remote",
        highlights: [
          "Developed and maintained responsive web applications with React.js and Next.js.",
          "Used Git for version control and collaboration across the development team.",
          "Worked in an Agile environment: sprint planning, daily stand-ups, and reviewing application requirements and interface designs.",
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
        type: "Internship",
        location: "Mumbai, India",
        highlights: [
          "Automated the detection of sentiment in textual comments and feedback.",
          "Developed a deep learning model to detect the emotions in English sentences and longer passages.",
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
