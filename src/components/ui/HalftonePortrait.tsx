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
  captionLeft?: string;
  captionRight?: string;
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
  badgeText = "Engineering",
  statusText = "Kalendra Yadav",
  stickerText,
  captionLeft = "Systems & Web Architecture",
  captionRight = "India",
  priority = true,
  className = "",
}: HalftonePortraitProps) {
  const aspectClass = aspectRatio === "square" ? "aspect-square" : "aspect-[4/5]";

  return (
    <div className={`relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] mx-auto select-none pr-3 pb-3 sm:pr-4 sm:pb-4 ${className}`}>
      {/* 1. Asymmetric Cyber Offset Backing Card */}
      <div
        className={`absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3.5 sm:translate-y-3.5 border-3 border-ink-black ${backingStyles[backingVariant]} shadow-brutal-sm sm:shadow-brutal-md`}
        aria-hidden="true"
      />

      {/* 2. Main High-Contrast Brutalist Framing */}
      <div className="relative border-3 sm:border-4 border-ink-black bg-surface-white shadow-brutal-md sm:shadow-brutal-xl transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 motion-reduce:transform-none">
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
          {badgeText && (
            <span className="font-mono text-[11px] sm:text-xs font-bold text-cyber-yellow uppercase tracking-widest">
              {badgeText}
            </span>
          )}
        </div>

        {/* 3. Image Container with Aspect Ratio */}
        <div className={`relative w-full ${aspectClass} overflow-hidden bg-ink-black`}>
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
        </div>

        {/* Bottom Metadata & Caption */}
        <div className="border-t-3 border-ink-black bg-canvas-cream p-2.5 sm:p-3 flex items-center justify-between font-mono text-[11px] sm:text-xs font-bold text-ink-black">
          <span className="text-text-muted">{captionLeft}</span>
          {stickerText ? (
            <Badge size="sm" variant="yellow" tilt="right">
              {stickerText}
            </Badge>
          ) : (
            <span className="text-text-muted font-mono uppercase tracking-wider">{captionRight}</span>
          )}
        </div>
      </div>
    </div>
  );
}
