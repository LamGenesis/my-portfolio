"use client";

import { useEffect, useRef } from "react";

/**
 * Thanh tiến trình mảnh ở đỉnh trang — fill theo % cuộn.
 * Dùng requestAnimationFrame để throttle và scaleX cho transform GPU-friendly.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    let pending = false;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      if (ref.current) {
        ref.current.style.transform = `scaleX(${progress})`;
      }
      pending = false;
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
    >
      <div
        ref={ref}
        className="h-full origin-left bg-gradient-to-r from-sky-400 via-sky-500 to-cyan-400 shadow-[0_0_8px_rgba(14,165,233,0.6)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
