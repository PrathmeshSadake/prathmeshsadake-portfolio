import type { MosaicCell } from "@/lib/mosaic";
import { cn } from "@/lib/utils";

/* Small decorative pieces. All are aria-hidden and purely visual. */

/** A flat square swatch, used as a bullet in eyebrows and lists. */
export function Square({ color, size = 9 }: { color: string; size?: number }) {
  return (
    <span
      aria-hidden='true'
      className='inline-block shrink-0'
      style={{ width: size, height: size, background: color }}
    />
  );
}

/** Seeded pixel mosaic, see lib/mosaic.ts. */
export function PixelGrid({
  cells,
  cols,
  gap,
  className,
}: {
  cells: MosaicCell[];
  cols: number;
  gap: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden='true'
      className={cn("grid", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap }}
    >
      {cells.map((cell, i) => (
        <div
          key={i}
          className='aspect-square'
          style={{ background: cell.bg, opacity: cell.o }}
        />
      ))}
    </div>
  );
}

/** Concentric rings behind the contact band. */
export function Rings({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 760 760' aria-hidden='true'>
      <g fill='none' stroke='var(--white)' strokeWidth='1.2'>
        <circle cx='380' cy='380' r='360' />
        <circle cx='380' cy='380' r='240' />
        <circle cx='300' cy='380' r='200' />
        <circle cx='460' cy='380' r='200' />
        <line x1='380' y1='20' x2='380' y2='740' />
      </g>
      <circle cx='380' cy='140' r='10' fill='var(--amber)' />
      <circle cx='180' cy='520' r='8' fill='var(--white)' />
    </svg>
  );
}

/** Orbit diagram beside the hero copy: dashed ellipse, two rings, two planets. */
export function Orbit({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 400 400' aria-hidden='true'>
      <ellipse
        cx='200'
        cy='200'
        rx='180'
        ry='180'
        fill='none'
        stroke='var(--line-strong)'
        strokeWidth='1.2'
        strokeDasharray='3 5'
      />
      <circle cx='200' cy='200' r='100' fill='none' stroke='var(--line-strong)' strokeWidth='1.2' />
      <circle cx='160' cy='200' r='88' fill='none' stroke='var(--line)' strokeWidth='1' />
      <circle cx='240' cy='200' r='88' fill='none' stroke='var(--line)' strokeWidth='1' />
      <line x1='200' y1='24' x2='200' y2='376' stroke='var(--line)' strokeWidth='1' />
      <circle cx='200' cy='20' r='7' fill='var(--amber)' />
      <circle cx='300' cy='200' r='7' fill='var(--blue)' />
      <circle cx='112' cy='262' r='4' fill='var(--faint)' />
    </svg>
  );
}
