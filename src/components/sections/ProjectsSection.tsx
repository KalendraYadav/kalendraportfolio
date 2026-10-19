"use client";

import React, { useState, useRef } from "react";
import { projectsData, Project } from "@/data/projects";
import { Button } from "@/components/ui";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { Mail, ArrowRight, Layers, Sparkles } from "lucide-react";

export interface ProjectsSectionProps {
  headingAs?: "h1" | "h2";
}

export function ProjectsSection({ headingAs = "h2" }: ProjectsSectionProps = {}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);

  const handleOpenCaseStudy = (
    project: Project,
    triggerRef: React.RefObject<HTMLButtonElement | null>
  ) => {
    activeTriggerRef.current = triggerRef.current;
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setIsModalOpen(false);
  };

  // Strictly select documented flagship projects (BioTrace and NetraVaha)
  const featuredProjects = projectsData.filter((p) => p.featured);
  // Remaining documented projects (Nexa, VyomCare, Automate.com)
  const supportingProjects = projectsData.filter((p) => !p.featured);

  const HeadingComponent = headingAs;

  return (
    <section
      id="projects"
      tabIndex={-1}
      aria-labelledby="projects-heading"
      className="scroll-mt-24 w-full relative bg-canvas-cream border-b-4 border-ink-black py-14 sm:py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* A. PAGE INTRODUCTION */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-black bg-cyber-yellow px-2.5 py-1 border-2 border-ink-black shadow-brutal-sm">
              ENGINEERING BODY OF WORK
            </span>
            <span className="font-mono text-xs text-text-muted font-bold tracking-wider uppercase">
              · 5 DOCUMENTED SYSTEMS
            </span>
          </div>

          <HeadingComponent
            id="projects-heading"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-ink-black leading-[1.05]"
          >
            Selected Projects.
          </HeadingComponent>

          <p className="font-body text-base sm:text-lg md:text-xl text-ink-black/85 leading-relaxed">
            A curated selection of software systems, production prototypes, and engineering experiments built with verifiable code and architectural integrity.
          </p>

          {/* Quick Context Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cobalt-blue" aria-hidden="true" />
              <span>Full-Stack &amp; Systems Architecture</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyber-yellow" aria-hidden="true" />
              <span>Honest Empirical Documentation</span>
            </div>
          </div>
        </div>

        {/* B. FEATURED FLAGSHIP PROJECTS (Up to two) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b-3 border-ink-black pb-3">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                01 // FLAGSHIP ARCHITECTURES
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
                Featured Systems
              </h3>
            </div>
            <span className="font-mono text-xs font-bold text-text-muted">
              2 Core Domain Systems
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured
                onSelectCaseStudy={handleOpenCaseStudy}
              />
            ))}
          </div>
        </div>

        {/* C. REMAINING PROJECTS (3 Projects in a balanced 3-column layout) */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b-3 border-ink-black pb-3">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                02 // SYSTEMS &amp; PROTOTYPES
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
                Platforms, Tools &amp; Engines
              </h3>
            </div>
            <span className="font-mono text-xs font-bold text-text-muted">
              3 Production &amp; Tooling Builds
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {supportingProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={false}
                onSelectCaseStudy={handleOpenCaseStudy}
              />
            ))}
          </div>
        </div>

        {/* D. CLOSING NAVIGATION */}
        <div className="pt-6">
          <div className="border-3 border-ink-black bg-surface-white p-6 sm:p-8 md:p-10 shadow-brutal-md space-y-5">
            <div className="space-y-2">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                NEXT STEPS // CONNECT
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-ink-black">
                Interested in Discussing Systems Architecture?
              </h3>
              <p className="font-body text-sm sm:text-base text-ink-black/80 max-w-2xl leading-relaxed">
                Whether you want to discuss full-stack software engineering, explore the technical decisions behind these case studies, or consider prospective engineering roles, I&apos;m glad to talk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={<Mail className="w-4 h-4" />}
                className="w-full sm:w-auto text-center"
              >
                GET IN TOUCH
              </Button>
              <Button
                href="/experience"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-center hover:bg-canvas-cream"
              >
                VIEW EXPERIENCE TIMELINE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Technical Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseCaseStudy}
        triggerRef={activeTriggerRef}
      />
    </section>
  );
}
