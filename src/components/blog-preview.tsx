import Link from "next/link";
import Section from "./section";
import LinkText from "./link-text";

const BlogPreview: React.FunctionComponent = () => {
  return (
    <Section
      className='blog-preview-section grid grid-cols-1 justify-start gap-4'
      id='blog'
    >
      <div className='flex flex-row items-center justify-between'>
        <h2 className='about-heading leading-snug font-medium text-base text-zinc-900'>
          {"blog."}
        </h2>
        <LinkText
          href='/blog'
          className='text-sm font-normal text-zinc-500 hover:text-zinc-700'
        >
          read post
        </LinkText>
      </div>

      <Link
        href='/blog'
        className='project-preview-card border-l-2 pl-4 hover:border-orange-300 transition-all cursor-pointer'
      >
        <div className='flex flex-col gap-1'>
          <span className='text-xs font-semibold uppercase tracking-wider text-zinc-400'>
            Case Study
          </span>
          <h3 className='font-medium text-sm text-zinc-900'>
            How I helped my org cut email costs by 87%
          </h3>
          <p className='text-xs text-zinc-500'>
            Migrating from Resend to a custom-built email platform on AWS SES,
            Next.js, SQS, and PostgreSQL.
          </p>
        </div>
      </Link>
    </Section>
  );
};

export default BlogPreview;
