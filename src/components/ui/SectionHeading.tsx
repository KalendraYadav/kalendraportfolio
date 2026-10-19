import React from "react";

export interface SectionHeadingProps {
  number?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  align?: "left" | "center";
  badge?: React.ReactNode;
  className?: string;
}

const headingSizes: Record<string, string> = {
  h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  h3: "text-xl sm:text-2xl md:text-3xl",
  h4: "text-lg sm:text-xl md:text-2xl",
};

export function SectionHeading({
  number,
  title,
  description,
  as: Component = "h2",
  align = "left",
  badge,
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCentered ? "text-center mx-auto max-w-3xl" : "max-w-4xl"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-3 flex-wrap ${
          isCentered ? "justify-center" : "justify-start"
        }`}
      >
        {number && (
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-ink-black bg-cyber-yellow px-2 py-0.5 border-2 border-ink-black uppercase select-none">
            {number}
          </span>
        )}
        {badge}
      </div>

      <Component
        className={`font-display font-black uppercase tracking-tight text-ink-black leading-[1.05] break-words ${headingSizes[Component]}`}
      >
        {title}
      </Component>

      {description && (
        <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
