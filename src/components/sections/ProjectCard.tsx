"use client";

import React, { useRef } from "react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui";
import { ArrowUpRight, GitBranch, ExternalLink, Code2 } from "lucide-react";

export interface ProjectCardProps {
  project: Project;
  onSelectCaseStudy: (project: Project, triggerRef: React.RefObject<HTMLButtonElement | null>) => void;
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

export function ProjectCard({
  project,
  onSelectCaseStudy,
  className = "",
}: ProjectCardProps) {
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  const isFeatured = project.featured;

  return (
    <article
      className={`group relative flex flex-col justify-between border-3 border-ink-black bg-surface-white transition-all duration-150 shadow-brutal-md hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg ${
        isFeatured ? "md:col-span-2 lg:col-span-1 border-4" : ""
      } ${className}`}
    >
      {/* Top Window Strip */}
      <div className="flex items-center justify-between border-b-3 border-ink-black bg-ink-black text-surface-white px-4 py-2 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-pop-red inline-block border border-ink-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-yellow inline-block border border-ink-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-green inline-block border border-ink-black" />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-surface-white">
            {`SPEC // ${project.id.toUpperCase()}`}
          </span>
        </div>

        <Badge variant={statusBadgeVariant[project.status] || "yellow"} size="sm">
          {project.statusLabel}
        </Badge>
      </div>

      {/* Deliberate Project Accent Color Strip */}
      <div
        className={`h-1.5 w-full border-b-2 border-ink-black ${accentHeaderBg[project.accentVariant] || "bg-cyber-yellow"}`}
        aria-hidden="true"
      />

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Category & Role */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="font-mono text-xs font-bold uppercase text-text-muted">
              {project.category}
            </span>
            {isFeatured && (
              <Badge variant="yellow" size="sm" tilt="right">
                FEATURED
              </Badge>
            )}
          </div>

          {/* Project Title */}
          <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-ink-black leading-snug">
            {project.name}
          </h3>

          {/* Factual Tagline */}
          <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
            {project.tagline}
          </p>

          {/* Role Specification */}
          <div className="pt-1 flex items-center gap-1.5 font-mono text-xs text-ink-black/80">
            <Code2 className="w-3.5 h-3.5 shrink-0 text-cobalt-blue" aria-hidden="true" />
            <span className="font-bold">Focus:</span>
            <span>{project.role}</span>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-4 pt-4 border-t-2 border-ink-black/10">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] font-bold uppercase tracking-wider bg-canvas-cream border border-ink-black px-2 py-0.5 text-ink-black"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="font-mono text-[11px] font-bold text-text-muted self-center">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center justify-between gap-3 flex-wrap">
            <button
              ref={triggerButtonRef}
              type="button"
              onClick={() => onSelectCaseStudy(project, triggerButtonRef)}
              aria-haspopup="dialog"
              className="inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-cyber-yellow text-ink-black border-2 border-ink-black px-3.5 py-2 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-md active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </button>

            {/* Verified External Links (Only displayed if verified) */}
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-ink-black bg-surface-white hover:bg-cyber-cyan transition-colors"
                  aria-label={`View live deployment for ${project.name}`}
                >
                  <ExternalLink className="w-4 h-4 text-ink-black" />
                </a>
              )}
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-ink-black bg-surface-white hover:bg-cyber-cyan transition-colors"
                  aria-label={`View GitHub repository for ${project.name}`}
                >
                  <GitBranch className="w-4 h-4 text-ink-black" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
