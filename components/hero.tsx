"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { useLanguage, useReady } from "@/components/providers";

export function Hero() {
  const { t } = useLanguage();
  const { ready } = useReady();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % t.hero.rotating.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [t.hero.rotating.length]);

  return (
    <section
      id="top"
      className={`relative flex min-h-dvh flex-col justify-end px-5 pt-28 pb-8 sm:px-8 lg:px-12 lg:pb-10 ${ready ? "is-ready" : ""}`}
    >
      <div className="mb-auto flex items-start justify-between gap-6">
        <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-fg" />
          {t.hero.available}
        </p>
        <p className="hidden font-mono text-[11px] tracking-[0.22em] text-muted uppercase sm:block">
          {t.hero.kicker}
        </p>
      </div>

      <div className="hero-name-wrap relative">
        <p className="mb-4 font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
          {t.hero.kicker} — {t.hero.rotating[wordIndex] ?? t.hero.rotating[0]}
        </p>
        <h1 className="hero-name font-display font-extrabold tracking-[-0.045em] uppercase">
          {[t.hero.line1, t.hero.line2, t.hero.line3].map((line, index) => (
            <span className="clip-reveal block whitespace-nowrap" key={line}>
              <span style={{ transitionDelay: `${80 + index * 140}ms` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>
      </div>

      <div className="mt-10 grid gap-8 border-t border-line pt-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <p className="max-w-xl font-serif text-xl leading-relaxed text-pretty italic sm:text-2xl">
          {t.hero.statement}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6 lg:justify-end lg:text-right">
          <div className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            <p>{t.hero.location}</p>
            <p className="mt-1">{t.hero.now}</p>
          </div>
          <a
            href="#work"
            className="group flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase"
          >
            {t.hero.cta}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute right-5 bottom-10 hidden items-center gap-3 lg:flex">
        <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted">
          {t.hero.scroll}
        </span>
        <span className="scroll-bar h-10 w-px bg-fg" />
      </div>

      <span className="sr-only">{profile.name}</span>
    </section>
  );
}
