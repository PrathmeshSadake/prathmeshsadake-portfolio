export interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: { href: string; label: string };
}

export const getProjects = (): Project[] => [
  {
    title: "AI Document Processing Pipeline",
    description:
      "Queue-based LLM extraction that turns unstructured documents into structured data at production scale. Thousands processed, manual work down 60%.",
    stack: ["Redis", "LLMs", "Azure"],
  },
  {
    title: "Distributed LinkedIn Clone",
    description:
      "A social platform built as Java and Spring Boot microservices with a Neo4j connection graph and Kafka notifications, deployed on GKE behind an API gateway.",
    stack: ["Java", "Spring Boot", "Neo4j", "Kafka", "Kubernetes"],
  },
  {
    title: "Custom Email Platform on AWS",
    description:
      "Replaced a paid email provider with an SES and SQS pipeline with retries, bounce handling, and an admin dashboard. Shipped solo in 4 weeks, costs down 87%.",
    stack: ["AWS SES", "SQS", "Next.js", "PostgreSQL"],
    link: { href: "/blog", label: "Case study" },
  },
  {
    title: "Talkerz: AI English Speaking Coach",
    description:
      "AI voice interviews that score fluency, pronunciation, grammar, and vocabulary in real time. 10K+ learners, 4.9 rating.",
    stack: ["Next.js", "Speech APIs", "OpenAI", "Firebase"],
  },
  {
    title: "Hirrings: AI Recruitment Platform",
    description:
      "Built from scratch: AI candidate ranking, skill analysis against each job description, automated application tracking.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "OpenAI"],
  },
  {
    title: "Agentic AI Projects",
    description:
      "A multi-agent code review orchestrator, an MCP-powered pricing analyst, and UdaPlay, a RAG research agent with tool use and memory.",
    stack: ["Python", "Claude Agent SDK", "MCP", "RAG"],
  },
];
