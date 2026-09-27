"use client";

import { useLanguage } from "@/components/providers";
import { Reveal, SectionKicker } from "@/components/ui";

export function Skills() {
  const { t } = useLanguage();
  const loop = [...t.skills.marquee, ...t.skills.marquee];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="px-5 sm:px-8 lg:px-12">
        <SectionKicker index={t.skills.index} label={t.skills.label} />
        <Reveal>
          <h2 className="font-display mb-12 max-w-xl text-4xl leading-[0.95] font-bold tracking-[-0.04em] sm:text-5xl">
            {t.skills.title}
          </h2>
        </Reveal>
      </div>

      <div className="overflow-hidden border-y border-line py-6">
        <div className="marquee-track flex gap-10 pr-10">
          {loop.map((item, index) => (
            <span
              key={`a-${item}-${index}`}
              className="font-display text-5xl font-bold tracking-[-0.05em] uppercase whitespace-nowrap sm:text-7xl"
            >
              {item}
              <span className="ml-10 text-muted">/</span>
            </span>
          ))}
        </div>
      </div>
      <div className="overflow-hidden border-b border-line py-6">
        <div className="marquee-track reverse flex gap-10 pr-10">
          {loop.map((item, index) => (
            <span
              key={`b-${item}-${index}`}
              className="font-serif text-4xl italic whitespace-nowrap text-muted sm:text-6xl"
            >
              {item}
              <span className="ml-10 not-italic">—</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-px border-y border-line bg-line px-0 sm:grid-cols-2 lg:grid-cols-4">
        {t.skills.groups.map((group, index) => (
          <Reveal key={group.name} delay={index * 80} className="bg-bg px-5 py-8 sm:px-8">
            <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
              {group.name}
            </p>
            <ul className="mt-6 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 px-5 font-mono text-[11px] tracking-[0.18em] text-muted uppercase sm:px-8 lg:px-12">
        {t.skills.language}
      </p>
    </section>
  );
}
