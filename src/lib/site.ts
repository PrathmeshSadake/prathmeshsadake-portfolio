// Site-wide facts: identity, contact links and the short list in the hero.

export const site = {
  name: "Prathmesh Sadake",
  firstName: "Prathmesh",
  lastName: "Sadake",
  role: "Lead Software Engineer · AI",
  location: "Mumbai, India",
  email: "prathmeshsadake@gmail.com",
  title: "Prathmesh Sadake | AI Engineer & SDE",
  description:
    "Lead Software Engineer building production Generative AI systems: LLM pipelines, secure AI agents with guardrails, evals and observability, and the backends behind them on Java, Spring Boot, Python, AWS and Azure.",
  links: [
    { label: "GitHub", href: "https://github.com/PrathmeshSadake" },
    { label: "LinkedIn", href: "https://linkedin.com/in/prathmeshsadake" },
    { label: "X", href: "https://x.com/prathmeshsadake" },
  ],
};

export type Tone = "blue" | "amber" | "coral" | "green";

/** Solid fill per tone, for squares and strips. */
export const TONE_FILLS: Record<Tone, string> = {
  blue: "var(--blue)",
  amber: "var(--amber)",
  coral: "var(--coral)",
  green: "var(--green)",
};

/** The "what I do" list in the hero's dark panel. */
export const HERO_FOCUS: { tone: Tone; title: string; body: string }[] = [
  {
    tone: "blue",
    title: "Production LLM systems",
    body: "Claude, Gemini and open models behind real products",
  },
  {
    tone: "amber",
    title: "Secure AI agents",
    body: "Guardrails, LLM gateways, evals and observability from day one",
  },
  {
    tone: "green",
    title: "Agent-driven development",
    body: "Claude Code, deep agents and MCP as everyday tools",
  },
  {
    tone: "coral",
    title: "Backends and cloud",
    body: "Java, Spring Boot, Python, AWS and Azure",
  },
];
