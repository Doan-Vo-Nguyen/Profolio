"use client";

import Image from "next/image";
import { profile } from "@/lib/content";
import { useLanguage } from "@/components/providers";
import { Reveal, SectionKicker } from "@/components/ui";

export function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <SectionKicker index={t.about.index} label={t.about.label} />
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-line lg:mx-0">
            <Image
              src={profile.avatar}
              alt={lang === "vi" ? profile.nameVi : profile.name}
              fill
              sizes="(min-width: 1024px) 28vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.22em] uppercase">
              {lang === "vi" ? profile.nameVi : profile.name}
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display max-w-xl text-4xl leading-[0.95] font-bold tracking-[-0.04em] text-pretty sm:text-5xl lg:text-6xl">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {t.about.p1}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {t.about.p2}
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {t.about.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 70} className="bg-bg p-4 sm:p-5">
                <p className="font-sans text-3xl leading-none font-semibold tracking-tight tabular-nums sm:text-4xl">
                  {stat.value}
                  <span className="ml-1 font-mono text-[10px] font-normal tracking-[0.12em] text-muted uppercase">
                    {stat.unit}
                  </span>
                </p>
                <p className="mt-3 font-mono text-[10px] leading-snug tracking-[0.14em] text-muted uppercase">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {t.about.capabilities.map((item) => (
              <li
                key={item}
                className="border border-line px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-muted uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
