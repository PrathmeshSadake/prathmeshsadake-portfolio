import SectionHeading from "./section-heading";
import { DotsDecor } from "./decor";

const AboutSection: React.FunctionComponent = () => {
  return (
    <section id='about' className='view-container relative py-12'>
      <DotsDecor className='pointer-events-none absolute right-6 top-16 w-36 max-lg:hidden' />
      <SectionHeading title='About' />
      <div className='max-w-4xl space-y-5 text-[15px] leading-8 text-zinc-600'>
        <p>
          I&apos;m a software engineer from Mumbai, India. I build AI-powered
          applications and the backend systems behind them.
        </p>
        <p>
          At Build Fast with AI, I build production Generative AI systems on
          GPT, Claude, Mistral, LLaMA, and Gemini. I built a document
          processing pipeline on Redis queues and LLMs that has processed
          thousands of documents and cut manual work by 60%. Token optimization
          on a product for one of the largest solar providers in the US brought
          its LLM costs down by 60%. I also designed an internal email platform
          on AWS that cut email costs by 87%, and I&apos;ve worked with our
          deployment team to ship applications to production on Azure.
        </p>
        <p>
          Outside my day job, I build distributed systems in Java and Spring
          Boot with microservices, Kafka, Neo4j, Docker, and Kubernetes on GKE.
          I&apos;ve also shipped 7 AI and web products for freelance clients
          and completed 6 Udacity Nanodegree programs.
        </p>
        <p className='text-ink'>
          I care about clean system design, measurable results, and helping the
          engineers around me grow.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
