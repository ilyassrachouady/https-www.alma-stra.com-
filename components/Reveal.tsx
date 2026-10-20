"use client";

import { CSSProperties, PropsWithChildren, useEffect, useRef, useState } from "react";

type RevealVariant = "rise" | "fade" | "mask-up" | "mask-left" | "mask-right" | "soft-scale";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  threshold?: number;
}>;

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "rise",
  threshold = 0.08,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 18% 0px", threshold: Math.min(threshold, 0.01) }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const style = { "--reveal-delay": `${Math.min(Math.max(delay, 0), 100)}ms` } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
