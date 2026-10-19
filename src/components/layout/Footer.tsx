import React from "react";
import Link from "next/link";
import Image from "next/image";
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
              href="/"
              className="inline-flex items-center gap-3 font-display font-black text-2xl md:text-3xl tracking-tighter text-ink-black hover:bg-cyber-yellow px-2 py-1 border-2 border-transparent hover:border-ink-black transition-all"
            >
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={40}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="font-body text-sm text-text-muted max-w-md">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Route Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
            <Link href="/projects" className="hover:text-ink-black hover:underline py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black">Projects</Link>
            <Link href="/skills" className="hover:text-ink-black hover:underline py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black">Skills</Link>
            <Link href="/experience" className="hover:text-ink-black hover:underline py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black">Experience</Link>
            <Link href="/about" className="hover:text-ink-black hover:underline py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black">About</Link>
            <Link href="/contact" className="hover:text-ink-black hover:underline py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black">Contact</Link>
            <Link href="/design-system" className="hover:text-ink-black text-cobalt-blue hover:underline py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black">Design System</Link>
          </nav>

          {/* Back to Top Action */}
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
              verifiedProfiles.map((profile) => {
                const isMailto = profile.url.startsWith("mailto:");
                return (
                  <a
                    key={profile.platform}
                    href={profile.url}
                    target={isMailto ? undefined : "_blank"}
                    rel={isMailto ? undefined : "noopener noreferrer"}
                    className="hover:text-ink-black hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black px-1 py-0.5"
                    aria-label={
                      isMailto
                        ? `Send email to ${siteConfig.contact.email.address}`
                        : `Open ${profile.label} profile in a new tab`
                    }
                  >
                    {profile.label}
                  </a>
                );
              })
            ) : (
              <span className="text-[11px] text-text-muted">
                Professional profile links activate upon official release
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
