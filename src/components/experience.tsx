/* eslint-disable @next/next/no-img-element */
import { getExperiences, earlierRoles } from "@/lib/experiences";
import SectionHeading from "./section-heading";

/* Bold standalone metrics like 60%, 87%, 10K+, 4 (weeks) */
const boldNumbers = (text: string): React.ReactNode[] => {
  const pattern = /(?<![A-Za-z0-9])(\d+(?:\.\d+)?(?:K\+|%|\+)?)(?![A-Za-z0-9])/g;
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className='font-semibold text-ink'>
        {part}
      </strong>
    ) : (
      part
    )
  );
};

const ExperienceSection: React.FunctionComponent = () => {
  const experiences = getExperiences();

  return (
    <section id='experience' className='view-container py-12'>
      <SectionHeading title='Experience' />
      <div>
        {experiences.map((exp) => (
          <article
            key={exp.company}
            className='border-b border-zinc-200 py-8 first:pt-0 last:border-b-0'
          >
            <h3 className='font-display text-lg font-bold text-ink'>
              {exp.company}
            </h3>

            <div className='ml-1 mt-5 space-y-8 border-l border-zinc-200 pl-7 max-sm:pl-5'>
              {exp.roles.map((role) => (
                <div
                  key={role.role}
                  className='grid grid-cols-[1fr_13rem] gap-10 max-md:grid-cols-1 max-md:gap-4'
                >
                  <div>
                    <div className='flex items-baseline justify-between gap-4 max-sm:flex-col max-sm:gap-1'>
                      <h4 className='font-display text-base font-bold text-accent'>
                        {role.role}
                      </h4>
                      <p className='micro-label shrink-0'>{role.period}</p>
                    </div>
                    <ul className='mt-3 space-y-2'>
                      {role.highlights.map((point, i) => (
                        <li
                          key={i}
                          className='flex gap-3 text-sm leading-7 text-zinc-600'
                        >
                          <span className='mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50' />
                          <span>{boldNumbers(point)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='flex flex-wrap content-start justify-end gap-x-5 gap-y-4 pt-1 max-md:justify-start'>
                    {role.tech.map((tech) => (
                      <img
                        key={tech.name}
                        src={`/assets/icons/${tech.icon}.svg`}
                        alt={tech.name}
                        title={tech.name}
                        className='h-6 w-6 opacity-50 transition-opacity hover:opacity-90'
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
        <p className='mt-2 text-sm text-zinc-400'>{earlierRoles}</p>
      </div>
    </section>
  );
};

export default ExperienceSection;
