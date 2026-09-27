"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers";
import { Reveal, SectionKicker } from "@/components/ui";

export function Certificates() {
  const { t } = useLanguage();

  return (
    <section
      id="certificates"
      className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <SectionKicker
        index={t.certificates.index}
        label={t.certificates.label}
      />
      <Reveal>
        <h2 className="font-display mb-16 max-w-xl text-4xl leading-[0.95] font-bold tracking-[-0.04em] sm:text-5xl">
          {t.certificates.title}
        </h2>
      </Reveal>

      <ul className="grid gap-8 lg:grid-cols-3">
        {t.certificates.items.map((item, index) => (
          <li key={item.href}>
            <Reveal delay={index * 80}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
                data-cursor="hover"
              >
                <div className="relative overflow-hidden border border-line bg-fg transition-transform duration-500 group-hover:-translate-y-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1600}
                    height={1132}
                    className="h-auto w-full"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-3">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-muted">
                    0{index + 1}
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-muted">
                    {item.period}
                  </p>
                </div>
                <h3 className="font-display mt-3 text-2xl leading-tight font-bold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.note}
                </p>
                <p className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-muted link-line">
                  {t.certificates.view} ↗
                </p>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
