"use client";

import React, { useState } from "react";
import {
  siteConfig,
  getVerifiedProfiles,
  isEmailVerified,
  isResumeAvailable,
} from "@/config/site";
import { Badge, Button, ResumeNoticeModal } from "@/components/ui";
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
  Code2,
  ArrowRight,
  Home,
  CheckCircle,
} from "lucide-react";

export interface ContactSectionProps {
  headingAs?: "h1" | "h2";
}

export function ContactSection({ headingAs = "h2" }: ContactSectionProps = {}) {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const emailVerified = isEmailVerified();
  const resumeAvailable = isResumeAvailable();
  const verifiedProfiles = getVerifiedProfiles();
  const professionalProfiles = verifiedProfiles.filter(
    (p) => p.platform.toLowerCase() !== "email"
  );
  const HeadingComponent = headingAs;

  const getProfileIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <GitBranch className="w-4 h-4" aria-hidden="true" />;
      case "linkedin":
        return <Globe className="w-4 h-4" aria-hidden="true" />;
      case "leetcode":
        return <Code2 className="w-4 h-4" aria-hidden="true" />;
      default:
        return <ExternalLink className="w-4 h-4" aria-hidden="true" />;
    }
  };

  const getChannelTrigger = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return "channel-github";
      case "linkedin":
        return "channel-linkedin";
      case "leetcode":
        return "channel-leetcode";
      case "email":
        return "channel-email";
      default:
        return undefined;
    }
  };

  return (
    <section
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
      className="scroll-mt-24 w-full relative bg-canvas-cream border-b-4 border-ink-black py-14 sm:py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* A. EDITORIAL PAGE HEADER */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-black bg-cyber-yellow px-2.5 py-1 border-2 border-ink-black shadow-brutal-sm">
              COMMUNICATION
            </span>
            <span className="font-mono text-xs text-text-muted font-bold tracking-wider uppercase">
              · DIRECT INQUIRIES
            </span>
          </div>

          <HeadingComponent
            id="contact-heading"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-ink-black leading-[1.05]"
          >
            Contact &amp; Collaboration Hub.
          </HeadingComponent>

          <p className="font-body text-base sm:text-lg md:text-xl text-ink-black/85 leading-relaxed">
            Direct channels to discuss full-stack software engineering, architecture, technical case studies, or prospective engineering roles.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-accent-green" aria-hidden="true" />
              <span>Honest Direct Communication</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyber-yellow" aria-hidden="true" />
              <span>No Simulated Forms or Fake Endpoints</span>
            </div>
          </div>
        </div>

        {/* B. MAIN TWO-COLUMN CONTACT COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Narrative & Availability (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-3 border-ink-black bg-surface-white p-6 sm:p-8 shadow-brutal-lg space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <Badge variant="green" size="sm">
                  {siteConfig.contact.statusText}
                </Badge>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-ink-black leading-snug">
                {siteConfig.contact.headline}
              </h3>

              <p className="font-body text-base text-ink-black/85 leading-relaxed">
                {siteConfig.contact.subheading}
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t-2 border-ink-black/15 font-mono text-xs">
              <div className="flex items-center gap-2 text-ink-black/85">
                <MapPin className="w-4 h-4 text-cobalt-blue shrink-0" aria-hidden="true" />
                <span className="font-bold">Location:</span>
                <span>{siteConfig.contact.operatingLocation}</span>
              </div>

              <div className="flex items-center gap-2 text-ink-black/85">
                <Clock className="w-4 h-4 text-accent-green shrink-0" aria-hidden="true" />
                <span className="font-bold">Turnaround:</span>
                <span>Response within 24–48 business hours</span>
              </div>

              <div className="flex items-center gap-2 text-ink-black/85">
                <Sparkles className="w-4 h-4 text-cyber-yellow shrink-0" aria-hidden="true" />
                <span>Discussion:</span>
                <span>Full-Stack, Systems &amp; Engineering Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Channels Panel (7 cols) */}
          <div className="lg:col-span-7 flex flex-col border-3 border-ink-black bg-surface-white shadow-brutal-lg overflow-hidden">
            {/* Header Bar */}
            <div className="flex items-center justify-between border-b-2 border-ink-black/15 bg-canvas-cream px-5 py-3 select-none">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-black">
                DIRECT INQUIRY CHANNELS
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green inline-block border border-ink-black" aria-hidden="true" />
            </div>

            {/* Panel Body Content */}
            <div className="p-6 sm:p-8 space-y-8 flex-1 flex flex-col justify-between">
              {/* Channel 1: Primary Email Channel */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-ink-black">
                    <Mail className="w-4 h-4 text-cobalt-blue" aria-hidden="true" />
                    <span>01. PRIMARY DIRECT EMAIL</span>
                  </div>
                  {emailVerified ? (
                    <Badge variant="green" size="sm">
                      VERIFIED ACTIVE
                    </Badge>
                  ) : (
                    <Badge variant="yellow" size="sm">
                      PENDING VERIFICATION
                    </Badge>
                  )}
                </div>

                {emailVerified ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-canvas-cream border-2 border-ink-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-brutal-sm">
                      <span className="font-mono text-sm sm:text-base font-bold text-ink-black break-all">
                        {siteConfig.contact.email.address}
                      </span>
                      <Button
                        href={`mailto:${siteConfig.contact.email.address}?subject=Engineering%20Inquiry`}
                        variant="outline"
                        size="sm"
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                        className="hover:bg-cyber-yellow"
                        data-avatar-trigger="channel-email"
                        aria-label={`Send email to ${siteConfig.contact.email.address}`}
                      >
                        Email Me
                      </Button>
                    </div>

                    <CopyEmailButton email={siteConfig.contact.email.address} />
                  </div>
                ) : (
                  <div className="p-4 bg-canvas-cream border-2 border-dashed border-ink-black space-y-3">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink-black">
                      <ShieldAlert className="w-4 h-4 text-pop-red shrink-0" aria-hidden="true" />
                      <span>OFFICIAL INBOX PENDING VERIFICATION</span>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                      {siteConfig.contact.email.unavailableNotice}
                    </p>
                    <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <span className="font-mono text-xs font-bold text-ink-black bg-surface-white border border-ink-black px-2.5 py-1">
                        {siteConfig.contact.email.address}
                      </span>
                      <CopyEmailButton email={siteConfig.contact.email.address} />
                    </div>
                  </div>
                )}
              </div>

              {/* Channel 2: Official Résumé PDF */}
              <div className="space-y-4 pt-6 border-t-2 border-ink-black/15">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-ink-black">
                    <FileText className="w-4 h-4 text-pop-pink" aria-hidden="true" />
                    <span>02. CURRICULUM VITAE / RÉSUMÉ</span>
                  </div>
                  {resumeAvailable ? (
                    <Badge variant="green" size="sm">
                      PDF READY
                    </Badge>
                  ) : (
                    <Badge variant="outline" size="sm">
                      PENDING EXPORT
                    </Badge>
                  )}
                </div>

                <div className="p-4 bg-surface-white border-2 border-ink-black shadow-brutal-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-display font-bold text-base uppercase text-ink-black block">
                      Kalendra Yadav — Engineering Résumé
                    </span>
                    <span className="font-mono text-xs text-text-muted block">
                      Format: PDF · Verified Production Document
                    </span>
                  </div>

                  {resumeAvailable ? (
                    <Button
                      href={siteConfig.resume.url}
                      external
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      icon={<Download className="w-4 h-4" />}
                      data-avatar-trigger="channel-resume"
                      className="w-full sm:w-auto text-center"
                    >
                      Download PDF
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<FileText className="w-4 h-4" />}
                      data-avatar-trigger="channel-resume"
                      onClick={() => setResumeModalOpen(true)}
                      className="w-full sm:w-auto text-center"
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
                  <span>03. PROFESSIONAL NETWORKS</span>
                </div>

                {professionalProfiles.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {professionalProfiles.map((profile) => (
                      <Button
                        key={profile.platform}
                        href={profile.url}
                        variant="secondary"
                        size="sm"
                        external
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={getProfileIcon(profile.platform)}
                        data-avatar-trigger={getChannelTrigger(profile.platform)}
                        aria-label={`Open ${profile.label} profile in a new tab`}
                      >
                        {profile.label} Profile
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="p-3.5 bg-canvas-cream border border-ink-black text-xs font-mono text-text-muted flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span>
                      Official GitHub &amp; LinkedIn profiles will activate upon release
                    </span>
                    <span className="font-bold text-ink-black text-[11px] bg-surface-white border border-ink-black/20 px-2 py-0.5 inline-block self-start sm:self-auto">
                      Pending Public Release
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* C. CLOSING NAVIGATION: PROMINENT PATHS BACK */}
        <div className="border-3 border-ink-black bg-surface-white p-6 sm:p-8 shadow-brutal-md space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
              EXPLORE MORE OF THE PORTFOLIO
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
              Continue Exploring Systems &amp; Code
            </h3>
            <p className="font-body text-sm text-text-muted max-w-2xl leading-relaxed">
              Browse technical case studies, view the categorized skills matrix, or return to the editorial homepage.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              href="/projects"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              data-avatar-trigger="explore-projects"
              className="w-full sm:w-auto text-center"
            >
              BROWSE SELECTED PROJECTS
            </Button>
            <Button
              href="/skills"
              variant="secondary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              data-avatar-trigger="view-skills"
              className="w-full sm:w-auto text-center hover:bg-canvas-cream"
            >
              VIEW SKILLS MATRIX
            </Button>
            <Button
              href="/"
              variant="outline"
              size="md"
              icon={<Home className="w-4 h-4" />}
              data-avatar-trigger="action-return-home"
              className="w-full sm:w-auto text-center hover:bg-canvas-cream"
            >
              RETURN HOME
            </Button>
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
