"use client";

import { useLanguage } from "@/components/providers";
import { Reveal, SectionKicker } from "@/components/ui";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <SectionKicker index={t.experience.index} label={t.experience.label} />
      <Reveal>
        <h2 className="font-display mb-16 max-w-xl text-4xl leading-[0.95] font-bold tracking-[-0.04em] sm:text-5xl">
          {t.experience.title}
        </h2>
      </Reveal>

      <ol className="divide-y divide-line border-y border-line">
        {t.experience.items.map((item, index) => (
          <li
            key={item.company}
            className="grid gap-6 py-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16"
          >
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
                {item.period}
              </p>
              <h3 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                {item.company}
              </h3>
              <p className="mt-2 font-serif text-lg italic text-muted">{item.role}</p>
              <p className="mt-4 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                {item.location}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <ul className="space-y-4">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-4 text-sm leading-relaxed text-muted sm:text-base"
                  >
                    <span className="mt-2 h-px w-6 shrink-0 bg-line" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-mono text-[11px] text-muted">
                0{index + 1} / 0{t.experience.items.length}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
