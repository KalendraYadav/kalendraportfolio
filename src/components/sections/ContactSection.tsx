"use client";

import React, { useState } from "react";
import {
  siteConfig,
  getVerifiedProfiles,
  isEmailVerified,
  isResumeAvailable,
} from "@/config/site";
import { SectionHeading, Badge, Button, ResumeNoticeModal } from "@/components/ui";
import { CopyEmailButton } from "./CopyEmailButton";
import {
  Mail,
  FileText,
  Download,
  ExternalLink,
  MapPin,
  Clock,
  Sparkles,
  ShieldAlert,
  GitBranch,
  Globe,
} from "lucide-react";

export function ContactSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const emailVerified = isEmailVerified();
  const resumeAvailable = isResumeAvailable();
  const verifiedProfiles = getVerifiedProfiles();

  const getProfileIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <GitBranch className="w-4 h-4" aria-hidden="true" />;
      case "linkedin":
        return <Globe className="w-4 h-4" aria-hidden="true" />;
      default:
        return <ExternalLink className="w-4 h-4" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
      className="scroll-mt-24 w-full relative bg-canvas-cream border-b-4 border-ink-black py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <SectionHeading
            number="// 05"
            title="Contact & Collaboration Hub"
            as="h2"
            description="Direct channels to discuss full-stack software engineering, architecture, technical case studies, or prospective engineering roles."
          />
        </div>

        {/* Main Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Narrative & Availability (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-3 border-ink-black bg-surface-white p-6 sm:p-8 shadow-brutal-lg space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="green" size="sm">
                  {siteConfig.contact.statusText}
                </Badge>
                <span className="font-mono text-xs text-text-muted">
                  {"// 2026 INTAKE"}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-ink-black leading-snug">
                {siteConfig.contact.headline}
              </h3>

              <p className="font-body text-base text-ink-black/85 leading-relaxed">
                {siteConfig.contact.subheading}
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t-2 border-ink-black/15 font-mono text-xs">
              <div className="flex items-center gap-2 text-ink-black/80">
                <MapPin className="w-4 h-4 text-cobalt-blue shrink-0" aria-hidden="true" />
                <span className="font-bold">Location:</span>
                <span>{siteConfig.contact.operatingLocation}</span>
              </div>

              <div className="flex items-center gap-2 text-ink-black/80">
                <Clock className="w-4 h-4 text-accent-green shrink-0" aria-hidden="true" />
                <span className="font-bold">Turnaround:</span>
                <span>Response within 24–48 hours</span>
              </div>

              <div className="flex items-center gap-2 text-ink-black/80">
                <Sparkles className="w-4 h-4 text-cyber-yellow shrink-0" aria-hidden="true" />
                <span className="font-bold">Standards:</span>
                <span>Zero spam · Verifiable discussion</span>
              </div>
            </div>
          </div>

          {/* Right Column: Action Command Panel (7 cols) */}
          <div className="lg:col-span-7 flex flex-col border-3 border-ink-black bg-surface-white shadow-brutal-lg overflow-hidden">
            {/* Retro Window Header Bar */}
            <div className="flex items-center justify-between border-b-3 border-ink-black bg-ink-black text-surface-white px-4 py-2.5 select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-pop-red border border-ink-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cyber-yellow border border-ink-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-green border border-ink-black" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-surface-white">
                  SPEC // CONTACT_COMMAND_CENTER
                </span>
              </div>
              <span className="font-mono text-[11px] text-cyber-yellow font-bold">
                ENCRYPTED_FLOW
              </span>
            </div>

            {/* Panel Body Content */}
            <div className="p-6 sm:p-8 space-y-8 flex-1 flex flex-col justify-between">
              {/* Channel 1: Primary Email Channel */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-ink-black">
                    <Mail className="w-4 h-4 text-cobalt-blue" aria-hidden="true" />
                    <span>01. PRIMARY INBOX CHANNEL</span>
                  </div>
                  {emailVerified ? (
                    <Badge variant="green" size="sm">
                      VERIFIED ACTIVE
                    </Badge>
                  ) : (
                    <Badge variant="yellow" size="sm">
                      SETUP IN PROGRESS
                    </Badge>
                  )}
                </div>

                {emailVerified ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-canvas-cream border-2 border-ink-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <span className="font-mono text-sm sm:text-base font-bold text-ink-black break-all">
                        {siteConfig.contact.email.address}
                      </span>
                      <Button
                        href={`mailto:${siteConfig.contact.email.address}`}
                        variant="outline"
                        size="sm"
                        external
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                      >
                        Open Client
                      </Button>
                    </div>

                    <CopyEmailButton email={siteConfig.contact.email.address} />
                  </div>
                ) : (
                  <div className="p-4 bg-canvas-cream border-2 border-dashed border-ink-black space-y-2">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink-black">
                      <ShieldAlert className="w-4 h-4 text-pop-red shrink-0" aria-hidden="true" />
                      <span>OFFICIAL INBOX PENDING VERIFICATION</span>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                      {siteConfig.contact.email.unavailableNotice}
                    </p>
                    <div className="pt-1 font-mono text-[11px] text-text-muted">
                      {"Config path: src/config/site.ts -> contact.email.verified"}
                    </div>
                  </div>
                )}
              </div>

              {/* Channel 2: Official Résumé Download */}
              <div className="space-y-4 pt-6 border-t-2 border-ink-black/15">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-ink-black">
                    <FileText className="w-4 h-4 text-pop-pink" aria-hidden="true" />
                    <span>02. CURRICULUM VITAE / RÉSUMÉ</span>
                  </div>
                  {resumeAvailable ? (
                    <Badge variant="green" size="sm">
                      FILE READY
                    </Badge>
                  ) : (
                    <Badge variant="outline" size="sm">
                      PENDING EXPORT
                    </Badge>
                  )}
                </div>

                <div className="p-4 bg-surface-white border-2 border-ink-black shadow-brutal-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-display font-bold text-base uppercase text-ink-black block">
                      Kalendra Yadav — Developer Résumé
                    </span>
                    <span className="font-mono text-xs text-text-muted block">
                      FORMAT: PDF · STRICT VERIFICATION
                    </span>
                  </div>

                  {resumeAvailable ? (
                    <Button
                      href={siteConfig.resume.url}
                      variant="primary"
                      size="sm"
                      icon={<Download className="w-4 h-4" />}
                    >
                      Download PDF
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<FileText className="w-4 h-4" />}
                      onClick={() => setResumeModalOpen(true)}
                    >
                      Check Status
                    </Button>
                  )}
                </div>
              </div>

              {/* Channel 3: Professional Profiles */}
              <div className="space-y-3 pt-6 border-t-2 border-ink-black/15">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-ink-black">
                  <GitBranch className="w-4 h-4 text-ink-black" aria-hidden="true" />
                  <span>03. VERIFIED PROFESSIONAL NETWORKS</span>
                </div>

                {verifiedProfiles.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {verifiedProfiles.map((profile) => (
                      <Button
                        key={profile.platform}
                        href={profile.url}
                        variant="secondary"
                        size="sm"
                        external
                        icon={getProfileIcon(profile.platform)}
                      >
                        {profile.label}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="p-3 bg-canvas-cream border border-ink-black text-xs font-mono text-text-muted flex items-center justify-between gap-2">
                    <span>
                      {"// Verified GitHub & LinkedIn links will activate upon official launch"}
                    </span>
                    <span className="font-bold text-ink-black text-[11px]">
                      [AWAITING URLS]
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Résumé Status Notice Modal */}
      <ResumeNoticeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
}
