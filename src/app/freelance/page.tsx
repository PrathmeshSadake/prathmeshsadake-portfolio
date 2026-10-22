import {
  getFreelanceProjects,
  FreelanceProject,
} from "@/lib/freelance-projects";
import Section from "@/components/section";
import LinkText from "@/components/link-text";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Freelance Projects | Prathmesh Sadake",
  description:
    "Detailed case studies of freelance projects built by Prathmesh Sadake - AI-powered applications, recruitment platforms, learning platforms, and more.",
};

const FreelancePage = () => {
  const projects = getFreelanceProjects();

  return (
    <main className='freelance-page mx-auto w-full max-w-4xl px-6 py-16 max-sm:px-4 max-md:py-10'>
      <Section>
        <p className='micro-label mb-3'>Client Work</p>
        <h1 className='font-display text-4xl font-bold tracking-tight text-ink mb-3 max-md:text-3xl'>
          Freelance Projects
        </h1>
        <p className='text-sm font-normal text-zinc-500 leading-6 mb-8'>
          A collection of end-to-end products I've built for clients, from
          AI-powered platforms to marketing websites. Each project showcases my
          ability to deliver complete solutions from concept to deployment.
        </p>
      </Section>

      <div className='grid grid-cols-1 gap-12'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  );
};

const ProjectCard = ({ project }: { project: FreelanceProject }) => {
  return (
    <Section className='project-card border-l-2 pl-6 hover:border-orange-300 transition-all cursor-default'>
      {/* Header */}
      <div className='flex flex-row items-start justify-between max-md:flex-col max-md:gap-2 mb-4'>
        <div>
          <h2 className='text-xl font-semibold text-zinc-900'>
            {project.title}
          </h2>
          <p className='text-base text-zinc-600'>{project.shortDescription}</p>
        </div>
        {project.link && (
          <Link
            href={project.link}
            target='_blank'
            className='flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors'
          >
            {project.linkDisplay}
            <ArrowUpRight className='w-4 h-4' />
          </Link>
        )}
      </div>

      {/* Description */}
      <p className='text-sm font-normal text-zinc-500 leading-6 mb-4'>
        {project.fullDescription}
      </p>

      {/* Tech Stack */}
      <div className='flex flex-wrap gap-2 mb-6'>
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className='px-2 py-1 text-xs font-medium bg-zinc-200 text-zinc-700 rounded'
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Role */}
      <div className='mb-4'>
        <span className='text-xs font-semibold uppercase tracking-wider text-zinc-400'>
          Role
        </span>
        <p className='text-sm font-medium text-zinc-700 mt-1'>{project.role}</p>
      </div>

      {/* Responsibilities */}
      <div className='mb-4'>
        <span className='text-xs font-semibold uppercase tracking-wider text-zinc-400'>
          My Responsibilities
        </span>
        <ul className='mt-2 space-y-2'>
          {project.responsibilities.map((item, index) => (
            <li
              key={index}
              className='text-sm font-normal text-zinc-500 list-disc list-outside ml-4'
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Key Features */}
      <div className='mb-4'>
        <span className='text-xs font-semibold uppercase tracking-wider text-zinc-400'>
          Key Features I Built
        </span>
        <ul className='mt-2 space-y-2'>
          {project.features.map((item, index) => (
            <li
              key={index}
              className='text-sm font-normal text-zinc-500 list-disc list-outside ml-4'
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Business Impact */}
      <div className='bg-orange-50 p-4 rounded-lg'>
        <span className='text-xs font-semibold uppercase tracking-wider text-orange-600'>
          Business Impact
        </span>
        <ul className='mt-2 space-y-2'>
          {project.impact.map((item, index) => (
            <li
              key={index}
              className='text-sm font-normal text-zinc-700 list-disc list-outside ml-4'
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default FreelancePage;
