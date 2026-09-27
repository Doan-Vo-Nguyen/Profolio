"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    if (!fine || !wide) return;

    document.body.classList.add("has-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let hover = false;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      document.documentElement.style.setProperty("--spot-x", `${mouseX}px`);
      document.documentElement.style.setProperty("--spot-y", `${mouseY}px`);

      const target = event.target;
      if (target instanceof Element) {
        hover = Boolean(
          target.closest("a, button, [data-cursor='hover']"),
        );
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) scale(${hover ? 2.15 : 1})`;
      ring.style.opacity = hover ? "0.35" : "0.7";
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = window.requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fg mix-blend-difference lg:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fg mix-blend-difference lg:block"
      />
    </>
  );
}
