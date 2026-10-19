"use client";

import React, { useState, useRef } from "react";
import { projectsData, Project } from "@/data/projects";
import { Button, Badge } from "@/components/ui";
import { CaseStudyModal } from "./CaseStudyModal";
import {
  ArrowRight,
  ExternalLink,
  GitBranch,
  Cpu,
  Activity,
} from "lucide-react";

export function FeaturedProjectsTeaser() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);

  const handleOpenCaseStudy = (
    project: Project,
    event?: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (event) {
      activeTriggerRef.current = event.currentTarget;
    }
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setIsModalOpen(false);
  };

  // Select strictly the two documented flagship projects
  const teaserProjects = projectsData.filter(
    (p) => p.id === "biotrace" || p.id === "netravaha"
  );

  const projectIcons: Record<string, React.ReactNode> = {
    biotrace: <Activity className="w-4 h-4 text-ink-black" aria-hidden="true" />,
    netravaha: <Cpu className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  };

  const accentBadges: Record<string, "cyan" | "yellow"> = {
    biotrace: "cyan",
    netravaha: "yellow",
  };

  return (
    <section
      id="featured-work"
      tabIndex={-1}
      aria-labelledby="featured-work-heading"
      className="w-full relative bg-surface-white border-b-4 border-ink-black py-16 sm:py-20 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-3 border-ink-black">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-black bg-cyber-yellow px-2.5 py-1 border-2 border-ink-black shadow-brutal-sm">
                PORTFOLIO PREVIEW
              </span>
            </div>

            <h2
              id="featured-work-heading"
              className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-ink-black leading-[1.05]"
            >
              PROJECTS I&apos;VE BUILT.
            </h2>

            <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
              Real projects, working prototypes, and the engineering behind them.
              Explore what each project does, how it works, and the problems it
              aims to solve.
            </p>
          </div>

          {/* Direct Link to all projects */}
          <div className="shrink-0">
            <Button
              href="/projects"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="w-full md:w-auto hover:bg-cyber-yellow"
            >
              VIEW ALL PROJECTS (5)
            </Button>
          </div>
        </div>

        {/* Two Featured Flagship Previews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {teaserProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between border-3 border-ink-black bg-canvas-cream shadow-brutal-md transition-all duration-150 hover:-translate-y-1 hover:shadow-brutal-lg motion-reduce:hover:transform-none"
            >
              {/* Top Accent Ribbon */}
              <div
                className={`w-full h-2.5 border-b-2 border-ink-black ${
                  project.accentVariant === "cyan" ? "bg-cyber-cyan" : "bg-cyber-yellow"
                }`}
                aria-hidden="true"
              />

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                {/* Meta Row: Category Badge + Status */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 border-2 border-ink-black bg-surface-white shadow-brutal-sm" aria-hidden="true">
                      {projectIcons[project.id]}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-black">
                      {project.category}
                    </span>
                  </div>

                  <Badge variant={accentBadges[project.id] || "yellow"} size="sm">
                    {project.statusLabel}
                  </Badge>
                </div>

                {/* Project Title & Tagline */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-ink-black group-hover:text-cobalt-blue transition-colors">
                      {project.name}
                    </h3>
                    <span className="font-mono text-xs text-text-muted font-bold">
                      {project.role}
                    </span>
                  </div>
                  <p className="font-body text-sm sm:text-base font-medium text-ink-black/85 leading-snug">
                    {project.tagline}
                  </p>
                </div>

                {/* Brief Problem Statement */}
                <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                  {project.problemStatement}
                </p>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] font-bold bg-surface-white text-ink-black border border-ink-black px-2 py-0.5 shadow-brutal-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Clear distinct actions */}
              <div className="pt-6 mt-6 border-t-2 border-ink-black/15 flex flex-wrap items-center gap-2.5">
                {/* Action A: Live Demo (if available) */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 font-display font-bold text-xs uppercase tracking-wider border-2 border-ink-black px-3.5 py-2.5 min-h-[44px] bg-cyber-cyan text-ink-black shadow-brutal-sm hover:shadow-brutal-md hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black"
                    aria-label={`Open live deployment for ${project.name} in a new tab`}
                    title="Open live deployment in a new tab"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                )}

                {/* Action B: Source Code (if available) */}
                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 font-display font-bold text-xs uppercase tracking-wider border-2 border-ink-black px-3.5 py-2.5 min-h-[44px] bg-surface-white text-ink-black shadow-brutal-sm hover:bg-cyber-yellow hover:shadow-brutal-md hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black"
                    aria-label={`Open source code repository for ${project.name} in a new tab`}
                    title="Open source code repository in a new tab"
                  >
                    <span>SOURCE CODE</span>
                    <GitBranch className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                )}

                {/* Action C: Case Study Modal Trigger */}
                <button
                  type="button"
                  onClick={(e) => handleOpenCaseStudy(project, e)}
                  aria-haspopup="dialog"
                  aria-label={`View technical case study for ${project.name}`}
                  className="inline-flex items-center justify-center gap-1.5 font-display font-bold text-xs uppercase tracking-wider border-2 border-ink-black px-3.5 py-2.5 min-h-[44px] bg-cyber-yellow text-ink-black shadow-brutal-sm hover:shadow-brutal-md hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black"
                >
                  <span>CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
          ))}
        </div>

        {/* Mobile Full Action CTA */}
        <div className="pt-2 flex justify-center md:hidden">
          <Button
            href="/projects"
            variant="primary"
            fullWidth
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            VIEW ALL PROJECTS (5)
          </Button>
        </div>
      </div>

      {/* Accessible Technical Case Study Modal on Homepage */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseCaseStudy}
        triggerRef={activeTriggerRef}
      />
    </section>
  );
}
