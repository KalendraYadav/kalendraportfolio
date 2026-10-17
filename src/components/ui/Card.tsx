import React from "react";

export type CardVariant = "white" | "yellow" | "cream" | "cyan" | "dark";
export type CardShadow = "none" | "sm" | "md" | "lg" | "xl";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "article" | "section" | "aside";
  variant?: CardVariant;
  shadow?: CardShadow;
  borderWidth?: "2" | "3" | "4";
  headerTitle?: string;
  headerBadge?: React.ReactNode;
  showWindowControls?: boolean;
  headerClassName?: string;
  bodyClassName?: string;
  interactive?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  white: "bg-surface-white text-ink-black",
  yellow: "bg-cyber-yellow text-ink-black",
  cream: "bg-canvas-cream text-ink-black",
  cyan: "bg-cyber-cyan text-ink-black",
  dark: "bg-ink-black text-surface-white",
};

const shadowStyles: Record<CardShadow, string> = {
  none: "",
  sm: "shadow-brutal-sm",
  md: "shadow-brutal-md",
  lg: "shadow-brutal-lg",
  xl: "shadow-brutal-xl",
};

const borderStyles: Record<string, string> = {
  "2": "border-2",
  "3": "border-3",
  "4": "border-4",
};

export function Card({
  as: Component = "div",
  variant = "white",
  shadow = "md",
  borderWidth = "3",
  headerTitle,
  headerBadge,
  showWindowControls = false,
  headerClassName = "",
  bodyClassName = "p-5 md:p-6",
  interactive = false,
  className = "",
  children,
  ...props
}: CardProps) {
  const hasHeader = Boolean(headerTitle || headerBadge || showWindowControls);

  const containerClasses = [
    "rounded-none border-ink-black transition-all duration-150 overflow-hidden",
    borderStyles[borderWidth],
    variantStyles[variant],
    shadowStyles[shadow],
    interactive
      ? "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg cursor-pointer"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={containerClasses} {...props}>
      {hasHeader && (
        <div
          className={`flex items-center justify-between border-b-3 border-ink-black bg-ink-black text-surface-white px-4 py-2 select-none ${headerClassName}`}
        >
          <div className="flex items-center gap-2">
            {showWindowControls && (
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-pop-red inline-block border border-ink-black" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyber-yellow inline-block border border-ink-black" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent-green inline-block border border-ink-black" />
              </div>
            )}
            {headerTitle && (
              <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-wider">
                {headerTitle}
              </span>
            )}
          </div>
          {headerBadge && <div className="shrink-0">{headerBadge}</div>}
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </Component>
  );
}
