"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  /** Khi đạt threshold sẽ trigger. Mặc định 0.15 = 15% phần tử trong viewport */
  threshold?: number;
  /** Margin offset như IntersectionObserver rootMargin */
  rootMargin?: string;
  /** Nếu true, chỉ trigger 1 lần (mặc định) */
  once?: boolean;
};

/**
 * Custom hook dùng IntersectionObserver để biết phần tử có đang trong viewport hay không.
 * Trả về [ref, isInView] — gắn ref vào element cần theo dõi.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
