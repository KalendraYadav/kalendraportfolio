import React from "react";

export type BadgeVariant =
  | "yellow"
  | "cyan"
  | "pink"
  | "green"
  | "red"
  | "dark"
  | "outline"
  | "white";

export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  tilt?: "left" | "right" | "none";
  statusDot?: boolean;
  statusDotColor?: string;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  yellow: "bg-cyber-yellow text-ink-black",
  cyan: "bg-cyber-cyan text-ink-black",
  pink: "bg-pop-pink text-surface-white",
  green: "bg-accent-green text-ink-black",
  red: "bg-pop-red text-surface-white",
  dark: "bg-ink-black text-surface-white",
  white: "bg-surface-white text-ink-black",
  outline: "bg-transparent text-ink-black",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[10px] md:text-xs px-2 py-0.5 gap-1 border",
  md: "text-xs md:text-sm px-3 py-1 gap-1.5 border-2",
};

const tiltStyles: Record<string, string> = {
  left: "-rotate-2",
  right: "rotate-2",
  none: "rotate-0",
};

export function Badge({
  variant = "yellow",
  size = "md",
  tilt = "none",
  statusDot = false,
  statusDotColor,
  icon,
  className = "",
  children,
  ...props
}: BadgeProps) {
  const defaultDotColor: Record<BadgeVariant, string> = {
    yellow: "bg-ink-black",
    cyan: "bg-ink-black",
    pink: "bg-surface-white",
    green: "bg-ink-black",
    red: "bg-surface-white",
    dark: "bg-accent-green",
    white: "bg-accent-green",
    outline: "bg-ink-black",
  };

  const classes = [
    "inline-flex items-center font-mono font-bold uppercase tracking-wider",
    "border-ink-black select-none transition-transform duration-150",
    variantStyles[variant],
    sizeStyles[size],
    tiltStyles[tilt],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {statusDot && (
        <span
          className={`w-2 h-2 rounded-full shrink-0 border border-ink-black ${
            statusDotColor || defaultDotColor[variant]
          }`}
          aria-hidden="true"
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
