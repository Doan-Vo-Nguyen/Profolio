"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers";
import { Reveal, SectionKicker } from "@/components/ui";

function ProjectVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 280 360" className="h-full w-full" aria-hidden="true">
        <rect width="280" height="360" fill="#050505" />
        <circle cx="140" cy="180" r="110" fill="none" stroke="#f3f3f3" strokeWidth="1" />
        <circle cx="140" cy="180" r="70" fill="none" stroke="#f3f3f3" strokeWidth="1" />
        <circle cx="140" cy="180" r="28" fill="#f3f3f3" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 280 360" className="h-full w-full" aria-hidden="true">
        <rect width="280" height="360" fill="#050505" />
        {Array.from({ length: 11 }, (_, i) => (
          <line
            key={i}
            x1="0"
            y1={i * 36}
            x2="280"
            y2={i * 36 + 80}
            stroke="#f3f3f3"
            strokeWidth="0.8"
          />
        ))}
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 280 360" className="h-full w-full" aria-hidden="true">
        <rect width="280" height="360" fill="#050505" />
        {Array.from({ length: 48 }, (_, i) => {
          const col = i % 6;
          const row = Math.floor(i / 6);
          return (
            <circle
              key={i}
              cx={40 + col * 40}
              cy={40 + row * 40}
              r={i % 3 === 0 ? 4 : 1.6}
              fill="#f3f3f3"
            />
          );
        })}
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg viewBox="0 0 280 360" className="h-full w-full" aria-hidden="true">
        <rect width="280" height="360" fill="#050505" />
        <text
          x="140"
          y="210"
          textAnchor="middle"
          fill="#f3f3f3"
          fontSize="140"
          fontFamily="serif"
          fontStyle="italic"
        >
          G
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 280 360" className="h-full w-full" aria-hidden="true">
      <rect width="280" height="360" fill="#050505" />
      <rect x="40" y="70" width="140" height="180" fill="none" stroke="#f3f3f3" />
      <rect x="100" y="120" width="140" height="180" fill="#f3f3f3" opacity="0.12" stroke="#f3f3f3" />
    </svg>
  );
}

export function Work() {
  const { t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const node = previewRef.current;
    if (!node) return;
    let x = 0;
    let y = 0;
    let frame = 0;

    const tick = () => {
      x += (target.current.x - x) * 0.14;
      y += (target.current.y - y) * 0.14;
      node.style.transform = `translate(${x}px, ${y}px)`;
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="work" className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <SectionKicker index={t.work.index} label={t.work.label} />
      <Reveal>
        <h2 className="font-display mb-16 max-w-xl text-4xl leading-[0.95] font-bold tracking-[-0.04em] sm:text-5xl">
          {t.work.title}
        </h2>
      </Reveal>

      <div
        className="relative"
        onMouseMove={(event) => {
          target.current = { x: event.clientX + 24, y: event.clientY - 80 };
        }}
      >
        <div
          ref={previewRef}
          aria-hidden="true"
          className={`pointer-events-none fixed top-0 left-0 z-20 hidden h-72 w-56 overflow-hidden border border-fg shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-opacity duration-300 lg:block ${active === null ? "opacity-0" : "opacity-100"}`}
        >
          {active !== null ? <ProjectVisual index={active} /> : null}
        </div>

        <ul className="border-t border-line">
          {t.work.items.map((item, index) => {
            const href = item.live ?? item.href ?? null;
            const body = (
              <>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="work-muted font-mono text-[11px] tracking-[0.2em] text-muted">
                    0{index + 1}
                  </span>
                  <span className="work-muted hidden font-mono text-[11px] tracking-[0.2em] text-muted sm:inline">
                    {item.role}
                  </span>
                  <span className="work-muted font-mono text-[11px] tracking-[0.2em] text-muted">
                    {item.year}
                  </span>
                </div>
                <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <h3 className="font-display text-4xl leading-[0.9] font-bold tracking-[-0.05em] uppercase sm:text-6xl lg:text-7xl">
                    {item.title}
                  </h3>
                  <p className="work-muted max-w-md text-sm leading-relaxed text-muted lg:text-right">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-line px-2 py-1 font-mono text-[10px] tracking-[0.16em] uppercase group-hover:border-black/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="work-muted font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
                    {item.live ? t.work.live : item.href ? t.work.code : t.work.view}
                    {href ? " ↗" : ""}
                  </span>
                </div>
              </>
            );

            return (
              <li key={item.title}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="work-row group block px-2 py-8 sm:px-4 lg:px-6"
                    onMouseEnter={() => setActive(index)}
                    onMouseLeave={() => setActive(null)}
                    data-cursor="hover"
                  >
                    {body}
                  </a>
                ) : (
                  <div
                    className="work-row group block px-2 py-8 sm:px-4 lg:px-6"
                    onMouseEnter={() => setActive(index)}
                    onMouseLeave={() => setActive(null)}
                    data-cursor="hover"
                  >
                    {body}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
