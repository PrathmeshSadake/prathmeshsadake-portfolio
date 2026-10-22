import SectionHeading from "./section-heading";

const skillGroups = [
  {
    title: "AI / ML",
    items:
      "LLM applications with GPT, Claude, Gemini, Mistral, and LLaMA · RAG · Multi-agent systems · MCP · Claude Agent SDK · LangChain · Token optimization",
  },
  {
    title: "Backend",
    items:
      "Java · Spring Boot · Python · TypeScript · Microservices · Kafka · Redis · Node.js · Next.js",
  },
  {
    title: "Cloud & Data",
    items:
      "AWS · Azure · Docker · Kubernetes · PostgreSQL · Neo4j · Supabase · Vector databases",
  },
];

const credentials = [
  {
    title: "AWS Certified Solutions Architect",
    detail: "Amazon Web Services",
  },
  {
    title: "6 Udacity Nanodegrees",
    detail: "Agentic AI, AI Engineering with Claude, AWS Cloud DevOps, and more",
  },
  {
    title: "Spring Boot 0 to 100",
    detail: "Coding Shuttle, 2025",
  },
];

const SkillsSection: React.FunctionComponent = () => {
  return (
    <section id='skills' className='view-container py-12'>
      <SectionHeading title='Skills' />
      <div className='max-w-4xl'>
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className='grid grid-cols-[10rem_1fr] gap-6 border-b border-zinc-200 py-5 first:pt-0 max-md:grid-cols-1 max-md:gap-1'
          >
            <p className='micro-label pt-1'>{group.title}</p>
            <p className='text-[15px] leading-8 text-zinc-600'>{group.items}</p>
          </div>
        ))}

        <div className='grid grid-cols-[10rem_1fr] gap-6 py-5 max-md:grid-cols-1 max-md:gap-1'>
          <p className='micro-label pt-1'>Credentials</p>
          <ul className='space-y-3'>
            {credentials.map((cred) => (
              <li key={cred.title} className='text-[15px] leading-7'>
                <span className='font-medium text-ink'>{cred.title}</span>
                <span className='text-zinc-400'> · {cred.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
