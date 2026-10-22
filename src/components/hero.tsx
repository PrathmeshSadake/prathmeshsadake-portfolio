import Image from "next/image";
import Link from "next/link";

import { HeroDecor } from "./decor";

const HeroSection: React.FunctionComponent = () => {
  return (
    <header className='view-container relative pb-16 pt-20 max-md:pt-14'>
      <HeroDecor className='pointer-events-none absolute -top-2 right-0 w-[380px] max-lg:hidden' />
      <div className='flex items-center gap-5'>
        <div className='h-16 w-16 shrink-0 overflow-hidden rounded-full'>
          <Image
            src='/assets/images/profile.jpeg'
            alt='Prathmesh Sadake'
            width={64}
            height={64}
            priority
            className='h-full w-full object-cover'
          />
        </div>
        <div>
          <p className='font-display text-base font-bold'>Prathmesh Sadake</p>
          <p className='text-sm text-zinc-500'>
            AI Engineer & SDE · Mumbai, India · Open to relocating to Bangalore
            or Hyderabad
          </p>
        </div>
      </div>

      <h1 className='mt-10 font-display text-5xl font-bold leading-[1.08] tracking-tight max-md:text-4xl'>
        I build production AI systems{" "}
        <span className='text-accent'>that ship.</span>
      </h1>

      <p className='mt-6 max-w-3xl text-base leading-7 text-zinc-600'>
        Generative AI products and scalable backends with Java, Spring Boot,
        Python, AWS, and Azure. Lately: cutting LLM costs by 60% for a major US
        solar provider, and email costs by 87% for my team.
      </p>

      <div className='mt-8 flex items-center gap-5 max-sm:flex-col max-sm:items-stretch'>
        <Link
          href='#projects'
          className='rounded-lg bg-accent px-6 py-3 text-center font-display text-sm font-semibold text-white transition-colors hover:bg-accent/90'
        >
          View my work
        </Link>
        <a
          href='mailto:prathmeshsadake@gmail.com'
          className='px-2 py-3 text-center font-display text-sm font-semibold text-ink underline decoration-zinc-300 underline-offset-8 transition-colors hover:decoration-accent'
        >
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
