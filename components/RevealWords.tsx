"use client";

import { type ElementType } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  /** Nội dung text (sẽ được tách thành các từ để stagger). */
  children: string;
  /** Thẻ render — mặc định h2. */
  as?: ElementType;
  /** Delay mỗi từ (ms). */
  staggerMs?: number;
  /** Delay tổng cộng trước khi từ đầu tiên xuất hiện. */
  startDelayMs?: number;
  className?: string;
};

/**
 * Stagger-reveal theo từng từ — chữ trượt từ dưới qua "khe nhìn" của word-mask.
 * Dùng cho section title để tăng kịch tính khi cuộn tới.
 */
export function RevealWords({
  children,
  as: Tag = "h2",
  staggerMs = 70,
  startDelayMs = 0,
  className = "",
}: Props) {
  const [ref, inView] = useInView<HTMLElement>();

  const tokens = children.split(/(\s+)/);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      aria-label={children}
    >
      {tokens.map((token, idx) => {
        if (/^\s+$/.test(token)) return <span key={idx}>{token}</span>;
        const wordIndex = tokens.slice(0, idx).filter((t) => !/^\s+$/.test(t))
          .length;
        return (
          <span
            key={idx}
            aria-hidden
            className={`word-mask ${inView ? "is-visible" : ""}`}
          >
            <span
              style={{
                transitionDelay: `${startDelayMs + wordIndex * staggerMs}ms`,
              }}
            >
              {token}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
