import React from "react";

export type MarqueeVariant = "dark" | "yellow" | "white";

export interface MarqueeProps {
  items: string[];
  separator?: string;
  variant?: MarqueeVariant;
  borderTop?: boolean;
  borderBottom?: boolean;
  className?: string;
}

const variantStyles: Record<MarqueeVariant, string> = {
  dark: "bg-ink-black text-cyber-yellow",
  yellow: "bg-cyber-yellow text-ink-black",
  white: "bg-surface-white text-ink-black",
};

export function Marquee({
  items,
  separator = "//",
  variant = "dark",
  borderTop = true,
  borderBottom = true,
  className = "",
}: MarqueeProps) {
  const content = (
    <div className="flex items-center shrink-0 py-3 gap-6 font-mono text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest select-none">
      {items.map((item, idx) => (
        <React.Fragment key={`${item}-${idx}`}>
          <span className="whitespace-nowrap">{item}</span>
          <span className="opacity-60" aria-hidden="true">
            {separator}
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div
      tabIndex={0}
      role="region"
      aria-label="Announcement ticker"
      className={[
        "relative w-full overflow-hidden select-none outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyber-yellow",
        borderTop ? "border-t-3 border-ink-black" : "",
        borderBottom ? "border-b-3 border-ink-black" : "",
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="animate-marquee flex">
        {/* Primary track accessible to screen readers */}
        <div>{content}</div>
        {/* Duplicate track for infinite seamless loop, hidden from assistive tech */}
        <div aria-hidden="true">{content}</div>
      </div>
    </div>
  );
}
