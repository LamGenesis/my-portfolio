"use client";

import { type ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Độ nghiêng tối đa (degrees). 4-6 là vừa đẹp. */
  maxTilt?: number;
};

/**
 * 3D tilt: phần tử nghiêng theo vị trí chuột với perspective ~1000px.
 * Tự tắt trên touch device & prefers-reduced-motion.
 *
 * Dùng CSS variables `--rx --ry` (set trong globals.css `.tilt-3d`).
 */
export function TiltCard({ children, className = "", maxTilt = 5 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.setProperty("--rx", `${(-dy * maxTilt).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(dx * maxTilt).toFixed(2)}deg`);
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [maxTilt]);

  return (
    <div ref={ref} className={`tilt-3d ${className}`.trim()}>
      {children}
    </div>
  );
}
