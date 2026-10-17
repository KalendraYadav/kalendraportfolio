import React from "react";
import Link from "next/link";
import { siteConfig, getVerifiedProfiles } from "@/config/site";
import { BackToTopButton } from "./BackToTopButton";

export function Footer() {
  const currentYear = 2026;
  const verifiedProfiles = getVerifiedProfiles();

  return (
    <footer className="w-full bg-surface-white border-t-4 border-ink-black text-ink-black mt-auto select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b-3 border-ink-black pb-8">
          {/* Brand & Descriptor */}
          <div className="space-y-2">
            <Link
              href="/#home"
              className="font-display font-black text-2xl md:text-3xl tracking-tighter text-ink-black hover:bg-cyber-yellow px-2 py-1 border-2 border-transparent hover:border-ink-black transition-all inline-block"
            >
              {siteConfig.brand}
            </Link>
            <p className="font-body text-sm text-text-muted max-w-md">
              {`${siteConfig.role} // ${siteConfig.tagline}`}
            </p>
          </div>

          {/* Back to Top Action (Client Component) */}
          <BackToTopButton />
        </div>

        {/* Secondary Links & Colophon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-text-muted">
          <div>
            <span>© {currentYear} {siteConfig.name}. All rights reserved.</span>
          </div>

          {/* Verified Profiles or Development Status */}
          <div className="flex items-center gap-4 flex-wrap">
            {verifiedProfiles.length > 0 ? (
              verifiedProfiles.map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink-black hover:underline"
                >
                  {profile.label}
                </a>
              ))
            ) : (
              <span className="text-[11px] text-text-muted italic">
                {"// Verified social links will activate upon official launch"}
              </span>
            )}
            <Link href="/design-system" className="hover:text-ink-black font-bold">
              [Design System Spec]
            </Link>
          </div>
        </div>

        {/* Technical Credit */}
        <div className="pt-4 border-t border-ink-black/20 text-center font-mono text-[11px] text-text-muted">
          {"Built with Next.js 16, TypeScript, Tailwind CSS 4 & Neo-Brutalism Design System."}
        </div>
      </div>
    </footer>
  );
}
