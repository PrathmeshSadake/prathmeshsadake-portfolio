import type { Tone } from "./site";

export type ProjectPreview =
  | "trace"
  | "pipeline"
  | "graph"
  | "services"
  | "score"
  | "log"
  | "ranking"
  | "interview"
  | "booking"
  | "quote";

export interface Project {
  title: string;
  description: string;
  stack: string[];
  /** Which illustrated window sits in the card's coloured frame. */
  preview: ProjectPreview;
  tone: Tone;
  link?: { href: string; label: string };
}

export const getProjects = (): Project[] => [
  {
    title: "Secure AI agent platform",
    description:
      "Production agents behind an LLM gateway, with guardrails for prompt injection and sensitive data, eval suites run on every change, and tracing for every run.",
    stack: ["LLM gateway", "Guardrails", "Evals", "Observability"],
    preview: "trace",
    tone: "blue",
  },
  {
    title: "AI document processing pipeline",
    description:
      "Queue-based LLM extraction that turns unstructured documents into structured, validated data, with failures routed to a person instead of guessed at.",
    stack: ["Redis", "LLMs", "Azure"],
    preview: "pipeline",
    tone: "amber",
  },
  {
    title: "Agentic AI projects",
    description:
      "A multi-agent code review orchestrator, an MCP-powered pricing analyst, and UdaPlay, a RAG research agent with tool use and memory.",
    stack: ["Python", "Claude Agent SDK", "MCP", "RAG"],
    preview: "graph",
    tone: "green",
  },
  {
    title: "Distributed LinkedIn clone",
    description:
      "Java and Spring Boot microservices with a Neo4j connection graph and Kafka notifications, deployed on GKE behind an API gateway.",
    stack: ["Java", "Spring Boot", "Neo4j", "Kafka", "Kubernetes"],
    preview: "services",
    tone: "coral",
  },
  {
    title: "Talkerz: AI English speaking coach",
    description:
      "AI voice interviews that score fluency, pronunciation, grammar and vocabulary in real time, with progress tracking for learners.",
    stack: ["Next.js", "Speech APIs", "OpenAI", "PostgreSQL"],
    preview: "score",
    tone: "blue",
  },
  {
    title: "Internal email platform",
    description:
      "An email service on AWS SES and SQS with retries, bounce handling and an admin dashboard, replacing a paid provider.",
    stack: ["AWS SES", "SQS", "Next.js", "PostgreSQL"],
    preview: "log",
    tone: "amber",
    link: { href: "/blog", label: "Case study" },
  },
];
