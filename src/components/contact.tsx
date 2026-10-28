import { MOSAICS } from "@/lib/mosaic";
import { site } from "@/lib/site";
import CopyEmail from "./copy-email";
import { PixelGrid, Rings } from "./decor";

// Blue closing band with the rings behind it, then the dark footer.
const ContactSection: React.FunctionComponent = () => {
  return (
    <>
      <section
        id='contact'
        className='relative scroll-mt-24 overflow-hidden bg-blue text-white'
      >
        <Rings className='pointer-events-none absolute right-[-180px] top-1/2 h-[760px] w-[760px] -translate-y-1/2 opacity-35' />
        <div className='wrap section-y relative flex flex-col gap-7'>
          <div className='mono'>Contact</div>
          <h2 className='serif m-0 max-w-[14ch] text-[clamp(44px,6.4vw,96px)] leading-[0.96]'>
            Let&apos;s build <em className='text-amber-light'>something.</em>
          </h2>
          <p className='m-0 max-w-[520px] text-[17px] leading-[1.6] text-blue-mist sm:text-[20px]'>
            I&apos;m open to AI Engineer and SDE roles. If you&apos;re hiring or
            want to talk about a project, reach out.
          </p>
          <div className='flex flex-wrap gap-3'>
            <a href={`mailto:${site.email}`} className='btn btn-light'>
              Email me <span aria-hidden='true'>↗</span>
            </a>
          </div>
          <div className='flex flex-wrap items-center gap-3 text-blue-mist'>
            <span className='mono text-[11px]'>Or write to</span>
            <CopyEmail email={site.email} />
          </div>
          <ul className='m-0 flex list-none flex-wrap gap-x-7 gap-y-2 border-t border-white/30 p-0 pt-6'>
            {site.links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mono ul-grow text-[12px] text-white transition-colors hover:text-amber-light'
                >
                  {item.label} <span aria-hidden='true'>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <PixelGrid cells={MOSAICS.band} cols={48} gap={3} className='px-[3px] pb-[3px]' />
      </section>

      <footer className='bg-night text-night-text'>
        <div className='wrap flex flex-col gap-5 py-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-12'>
          <div className='flex flex-col gap-1.5'>
            <span className='serif text-[22px] leading-none text-raised'>
              {site.name}
            </span>
            <span className='mono text-[11px]'>{site.role}</span>
          </div>
          <p className='m-0 font-mono text-[11px] uppercase leading-[1.8] tracking-[0.1em]'>
            {site.location} · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
