"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "@/lib/content";
import { useLanguage, useReady } from "@/components/providers";

export function Preloader() {
  const { setReady } = useReady();
  const { lang } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);
  const finishing = useRef(false);

  const finish = useCallback(() => {
    if (finishing.current) return;
    finishing.current = true;
    setProgress(100);
    setLeaving(true);
    setReady(true);
    window.setTimeout(() => setHidden(true), 850);
  }, [setReady]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      finishing.current = true;
      setReady(true);
      setHidden(true);
      return;
    }

    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    let doneTimer = 0;
    let cancelled = false;

    const tick = (now: number) => {
      if (cancelled || finishing.current) return;
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));

      if (t < 1) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      doneTimer = window.setTimeout(() => {
        if (!cancelled) finish();
      }, 180);
    };

    frame = window.requestAnimationFrame(tick);
    const fallback = window.setTimeout(() => {
      if (!cancelled) finish();
    }, 2500);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(doneTimer);
      window.clearTimeout(fallback);
    };
  }, [finish, setReady]);

  if (hidden) return null;

  return (
    <button
      type="button"
      className={`preloader ${leaving ? "leave" : ""}`}
      aria-label={lang === "vi" ? "Đang tải, nhấn để vào trang" : "Loading, click to enter"}
      onClick={finish}
    >
      <div className="flex w-full items-center justify-between font-mono text-[11px] tracking-[0.28em] uppercase text-muted">
        <span>{profile.initials}</span>
        <span>Portfolio / 2026</span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="font-sans text-[18vw] leading-none font-semibold tracking-tight tabular-nums sm:text-[10rem]">
          {String(progress).padStart(2, "0")}
        </p>
        <div className="mt-8 h-px w-48 overflow-hidden bg-line sm:w-72">
          <div
            className="progress-bar h-full bg-fg"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>

      <div className="flex w-full items-end justify-between gap-6">
        <p className="font-display text-2xl leading-none font-semibold tracking-[-0.04em] uppercase sm:text-4xl">
          {profile.name}
        </p>
        <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
          {lang === "vi" ? "Nhấn để vào" : "Click to enter"}
        </p>
      </div>
    </button>
  );
}
