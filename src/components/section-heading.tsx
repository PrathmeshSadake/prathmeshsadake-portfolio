import type { ReactNode } from "react";

import Decode from "./decode";

interface SectionHeadingProps {
  /** Numbered eyebrow, e.g. "01 / About". */
  eyebrow: string;
  /** The heading, decoded letter by letter as it scrolls in. */
  title: string;
  /** Italic blue tail of the heading, e.g. "that ship." */
  accent?: string;
  /** Short mono note on the right, or any node. */
  aside?: ReactNode;
  /** Let the title run the full width instead of a reading measure. */
  wide?: boolean;
}

const SectionHeading: React.FunctionComponent<SectionHeadingProps> = ({
  eyebrow,
  title,
  accent,
  aside,
  wide = false,
}) => {
  return (
    <div className='flex flex-wrap items-end justify-between gap-x-16 gap-y-5'>
      <div className='flex flex-col gap-4'>
        <div className='mono text-blue'>{eyebrow}</div>
        <Decode
          as='h2'
          className={wide ? "section-title" : "section-title max-w-[18ch]"}
          text={title}
        >
          {accent && <em className='text-blue'>{accent}</em>}
        </Decode>
      </div>
      {typeof aside === "string" ? (
        <p className='m-0 max-w-[360px] font-mono text-[12px] uppercase leading-[1.7] tracking-[0.1em] text-muted sm:text-[13px]'>
          {aside}
        </p>
      ) : (
        aside
      )}
    </div>
  );
};

export default SectionHeading;
