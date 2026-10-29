import { site } from "@/lib/site";
import SectionHeading from "./section-heading";

const FACTS = [
  { k: "Based in", v: site.location },
  { k: "Currently", v: "Lead Software Engineer, founding team at Build Fast with AI" },
  { k: "Focus", v: "Secure LLM systems and AI agents in production, deployed with Docker on AWS" },
  { k: "On the side", v: "Distributed systems in Java and Spring Boot" },
];

// Two balanced columns: the pull quote and a short fact list on the left,
// the copy on the right.
const AboutSection: React.FunctionComponent = () => {
  return (
    <section id='about' className='scroll-mt-24'>
      <div className='wrap section-y flex flex-col gap-10 sm:gap-14'>
        <SectionHeading
          eyebrow='01 / About'
          title='A software engineer from Mumbai who builds'
          accent='AI that runs in production.'
          wide
        />

        <div className='grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]'>
          <div className='flex flex-col gap-8'>
            <p className='serif m-0 text-[clamp(26px,2.6vw,36px)] leading-[1.2] text-ink'>
              I care about clean system design, measurable results, and
              helping the engineers around me grow.
            </p>
            <dl className='m-0 border-t border-ink'>
              {FACTS.map((fact) => (
                <div
                  key={fact.k}
                  className='grid grid-cols-[110px_minmax(0,1fr)] gap-4 border-b border-line py-3.5'
                >
                  <dt className='mono pt-0.5 text-[11px] text-muted'>{fact.k}</dt>
                  <dd className='m-0 text-[15px] leading-[1.5] text-ink'>{fact.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className='space-y-5 text-[16px] leading-[1.7] text-body sm:text-[18px]'>
            <p>
              I&apos;m on the founding team at Build Fast with AI, where I lead
              engineering on Generative AI products: LLM pipelines, AI agents
              and the backend systems around them. The agents we ship run
              behind guardrails, an LLM gateway, evals and tracing, so they
              hold up once real users and real data arrive. I package those
              services with Docker and deploy them on AWS.
            </p>
            <p>
              Before that I built products at startups as a product engineer
              and intern, and I still take on freelance work: AI recruiting,
              interview prep and language coaching products, built end to end.
            </p>
            <p>
              Outside work I build distributed systems in Java and Spring Boot
              with Kafka, Neo4j and Kubernetes, and I use Claude Code and
              deep-agent workflows for most of what I ship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
