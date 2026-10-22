interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FunctionComponent<SectionHeadingProps> = ({
  title,
}) => {
  return (
    <div className='mb-8 flex items-center gap-4'>
      <h2 className='font-display text-2xl font-bold tracking-tight'>
        {title}
      </h2>
      <span className='h-px flex-1 bg-zinc-200' />
    </div>
  );
};

export default SectionHeading;
