"use client";

import { type ElementType, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  /** Delay (ms) trước khi hiệu ứng chạy — dùng để stagger nhiều phần tử */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Wrapper áp dụng hiệu ứng fade + slide-up khi scroll tới.
 * Dựa trên class `.reveal` trong globals.css để giữ logic tối thiểu.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
