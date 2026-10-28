"use client";

import { createElement, useEffect, useRef, type ReactNode } from "react";

interface DecodeProps {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  /** Plain text to decode letter by letter. */
  text: string;
  /** Rendered after the text, untouched by the effect (an italic accent, say). */
  children?: ReactNode;
}

/**
 * Decode text effect: when the heading scrolls into view its letters arrive
 * in pale blue at random opacities and settle to ink over about a second.
 * The markup is split server-side, so there is nothing to hydrate around.
 */
export default function Decode({ as = "h2", className, text, children }: DecodeProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chars = Array.from(el.querySelectorAll<HTMLElement>(".ch"));
    const timers: number[] = [];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        chars.forEach((c) => {
          c.classList.add("pend");
          c.style.opacity = (0.25 + Math.random() * 0.5).toFixed(2);
          timers.push(
            window.setTimeout(() => {
              c.classList.remove("pend");
              c.style.opacity = "";
            }, 150 + Math.random() * 1100)
          );
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const parts = text.split(/(\s+)/).map((part, i) =>
    /^\s+$/.test(part) ? (
      " "
    ) : (
      <span key={i} className='whitespace-nowrap'>
        {Array.from(part).map((c, j) => (
          <span key={j} className='ch'>
            {c}
          </span>
        ))}
      </span>
    )
  );

  return createElement(as, { ref, className }, ...parts, children ? " " : null, children);
}
