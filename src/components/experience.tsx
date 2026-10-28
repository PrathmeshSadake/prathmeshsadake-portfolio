/* eslint-disable @next/next/no-img-element */
import { getExperiences, earlierRoles, type Experience } from "@/lib/experiences";
import SectionHeading from "./section-heading";

// One company: a serif name over an ink rule, then each role with its
// points across the full width and the stack underneath.
function CompanyBlock({ exp }: { exp: Experience }) {
  return (
    <article className='flex flex-col gap-2'>
      <h3 className='serif m-0 border-b border-ink pb-4 text-[clamp(32px,3.6vw,46px)] leading-none'>
        {exp.company}
      </h3>

      {exp.roles.map((role) => (
        <div
          key={role.role}
          className='flex flex-col gap-5 border-b border-line py-7 last:border-b-0 last:pb-0'
        >
          <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5'>
            <h4 className='m-0 text-[18px] font-semibold sm:text-[20px]'>
              {role.role}
            </h4>
            <span className='mono text-[11px] text-muted'>
              <span className='text-blue-deep'>{role.period}</span> · {role.type} ·{" "}
              {role.location}
            </span>
          </div>

          <ol className='m-0 flex list-none flex-col gap-2.5 p-0'>
            {role.highlights.map((point, i) => (
              <li key={i} className='flex items-baseline gap-3.5'>
                <span className='mono shrink-0 text-[11px] text-faint'>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className='max-w-[80ch] text-[15px] leading-[1.6] text-body sm:text-[16px]'>
                  {point}
                </span>
              </li>
            ))}
          </ol>

          <ul className='m-0 flex list-none flex-wrap gap-1.5 p-0'>
            {role.tech.map((tech) => (
              <li key={tech.name} className='chip'>
                <img
                  src={`/assets/icons/${tech.icon}.svg`}
                  alt=''
                  aria-hidden='true'
                  decoding='async'
                />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  );
}

const ExperienceSection: React.FunctionComponent = () => {
  const experiences = getExperiences();

  return (
    <section id='experience' className='scroll-mt-24 border-t border-line bg-raised'>
      <div className='wrap section-y flex flex-col gap-10 sm:gap-14'>
        <SectionHeading
          eyebrow='02 / Experience'
          title="Where I've"
          accent='shipped.'
        />
        <div className='flex flex-col gap-14'>
          {experiences.map((exp) => (
            <CompanyBlock key={exp.company} exp={exp} />
          ))}
        </div>
        <p className='m-0 font-mono text-[11px] uppercase leading-[1.7] tracking-[0.1em] text-faint'>
          {earlierRoles}
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;
