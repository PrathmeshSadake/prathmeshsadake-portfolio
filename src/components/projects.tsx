import Link from "next/link";

import { getProjects } from "@/lib/projects";
import { TONE_FILLS } from "@/lib/site";
import ProjectPreviewWindow from "./project-preview";
import SectionHeading from "./section-heading";

// Cards with a tone-coloured frame holding an illustrated window, then the
// title, a line of copy and the stack in mono.
const ProjectsSection: React.FunctionComponent = () => {
  const projects = getProjects();

  return (
    <section id='work' className='scroll-mt-24 border-t border-line'>
      <div className='wrap section-y flex flex-col gap-10 sm:gap-14'>
        <SectionHeading
          eyebrow='03 / Work'
          title='Systems I have'
          accent='put into production.'
        />

        <ul className='m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, i) => (
            <li
              key={project.title}
              className='flex flex-col border border-line-strong bg-white'
            >
              <div className='p-4' style={{ background: TONE_FILLS[project.tone] }}>
                <ProjectPreviewWindow kind={project.preview} />
              </div>
              <div className='flex flex-1 flex-col gap-3 p-6'>
                <div className='flex items-baseline justify-between gap-3'>
                  <span className='mono text-[11px] text-faint'>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {project.link && (
                    <Link
                      href={project.link.href}
                      className='mono ul-grow text-[11px] text-blue transition-colors hover:text-blue-deep'
                    >
                      {project.link.label} <span aria-hidden='true'>↗</span>
                    </Link>
                  )}
                </div>
                <h3 className='serif m-0 text-[27px] leading-[1.05] sm:text-[29px]'>
                  {project.title}
                </h3>
                <p className='m-0 text-[15px] leading-[1.55] text-muted'>
                  {project.description}
                </p>
                <p className='mono mt-auto border-t border-line pt-3 text-[10px] leading-[1.8] text-faint'>
                  {project.stack.join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className='m-0 text-[15px] text-muted'>
          More client work on the{" "}
          <Link href='/freelance' className='link-ul font-medium text-ink'>
            freelance projects
          </Link>{" "}
          page.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
