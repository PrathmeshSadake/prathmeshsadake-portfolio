import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getProjects } from "@/lib/projects";
import SectionHeading from "./section-heading";
import { ArcsDecor } from "./decor";

const ProjectsSection: React.FunctionComponent = () => {
  const projects = getProjects();

  return (
    <section id='projects' className='view-container relative py-12'>
      <ArcsDecor className='pointer-events-none absolute right-6 top-8 w-52 max-lg:hidden' />
      <SectionHeading title='Projects' />
      <div className='grid grid-cols-2 gap-x-14 max-md:grid-cols-1'>
        {projects.map((project) => (
          <article
            key={project.title}
            className='border-t border-zinc-200 py-7'
          >
            <div className='flex items-start justify-between gap-3'>
              <h3 className='font-display text-base font-bold'>
                {project.title}
              </h3>
              {project.link && (
                <Link
                  href={project.link.href}
                  className='inline-flex shrink-0 items-center gap-1 font-display text-xs font-semibold uppercase tracking-wide text-accent'
                >
                  {project.link.label}
                  <ArrowUpRight className='h-3.5 w-3.5' />
                </Link>
              )}
            </div>
            <p className='mt-2 text-sm leading-7 text-zinc-600'>
              {project.description}
            </p>
            <p className='mt-3 text-xs font-medium tracking-wide text-zinc-400'>
              {project.stack.join(" · ")}
            </p>
          </article>
        ))}
      </div>
      <p className='mt-4 text-sm text-zinc-500'>
        More client work on the{" "}
        <Link
          href='/freelance'
          className='font-medium text-accent underline underline-offset-4'
        >
          freelance projects
        </Link>{" "}
        page.
      </p>
    </section>
  );
};

export default ProjectsSection;
