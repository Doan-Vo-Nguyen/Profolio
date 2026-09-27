"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { useLanguage } from "@/components/providers";
import { Reveal } from "@/components/ui";
import { withBase } from "@/lib/paths";

export function Contact() {
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-fg text-bg px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mb-8 flex items-center gap-4">
        <span className="font-mono text-[11px] tracking-[0.22em] text-bg/50">
          ({t.contact.index})
        </span>
        <span className="h-px flex-1 bg-bg/20" />
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-bg/50">
          {t.contact.label}
        </span>
      </div>

      <Reveal>
        <h2 className="font-display max-w-4xl text-4xl leading-[0.92] font-bold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
          {t.contact.title}
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-bg/70 sm:text-lg">
          {t.contact.body}
        </p>
      </Reveal>

      <Reveal delay={120}>
        <a
          href={`mailto:${profile.email}`}
          className="font-display mt-14 block text-[8vw] leading-[0.9] font-bold tracking-[-0.06em] break-all sm:text-6xl lg:text-7xl"
        >
          {profile.email}
        </a>
      </Reveal>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={copyEmail}
          className="border border-bg/20 px-4 py-2 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:bg-bg hover:text-fg"
        >
          {copied ? t.contact.copied : t.contact.copy}
        </button>
        <a
          href={withBase(profile.resume)}
          download
          className="border border-bg/20 px-4 py-2 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:bg-bg hover:text-fg"
        >
          {t.contact.resume}
        </a>
      </div>

      <dl className="mt-16 grid gap-8 border-t border-bg/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="font-mono text-[11px] tracking-[0.2em] text-bg/50 uppercase">
            {t.contact.phoneLabel}
          </dt>
          <dd className="mt-2">
            <a href={profile.phoneHref} className="link-line">
              {profile.phoneDisplay}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] tracking-[0.2em] text-bg/50 uppercase">
            {t.contact.githubLabel}
          </dt>
          <dd className="mt-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="link-line"
            >
              {profile.githubHandle} ↗
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] tracking-[0.2em] text-bg/50 uppercase">
            {t.contact.locationLabel}
          </dt>
          <dd className="mt-2">
            {lang === "vi" ? profile.addressVi : profile.address}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] tracking-[0.2em] text-bg/50 uppercase">
            {t.contact.emailLabel}
          </dt>
          <dd className="mt-2">
            <a href={`mailto:${profile.email}`} className="link-line break-all">
              {profile.email}
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
