import { getExperiences, earlierRoles } from "@/lib/experiences";
import SectionHeading from "./section-heading";

const ExperienceSection: React.FunctionComponent = () => {
  const experiences = getExperiences();

  return (
    <section id='experience' className='view-container py-12'>
      <SectionHeading title='Experience' />
      <div className='max-w-4xl'>
        {experiences.map((exp) => (
          <article
            key={`${exp.role}-${exp.company}`}
            className='border-b border-zinc-200 py-7 first:pt-0 last:border-b-0'
          >
            <div className='flex items-baseline justify-between gap-4 max-sm:flex-col max-sm:gap-1'>
              <h3 className='font-display text-base font-bold'>
                {exp.role}
                <span className='font-semibold text-accent'>
                  {" "}
                  · {exp.company}
                </span>
              </h3>
              <p className='micro-label shrink-0'>{exp.period}</p>
            </div>
            <ul className='mt-3 space-y-2'>
              {exp.highlights.map((point, i) => (
                <li key={i} className='text-sm leading-7 text-zinc-600'>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
        <p className='mt-2 text-sm text-zinc-400'>{earlierRoles}</p>
      </div>
    </section>
  );
};

export default ExperienceSection;
