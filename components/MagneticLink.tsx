"use client";

import { type AnchorHTMLAttributes, useEffect, useRef } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Cường độ hút — 0.2 = vừa phải. */
  strength?: number;
};

/**
 * Anchor có hiệu ứng "magnetic" — hút nhẹ về phía con trỏ khi hover.
 * Tắt trên thiết bị cảm ứng & user prefers-reduced-motion.
 */
export function MagneticLink({
  children,
  className = "",
  strength = 0.25,
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = "translate3d(0, 0, 0)";
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return (
    <a ref={ref} className={`magnetic ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}
