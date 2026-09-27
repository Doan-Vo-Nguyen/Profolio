"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { useLanguage } from "@/components/providers";

function LocalClock() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());

    const update = () => setTime(format());
    const frame = window.requestAnimationFrame(update);
    const id = window.setInterval(update, 1000);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(id);
    };
  }, []);

  return <span className="tabular-nums">{time}</span>;
}

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          {t.footer.local} · Quy Nhon · <LocalClock />
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] tracking-[0.16em] uppercase link-line"
        >
          {t.footer.built}
        </a>
      </div>
    </footer>
  );
}
