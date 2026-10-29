"use client";

import { useEffect, useRef } from "react";

const HOVER = "a, button, summary, label, [role='button'], [role='link']";
const TEXT = "input, textarea, select, [contenteditable='true']";

// Blue cursor for fine pointers: a precise dot, a lagging ring, and a soft
// trail. Touch and reduced-motion keep the native cursor.
export default function Cursor() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = root.current;
    if (!el || !fine.matches || reduce.matches) return;

    const dot = el.querySelector<HTMLElement>("[data-cursor='dot']");
    const ring = el.querySelector<HTMLElement>("[data-cursor='ring']");
    const glow = el.querySelector<HTMLElement>("[data-cursor='glow']");
    if (!dot || !ring || !glow) return;

    document.documentElement.classList.add("custom-cursor");

    const target = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };
    const glowPos = { x: 0, y: 0 };
    let shown = false;
    let running = true;
    let frame = 0;

    const place = (node: HTMLElement, x: number, y: number) => {
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!shown) {
        shown = true;
        ringPos.x = glowPos.x = target.x;
        ringPos.y = glowPos.y = target.y;
        place(ring, target.x, target.y);
        place(glow, target.x, target.y);
        el.classList.add("is-on");
      }
      place(dot, target.x, target.y);

      const node = event.target instanceof Element ? event.target : null;
      const typing = Boolean(node?.closest(TEXT));
      el.classList.toggle("is-typing", typing);
      el.classList.toggle("is-hot", !typing && Boolean(node?.closest(HOVER)));
    };

    const onDown = () => el.classList.add("is-down");
    const onUp = () => el.classList.remove("is-down");
    const onLeave = () => {
      shown = false;
      el.classList.remove("is-on", "is-hot", "is-down", "is-typing");
    };

    const tick = () => {
      if (!running) return;
      ringPos.x += (target.x - ringPos.x) * 0.18;
      ringPos.y += (target.y - ringPos.y) * 0.18;
      glowPos.x += (target.x - glowPos.x) * 0.08;
      glowPos.y += (target.y - glowPos.y) * 0.08;
      place(ring, ringPos.x, ringPos.y);
      place(glow, glowPos.x, glowPos.y);
      frame = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
        return;
      }
      if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };

    const disable = () => {
      if (fine.matches && !reduce.matches) return;
      teardown();
    };

    const teardown = () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      fine.removeEventListener("change", disable);
      reduce.removeEventListener("change", disable);
      document.documentElement.classList.remove("custom-cursor");
      el.classList.remove("is-on", "is-hot", "is-down", "is-typing");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    fine.addEventListener("change", disable);
    reduce.addEventListener("change", disable);
    frame = requestAnimationFrame(tick);

    return teardown;
  }, []);

  return (
    <div ref={root} className='cursor-root' aria-hidden='true'>
      <div data-cursor='glow' className='cursor-follow'>
        <span className='cursor-glow' />
      </div>
      <div data-cursor='ring' className='cursor-follow'>
        <span className='cursor-ring' />
      </div>
      <div data-cursor='dot' className='cursor-follow'>
        <span className='cursor-dot' />
      </div>
    </div>
  );
}
