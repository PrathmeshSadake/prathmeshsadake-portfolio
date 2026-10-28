"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const LINKS = [
  { title: "About", id: "about" },
  { title: "Experience", id: "experience" },
  { title: "Work", id: "work" },
  { title: "Skills", id: "skills" },
];

// Four section links fixed to the left edge, set vertically and read bottom
// to top, on a transparent background. The link for the section in view is
// drawn in ink; the rest stay muted. Hidden on small screens.
export default function SideNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.1, 0.5] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label='Sections'
      className='pointer-events-none fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 pl-5 lg:block xl:pl-7'
    >
      <ul className='m-0 flex list-none flex-col items-center gap-7 p-0'>
        {LINKS.map((link) => (
          <li key={link.id} className='pointer-events-auto'>
            <Link
              href={`/#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={cn(
                "mono ul-grow block rotate-180 text-[11px] transition-colors [writing-mode:vertical-rl] hover:text-blue",
                active === link.id ? "text-ink" : "text-faint"
              )}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
