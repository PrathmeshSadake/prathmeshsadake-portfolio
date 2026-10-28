import Image from "next/image";
import Link from "next/link";

import { MOSAICS } from "@/lib/mosaic";
import { HERO_FOCUS, TONE_FILLS, site } from "@/lib/site";
import { PixelGrid, Square } from "./decor";

// Split hero: the claim on paper, and a dark panel beside it with the
// pixel mosaic and a short list of what I do.
const HeroSection: React.FunctionComponent = () => {
  return (
    <section id='top' className='border-b border-line' aria-label='Introduction'>
      <div className='grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]'>
      <div className='grid-left flex min-w-0 flex-col justify-center gap-8 pb-14 pr-[var(--gutter)] pt-14 sm:gap-10 lg:pb-24 lg:pr-16 lg:pt-24'>
        <div className='flex flex-wrap items-center gap-x-3.5 gap-y-1.5'>
          <Square color='var(--blue)' />
          <span className='mono'>{site.role}</span>
          <span className='mono text-faint'>·</span>
          <span className='mono text-muted'>{site.location}</span>
        </div>

        <h1 className='serif m-0 text-[clamp(40px,5.4vw,84px)] leading-[0.96]'>
          Production AI systems
          <br />
          <em className='text-blue'>that ship.</em>
        </h1>

        <p className='m-0 max-w-[600px] text-[17px] leading-[1.6] text-muted sm:text-[21px]'>
          I design and ship Generative AI products and the backends behind
          them: LLM pipelines, AI agents with guardrails and evals, and
          services on Java, Spring Boot, Python, AWS and Azure.
        </p>

        <div className='flex flex-wrap items-center gap-x-7 gap-y-5'>
          <Link href='#work' className='btn btn-dark w-full sm:w-auto'>
            View my work <span aria-hidden='true'>↗</span>
          </Link>
          <a
            href={`mailto:${site.email}`}
            className='mono ul-grow text-[12px] text-ink'
          >
            Get in touch
          </a>
        </div>

        <div className='flex items-center gap-4 border-t border-line pt-6'>
          <div className='h-12 w-12 shrink-0 overflow-hidden bg-ink'>
            <Image
              src='/assets/images/profile.jpeg'
              alt={site.name}
              width={48}
              height={48}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex flex-col gap-0.5'>
            <span className='text-[16px] font-semibold'>{site.name}</span>
            <span className='mono text-[11px] text-muted'>
              Founding team · Build Fast with AI
            </span>
          </div>
        </div>
      </div>

      <div className='flex min-w-0 flex-col justify-between bg-night lg:min-h-[600px]'>
        <PixelGrid cells={MOSAICS.hero} cols={28} gap={4} className='p-1' />
        <div className='flex flex-col gap-[18px] px-[clamp(16px,3vw,40px)] pb-10 pt-7 sm:pb-11'>
          <div className='mono text-[12px] text-dim'>What I do</div>
          <ul className='m-0 flex list-none flex-col border-t border-night-line p-0'>
            {HERO_FOCUS.map((item) => (
              <li
                key={item.title}
                className='flex gap-4 border-b border-night-line py-4 last:border-b-0'
              >
                <span className='pt-1.5'>
                  <Square color={TONE_FILLS[item.tone]} size={10} />
                </span>
                <div className='flex flex-col gap-1'>
                  <span className='serif text-[22px] leading-[1.1] text-raised sm:text-[25px]'>
                    {item.title}
                  </span>
                  <span className='text-[14px] leading-[1.45] text-night-text'>
                    {item.body}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
