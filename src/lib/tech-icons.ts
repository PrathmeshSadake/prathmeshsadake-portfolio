/** Tech names that have a logo in /public/assets/icons. */
export const TECH_ICONS: Record<string, string> = {
  "Next.js": "nextdotjs",
  React: "react",
  "React Native": "react",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "Node.js": "nodedotjs",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  "OpenAI API": "openai",
  OpenAI: "openai",
  Claude: "anthropic",
  AWS: "amazonwebservices",
  Python: "python",
  Redis: "redis",
  Kafka: "apachekafka",
  "Spring Boot": "springboot",
  PyTorch: "pytorch",
  pandas: "pandas",
  NumPy: "numpy",
  Jupyter: "jupyter",
};

export const techIcon = (name: string) => TECH_ICONS[name];
