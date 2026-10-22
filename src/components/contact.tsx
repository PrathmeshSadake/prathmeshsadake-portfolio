import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { WaveDecor } from "./decor";

const contactLinks = [
  { label: "GitHub", href: "https://github.com/PrathmeshSadake" },
  { label: "LinkedIn", href: "https://linkedin.com/in/prathmeshsadake" },
  { label: "X", href: "https://x.com/prathmeshsadake" },
];

const ContactSection: React.FunctionComponent = () => {
  return (
    <footer id='contact' className='border-t border-zinc-200 bg-paper'>
      <div className='view-container relative py-16'>
        <WaveDecor className='pointer-events-none absolute right-6 top-16 w-72 max-lg:hidden' />
        <h2 className='font-display text-4xl font-bold tracking-tight max-md:text-3xl'>
          Let&apos;s build something.
        </h2>
        <p className='mt-4 max-w-md text-[15px] leading-7 text-zinc-600'>
          I&apos;m open to AI Engineer and SDE roles. If you&apos;re hiring or
          want to talk about a project, reach out.
        </p>

        <a
          href='mailto:prathmeshsadake@gmail.com'
          className='mt-7 inline-block rounded-lg bg-accent px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-accent/90'
        >
          prathmeshsadake@gmail.com
        </a>

        <div className='mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-6'>
          <div className='flex items-center gap-5'>
            {contactLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target='_blank'
                className='inline-flex items-center gap-1 font-display text-xs font-semibold uppercase tracking-wide text-zinc-500 transition-colors hover:text-accent'
              >
                {item.label}
                <ArrowUpRight className='h-3 w-3' />
              </Link>
            ))}
          </div>
          <p className='text-xs text-zinc-400'>
            Mumbai, India · Open to relocating to Bangalore or Hyderabad · ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
