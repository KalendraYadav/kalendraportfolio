"use client";

import React, { useState, useRef } from "react";
import { projectsData, Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";

export function ProjectsSection() {
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

  return (
    <section
      id="projects"
      tabIndex={-1}
      aria-labelledby="projects-heading"
      className="scroll-mt-24 w-full relative bg-canvas-cream border-b-4 border-ink-black py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <SectionHeading
            number="// 01"
            title="Featured Projects & Systems"
            as="h2"
            description="Production prototypes, system architectures, and technical case studies engineered with verifiable code and architectural integrity."
          />
        </div>

        {/* Responsive Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectCaseStudy={handleOpenCaseStudy}
            />
          ))}
        </div>

        {/* Editorial Subtext / Policy Note */}
        <div className="pt-4 border-t-2 border-ink-black/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-text-muted">
          <span>
            {"// STRICT CONTENT POLICY: Verified technical case studies only. No unconfirmed live links."}
          </span>
          <span className="text-ink-black font-bold">
            {`TOTAL PROJECTS: ${projectsData.length}`}
          </span>
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
