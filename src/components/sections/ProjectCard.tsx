"use client";

import React, { useRef } from "react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui";
import {
  ArrowUpRight,
  GitBranch,
  ExternalLink,
  Code2,
  Activity,
  Cpu,
  Layers,
  Globe,
  Terminal,
} from "lucide-react";

export interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onSelectCaseStudy: (
    project: Project,
    triggerRef: React.RefObject<HTMLButtonElement | null>
  ) => void;
  className?: string;
}

const statusBadgeVariant: Record<string, "yellow" | "cyan" | "pink" | "green"> = {
  CASE_STUDY: "yellow",
  PROTOTYPE: "cyan",
  IN_DEVELOPMENT: "pink",
  VERIFIED_LIVE: "green",
};

const accentHeaderBg: Record<string, string> = {
  cyan: "bg-cyber-cyan",
  yellow: "bg-cyber-yellow",
  pink: "bg-pop-pink",
  white: "bg-canvas-cream",
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Biomedical Waste Tracking & Compliance": <Activity className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "AI-Powered CCTV Intelligence": <Cpu className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "Waste Tracking & Compliance": <Activity className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "Healthcare & IoT": <Activity className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "Computer Vision & AI": <Cpu className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "Web Platform & Tooling": <Layers className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "Telemedicine Systems": <Globe className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "Workflow Automation": <Terminal className="w-4 h-4 text-ink-black" aria-hidden="true" />,
};

export function ProjectCard({
  project,
  featured = false,
  onSelectCaseStudy,
  className = "",
}: ProjectCardProps) {
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const maxVisibleTech = featured ? 5 : 4;

  return (
    <article
      className={`group relative flex flex-col justify-between border-3 border-ink-black bg-surface-white transition-all duration-150 motion-reduce:hover:transform-none ${
        featured
          ? "shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-xl"
          : "shadow-brutal-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg"
      } ${className}`}
    >
      {/* Top Accent Ribbon */}
      <div
        className={`w-full border-b-2 border-ink-black ${
          featured ? "h-3" : "h-2"
        } ${accentHeaderBg[project.accentVariant] || "bg-cyber-yellow"}`}
        aria-hidden="true"
      />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col justify-between space-y-5 ${
          featured ? "p-6 sm:p-8" : "p-5 sm:p-6"
        }`}
      >
        <div className="space-y-4">
          {/* Header Row: Category Badge + Status Badge */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span
                className="p-1 border border-ink-black bg-canvas-cream shadow-brutal-sm"
                aria-hidden="true"
              >
                {categoryIcons[project.category] || (
                  <Code2 className="w-3.5 h-3.5 text-ink-black" />
                )}
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                {project.category}
              </span>
            </div>

            <Badge variant={statusBadgeVariant[project.status] || "yellow"} size="sm">
              {project.statusLabel}
            </Badge>
          </div>

          {/* Project Title */}
          <h3
            className={`font-display font-black uppercase tracking-tight text-ink-black leading-snug group-hover:text-cobalt-blue transition-colors ${
              featured
                ? "text-2xl sm:text-3xl lg:text-4xl"
                : "text-xl sm:text-2xl"
            }`}
          >
            {project.name}
          </h3>

          {/* Factual Tagline */}
          <p
            className={`font-body text-ink-black/85 leading-relaxed ${
              featured ? "text-base sm:text-lg font-medium" : "text-sm sm:text-base"
            }`}
          >
            {project.tagline}
          </p>

          {/* Featured Architecture Objective Callout */}
          {featured && (
            <div className="p-3.5 sm:p-4 bg-canvas-cream border-2 border-ink-black/25 space-y-1 shadow-brutal-sm">
              <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-text-muted">
                Architecture Focus
              </div>
              <p className="font-body text-xs sm:text-sm text-ink-black/90 leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>
          )}

          {/* Concise Role Line */}
          <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted pt-1">
            <Code2 className="w-3.5 h-3.5 shrink-0 text-cobalt-blue" aria-hidden="true" />
            <span className="font-bold text-ink-black">Role:</span>
            <span>{project.role}</span>
          </div>
        </div>

        {/* Bottom Technology Stack & Actions */}
        <div className="space-y-4 pt-4 border-t-2 border-ink-black/15">
          {/* Curated Technologies */}
          <div className="flex flex-wrap gap-1.5 items-center">
            {project.technologies.slice(0, maxVisibleTech).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] font-bold uppercase tracking-wider bg-canvas-cream border border-ink-black px-2 py-0.5 text-ink-black shadow-brutal-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > maxVisibleTech && (
              <span className="font-mono text-[11px] font-bold text-text-muted self-center px-1 select-none">
                +{project.technologies.length - maxVisibleTech} more
              </span>
            )}
          </div>

          {/* Actions Row: Clear labeled actions for Case Study, Live Demo, and Source Code */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              ref={triggerButtonRef}
              type="button"
              onClick={() => onSelectCaseStudy(project, triggerButtonRef)}
              aria-haspopup="dialog"
              aria-label={`View technical case study for ${project.name}`}
              className={`inline-flex items-center justify-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-ink-black px-4 py-2.5 min-h-[44px] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black active:translate-x-0.5 active:translate-y-0.5 ${
                featured
                  ? "bg-cyber-yellow text-ink-black shadow-brutal-sm hover:shadow-brutal-md hover:-translate-x-0.5 hover:-translate-y-0.5"
                  : "bg-surface-white text-ink-black hover:bg-cyber-yellow shadow-brutal-sm hover:shadow-brutal-md hover:-translate-x-0.5 hover:-translate-y-0.5"
              } flex-1 sm:flex-initial text-center`}
            >
              <span>{featured ? "Technical Case Study" : "View Case Study"}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </button>

            {/* Verified External Links (Strictly rendered only when confirmed) */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 font-display font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-ink-black px-3.5 py-2.5 min-h-[44px] bg-cyber-cyan text-ink-black shadow-brutal-sm hover:shadow-brutal-md hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black"
                aria-label={`Open live deployment for ${project.name} in a new tab`}
                title="Open live deployment in a new tab"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            )}

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 font-display font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-ink-black px-3.5 py-2.5 min-h-[44px] bg-surface-white text-ink-black shadow-brutal-sm hover:bg-cyber-yellow hover:shadow-brutal-md hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black"
                aria-label={`Open source code repository for ${project.name} in a new tab`}
                title="Open source code repository in a new tab"
              >
                <span>Source Code</span>
                <GitBranch className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
