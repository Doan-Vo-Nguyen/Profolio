"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { useLanguage, useReady } from "@/components/providers";

export function Nav() {
  const { t, lang, setLang } = useLanguage();
  const { ready } = useReady();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#work", label: t.nav.work },
    { href: "#experience", label: t.nav.experience },
    { href: "#certificates", label: t.nav.certificates },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 mix-blend-difference transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
      >
        <nav className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="font-display text-sm font-bold tracking-[0.18em] uppercase"
            data-cursor="hover"
          >
            {profile.initials}
          </a>

          <ul className="hidden items-center gap-5 lg:gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] tracking-[0.22em] uppercase link-line"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 font-mono text-[11px] tracking-[0.18em]">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={lang === "en" ? "text-fg" : "text-muted"}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <span className="text-muted">/</span>
              <button
                type="button"
                onClick={() => setLang("vi")}
                className={lang === "vi" ? "text-fg" : "text-muted"}
                aria-pressed={lang === "vi"}
              >
                VI
              </button>
            </div>

            <button
              type="button"
              className="font-mono text-[11px] tracking-[0.22em] uppercase md:hidden"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {t.nav.menu}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 flex flex-col bg-bg px-6 py-6 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${open ? "translate-y-0" : "pointer-events-none -translate-y-full"}`}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-bold tracking-[0.18em] uppercase">
            {profile.initials}
          </span>
          <button
            type="button"
            className="font-mono text-[11px] tracking-[0.22em] uppercase"
            onClick={() => setOpen(false)}
          >
            {t.nav.close}
          </button>
        </div>
        <ul className="mt-24 flex flex-col gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl font-bold tracking-[-0.04em] uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-auto pt-20 font-mono text-xs text-muted">{profile.email}</p>
      </div>
    </>
  );
}
