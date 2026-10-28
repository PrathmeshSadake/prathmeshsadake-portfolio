/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  getFreelanceProjects,
  type FreelanceProject,
} from "@/lib/freelance-projects";
import { TONE_FILLS } from "@/lib/site";
import { techIcon } from "@/lib/tech-icons";
import ProjectPreviewWindow from "@/components/project-preview";

export const metadata = {
  title: "Freelance Projects | Prathmesh Sadake",
  description:
    "Client products built end to end by Prathmesh Sadake: AI recruiting, interview prep, language coaching and marketing sites.",
};

const FreelancePage = () => {
  const projects = getFreelanceProjects();

  return (
    <main className='wrap section-y flex flex-col gap-10 sm:gap-14'>
      <div className='flex flex-col gap-4'>
        <p className='mono m-0 text-blue'>Client work</p>
        <h1 className='section-title'>
          Products built <em className='text-blue'>end to end.</em>
        </h1>
        <p className='lede m-0 max-w-[56ch]'>
          Client products I&apos;ve taken from a brief to a deployed system:
          AI-powered platforms, coaching tools and marketing sites.
        </p>
      </div>

      <div className='flex flex-col gap-6'>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <p className='m-0 text-[15px] text-muted'>
        <Link href='/#work' className='link-ul font-medium text-ink'>
          Back to selected work
        </Link>
      </p>
    </main>
  );
};

function TechChips({ stack }: { stack: string[] }) {
  return (
    <ul className='m-0 flex list-none flex-wrap gap-1.5 p-0'>
      {stack.map((tech) => {
        const icon = techIcon(tech);
        return (
          <li key={tech} className='chip'>
            {icon && (
              <img
                src={`/assets/icons/${icon}.svg`}
                alt=''
                aria-hidden='true'
                decoding='async'
              />
            )}
            {tech}
          </li>
        );
      })}
    </ul>
  );
}

function Column({ label, items }: { label: string; items: string[] }) {
  return (
    <div className='flex flex-col gap-3'>
      <span className='mono text-[10px] text-faint'>{label}</span>
      <ul className='m-0 flex list-none flex-col gap-2 p-0'>
        {items.map((item) => (
          <li key={item} className='flex gap-2.5 text-[14px] leading-[1.5] text-body'>
            <span aria-hidden='true' className='mt-[9px] h-1.5 w-1.5 shrink-0 bg-blue' />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// One client project: the illustrated window in a coloured frame on the
// left, title, blurb and stack on the right, then three short columns.
const ProjectCard = ({ project, index }: { project: FreelanceProject; index: number }) => {
  return (
    <article className='border border-line-strong bg-white'>
      <div className='grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]'>
        <div
          className='flex items-start p-4 sm:p-5 lg:items-center'
          style={{ background: TONE_FILLS[project.tone] }}
        >
          <div className='w-full'>
            <ProjectPreviewWindow kind={project.preview} />
          </div>
        </div>
        <div className='flex flex-col gap-4 p-6 sm:p-8'>
          <div className='flex items-baseline justify-between gap-3'>
            <span className='mono text-[11px] text-faint'>
              {String(index + 1).padStart(2, "0")} · {project.role}
            </span>
            {project.link && (
              <Link
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='mono ul-grow inline-flex items-center gap-1 text-[11px] text-blue'
              >
                {project.linkDisplay}
                <ArrowUpRight className='h-3.5 w-3.5' />
              </Link>
            )}
          </div>
          <div className='flex flex-col gap-1.5'>
            <h2 className='serif m-0 text-[clamp(30px,3vw,40px)] leading-[1.02]'>
              {project.title}
            </h2>
            <p className='m-0 text-[15px] text-muted'>{project.shortDescription}</p>
          </div>
          <p className='m-0 max-w-[62ch] text-[15px] leading-[1.6] text-body sm:text-[16px]'>
            {project.fullDescription}
          </p>
          <div className='mt-auto pt-2'>
            <TechChips stack={project.techStack} />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-8 border-t border-line p-6 sm:p-8 md:grid-cols-3'>
        <Column label='What I owned' items={project.responsibilities.slice(0, 3)} />
        <Column label='What I built' items={project.features.slice(0, 3)} />
        <Column label='Impact' items={project.impact} />
      </div>
    </article>
  );
};

export default FreelancePage;
