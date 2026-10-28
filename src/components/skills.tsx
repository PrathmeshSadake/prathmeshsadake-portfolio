/* eslint-disable @next/next/no-img-element */
import SectionHeading from "./section-heading";

/* [label, icon file in /public/assets/icons] - a null icon is a plain chip */
const SKILL_ROWS: { k: string; chips: [string, string | null][] }[] = [
  {
    k: "AI engineering",
    chips: [
      ["Claude", "anthropic"],
      ["OpenAI", "openai"],
      ["Gemini", null],
      ["Open models", null],
      ["RAG", null],
      ["Multi-agent systems", null],
      ["MCP", null],
      ["Claude Agent SDK", "anthropic"],
      ["LangChain", null],
    ],
  },
  {
    k: "AI security & reliability",
    chips: [
      ["Guardrails", null],
      ["LLM gateways", null],
      ["Evals & LLM-as-judge", null],
      ["Observability & tracing", null],
      ["Prompt injection defence", null],
      ["Claude Code", "anthropic"],
      ["Deep agents", null],
    ],
  },
  {
    k: "Backend",
    chips: [
      ["Java", null],
      ["Spring Boot", "springboot"],
      ["Python", "python"],
      ["TypeScript", "typescript"],
      ["Microservices", null],
      ["Kafka", "apachekafka"],
      ["Redis", "redis"],
      ["Node.js", "nodedotjs"],
      ["Next.js", "nextdotjs"],
    ],
  },
  {
    k: "Cloud & data",
    chips: [
      ["AWS", "amazonwebservices"],
      ["Azure", null],
      ["Docker", null],
      ["Kubernetes", null],
      ["PostgreSQL", "postgresql"],
      ["Neo4j", null],
      ["Pinecone", null],
      ["Redis", "redis"],
    ],
  },
  {
    k: "Credentials",
    chips: [
      ["AWS Certified Solutions Architect", "amazonwebservices"],
      ["Udacity: Agentic AI", null],
      ["Udacity: AI Engineering with Claude", null],
      ["Udacity: AWS Cloud DevOps", null],
    ],
  },
];

// Stack rows: a mono label column and a run of chips, divided by hairlines.
const SkillsSection: React.FunctionComponent = () => {
  return (
    <section id='skills' className='scroll-mt-24 border-t border-line bg-raised'>
      <div className='wrap section-y flex flex-col gap-10 sm:gap-14'>
        <SectionHeading
          eyebrow='04 / Skills'
          title='The stack I'
          accent='reach for.'
        />

        <div className='border-t border-ink'>
          {SKILL_ROWS.map((row) => (
            <div
              key={row.k}
              className='grid grid-cols-1 gap-x-8 gap-y-3 border-b border-line py-5 md:grid-cols-[220px_minmax(0,1fr)] md:items-baseline'
            >
              <div className='mono text-[11px] text-muted'>{row.k}</div>
              <div className='flex flex-wrap gap-2'>
                {row.chips.map(([label, icon]) => (
                  <span key={label} className='chip'>
                    {icon && (
                      <img
                        src={`/assets/icons/${icon}.svg`}
                        alt=''
                        aria-hidden='true'
                        decoding='async'
                      />
                    )}
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
