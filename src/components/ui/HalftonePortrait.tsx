import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Badge } from "./Badge";

export interface HalftonePortraitProps {
  src?: string;
  alt?: string;
  aspectRatio?: "square" | "portrait";
  backingVariant?: "cyan" | "yellow" | "pink";
  badgeText?: string;
  statusText?: string;
  stickerText?: string;
  priority?: boolean;
  className?: string;
}

const backingStyles: Record<string, string> = {
  cyan: "bg-cyber-cyan",
  yellow: "bg-cyber-yellow",
  pink: "bg-pop-pink",
};

export function HalftonePortrait({
  src = siteConfig.portrait.src,
  alt = siteConfig.portrait.alt,
  aspectRatio = "square",
  backingVariant = "cyan",
  badgeText = "// DEV_ID: KY-01",
  statusText = "STATUS: ACTIVE",
  stickerText = "POP ART // DUOTONE",
  priority = true,
  className = "",
}: HalftonePortraitProps) {
  const aspectClass = aspectRatio === "square" ? "aspect-square" : "aspect-[4/5]";

  return (
    <div className={`relative w-full max-w-[440px] mx-auto select-none ${className}`}>
      {/* 1. Asymmetric Cyber Offset Backing Card */}
      <div
        className={`absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border-3 border-ink-black ${backingStyles[backingVariant]} shadow-brutal-md`}
        aria-hidden="true"
      />

      {/* 2. Main High-Contrast Brutalist Framing */}
      <div className="relative border-4 border-ink-black bg-surface-white shadow-brutal-xl">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between border-b-3 border-ink-black bg-ink-black text-surface-white px-3 py-1.5 sm:px-4 sm:py-2">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full bg-accent-green inline-block border border-ink-black"
              aria-hidden="true"
            />
            <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-surface-white">
              {statusText}
            </span>
          </div>
          <span className="font-mono text-[11px] sm:text-xs font-bold text-cyber-yellow uppercase tracking-widest">
            {badgeText}
          </span>
        </div>

        {/* 3. Image Container with Aspect Ratio */}
        <div className={`relative w-full ${aspectClass} overflow-hidden bg-cobalt-blue`}>
          {/* Base Duotone Graphic Layer */}
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
              className="object-cover object-center"
            />
          </div>

          {/* 4. Pop-Art Halftone Screenprint Overlay (CSS Dot Matrix) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
            style={{
              backgroundImage:
                "radial-gradient(#0A0A0A 1.5px, transparent 1.5px)",
              backgroundSize: "8px 8px",
            }}
            aria-hidden="true"
          />

          {/* 5. Comic Print Color Separation Overlay */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-color opacity-20 bg-gradient-to-tr from-cobalt-blue via-transparent to-pop-red"
            aria-hidden="true"
          />
        </div>

        {/* Bottom Metadata & Corner Sticker */}
        <div className="border-t-3 border-ink-black bg-canvas-cream p-2.5 sm:p-3 flex items-center justify-between font-mono text-[11px] sm:text-xs font-bold text-ink-black">
          <span className="text-text-muted">{"// MATRIX: 800x800"}</span>
          {stickerText && (
            <Badge size="sm" variant="yellow" tilt="right">
              {stickerText}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
