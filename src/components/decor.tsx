/* Decorative abstract SVGs. All are aria-hidden and purely visual. */

export const HeroDecor: React.FunctionComponent<{ className?: string }> = ({
  className,
}) => (
  <svg
    aria-hidden
    viewBox='0 0 420 420'
    fill='none'
    className={className}
  >
    {/* concentric orbits */}
    <circle cx='250' cy='170' r='150' stroke='#3056d3' strokeOpacity='0.14' />
    <circle cx='250' cy='170' r='110' stroke='#3056d3' strokeOpacity='0.2' />
    <circle cx='250' cy='170' r='70' stroke='#3056d3' strokeOpacity='0.28' />
    {/* diagonal flow lines */}
    <path
      d='M20 400 C 120 330, 180 330, 250 240'
      stroke='#3056d3'
      strokeOpacity='0.25'
      strokeWidth='1.5'
    />
    <path
      d='M60 416 C 160 350, 230 350, 300 250'
      stroke='#3056d3'
      strokeOpacity='0.16'
      strokeWidth='1.5'
    />
    {/* planets */}
    <circle cx='250' cy='170' r='10' fill='#3056d3' />
    <circle cx='360' cy='170' r='5' fill='#3056d3' fillOpacity='0.55' />
    <circle cx='180' cy='77' r='4' fill='#3056d3' fillOpacity='0.35' />
    {/* dot matrix */}
    {Array.from({ length: 5 }).map((_, row) =>
      Array.from({ length: 5 }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={30 + col * 18}
          cy={40 + row * 18}
          r='1.6'
          fill='#3056d3'
          fillOpacity='0.3'
        />
      ))
    )}
  </svg>
);

export const DotsDecor: React.FunctionComponent<{ className?: string }> = ({
  className,
}) => (
  <svg aria-hidden viewBox='0 0 140 90' fill='none' className={className}>
    {Array.from({ length: 5 }).map((_, row) =>
      Array.from({ length: 8 }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={8 + col * 18}
          cy={8 + row * 18}
          r='1.6'
          fill='#3056d3'
          fillOpacity={0.35 - row * 0.05}
        />
      ))
    )}
  </svg>
);

export const ArcsDecor: React.FunctionComponent<{ className?: string }> = ({
  className,
}) => (
  <svg aria-hidden viewBox='0 0 260 140' fill='none' className={className}>
    <path
      d='M0 140 A 130 130 0 0 1 260 140'
      stroke='#3056d3'
      strokeOpacity='0.15'
      strokeWidth='1.5'
    />
    <path
      d='M35 140 A 95 95 0 0 1 225 140'
      stroke='#3056d3'
      strokeOpacity='0.22'
      strokeWidth='1.5'
    />
    <path
      d='M70 140 A 60 60 0 0 1 190 140'
      stroke='#3056d3'
      strokeOpacity='0.3'
      strokeWidth='1.5'
    />
    <circle cx='130' cy='80' r='6' fill='#3056d3' fillOpacity='0.75' />
  </svg>
);

export const WaveDecor: React.FunctionComponent<{ className?: string }> = ({
  className,
}) => (
  <svg aria-hidden viewBox='0 0 320 110' fill='none' className={className}>
    {[0, 18, 36, 54].map((offset, i) => (
      <path
        key={offset}
        d={`M0 ${30 + offset} C 60 ${10 + offset}, 100 ${50 + offset}, 160 ${
          30 + offset
        } C 220 ${10 + offset}, 260 ${50 + offset}, 320 ${30 + offset}`}
        stroke='#3056d3'
        strokeOpacity={0.3 - i * 0.06}
        strokeWidth='1.5'
      />
    ))}
  </svg>
);
