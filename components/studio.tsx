"use client";

import { useLanguage } from "@/components/providers";
import { Reveal, SectionKicker } from "@/components/ui";

export function Studio() {
  const { t } = useLanguage();

  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <SectionKicker index={t.studio.index} label={t.studio.label} />
      <Reveal>
        <h2 className="font-display mb-16 max-w-xl text-4xl leading-[0.95] font-bold tracking-[-0.04em] sm:text-5xl">
          {t.studio.title}
        </h2>
      </Reveal>

      <div className="grid gap-px border border-line bg-line lg:grid-cols-3">
        <Reveal className="bg-bg p-8 lg:p-10">
          <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
            {t.studio.education.kicker}
          </p>
          <h3 className="font-display mt-6 text-3xl font-bold tracking-[-0.04em]">
            {t.studio.education.school}
          </h3>
          <p className="mt-2 font-serif text-lg italic text-muted">
            {t.studio.education.period}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            {t.studio.education.degree}
          </p>
          <p className="mt-2 font-mono text-[11px] tracking-[0.14em] uppercase">
            {t.studio.education.note}
          </p>
        </Reveal>

        <Reveal delay={80} className="bg-bg p-8 lg:p-10">
          <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
            {t.studio.activity.kicker}
          </p>
          <h3 className="font-display mt-6 text-3xl font-bold tracking-[-0.04em]">
            {t.studio.activity.org}
          </h3>
          <p className="mt-2 font-serif text-lg italic text-muted">
            {t.studio.activity.period}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            {t.studio.activity.role}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {t.studio.activity.note}
          </p>
        </Reveal>

        <Reveal delay={160} className="bg-bg p-8 lg:p-10">
          <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
            {t.studio.interests.kicker}
          </p>
          <ul className="mt-6 space-y-4">
            {t.studio.interests.items.map((item) => (
              <li
                key={item}
                className="border-b border-line pb-3 font-display text-2xl font-semibold tracking-[-0.03em]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
