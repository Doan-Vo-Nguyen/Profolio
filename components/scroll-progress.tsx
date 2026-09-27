"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScale(height > 0 ? window.scrollY / height : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 h-[2px] w-full bg-transparent"
    >
      <div
        className="h-full origin-left bg-fg"
        style={{ transform: `scaleX(${scale})` }}
      />
    </div>
  );
}
