import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "cyan"
  | "outline"
  | "dark";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-cyber-yellow text-ink-black hover:bg-yellow-300 active:bg-cyber-yellow",
  secondary:
    "bg-surface-white text-ink-black hover:bg-canvas-cream active:bg-surface-white",
  accent:
    "bg-pop-pink text-surface-white hover:bg-pink-600 active:bg-pop-pink",
  cyan:
    "bg-cyber-cyan text-ink-black hover:bg-cyan-300 active:bg-cyber-cyan",
  outline:
    "bg-transparent text-ink-black hover:bg-surface-white active:bg-transparent",
  dark:
    "bg-ink-black text-surface-white hover:bg-neutral-900 active:bg-ink-black",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3 py-1.5 gap-1.5 border-2",
  md: "text-sm md:text-base px-5 py-2.5 gap-2 border-3",
  lg: "text-base md:text-lg px-7 py-3.5 gap-2.5 border-3",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  fullWidth = false,
  icon,
  iconPosition = "right",
  className = "",
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = [
    "inline-flex items-center justify-center font-display font-bold uppercase tracking-wider",
    "border-ink-black rounded-none transition-all duration-100 select-none cursor-pointer",
    "shadow-brutal-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg",
    "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
    "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ink-black focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-brutal-sm disabled:transform-none",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
          aria-disabled={disabled}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={baseStyles} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" disabled={disabled} className={baseStyles} {...props}>
      {content}
    </button>
  );
}
