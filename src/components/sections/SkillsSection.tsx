import React from "react";
import { skillsData, SkillGroup } from "@/data/skills";
import { Button } from "@/components/ui";
import {
  Code,
  Layout,
  Server,
  Database,
  Terminal,
  Cpu,
  BookOpen,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "Frontend Development": <Layout className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "Backend & Systems": <Server className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "Databases & Storage": <Database className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "DevOps & Tools": <Terminal className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "AI & Computer Vision": <Cpu className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "CS Fundamentals": <BookOpen className="w-4 h-4 text-ink-black" aria-hidden="true" />,
};

const accentHeaderBg: Record<string, string> = {
  yellow: "bg-cyber-yellow",
  cyan: "bg-cyber-cyan",
  pink: "bg-pop-pink",
  white: "bg-canvas-cream",
  blue: "bg-cobalt-blue",
};

export interface SkillsSectionProps {
  headingAs?: "h1" | "h2";
}

export function SkillsSection({ headingAs = "h2" }: SkillsSectionProps = {}) {
  const HeadingComponent = headingAs;

  // Curated Primary Production Stack for instant recruiter scanability
  const coreProductionPillars = [
    { name: "TypeScript", role: "Primary Language", note: "Strict type safety across frontend & backend" },
    { name: "Next.js & React 19", role: "Frontend Architecture", note: "Server Components & responsive UI" },
    { name: "Node.js & Express", role: "Backend Services", note: "Asynchronous APIs & WebSocket streaming" },
    { name: "PostgreSQL & SQL", role: "Relational Data", note: "Normalized schemas & audit triggers" },
    { name: "Tailwind CSS", role: "Design Systems", note: "Neo-brutalist tokens & accessible layout" },
    { name: "Git & Linux", role: "Development Ops", note: "Atomic PRs, bash scripts & environments" },
  ];

  return (
    <section
      id="skills"
      tabIndex={-1}
      aria-labelledby="skills-heading"
      className="scroll-mt-24 w-full relative bg-canvas-cream border-b-4 border-ink-black py-14 sm:py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* A. EDITORIAL PAGE HEADER */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-black bg-cyber-yellow px-2.5 py-1 border-2 border-ink-black shadow-brutal-sm">
              ENGINEERING REPERTOIRE
            </span>
            <span className="font-mono text-xs text-text-muted font-bold tracking-wider uppercase">
              · 7 CATEGORIES
            </span>
          </div>

          <HeadingComponent
            id="skills-heading"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-ink-black leading-[1.05]"
          >
            Technical Skills Matrix.
          </HeadingComponent>

          <p className="font-body text-base sm:text-lg md:text-xl text-ink-black/85 leading-relaxed">
            A structured directory of programming languages, frameworks, system architectures, and engineering disciplines grounded in demonstrated project implementations.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-accent-green" aria-hidden="true" />
              <span>Grounded in Working Repositories</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyber-yellow" aria-hidden="true" />
              <span>Zero Subjective Percentage Bars</span>
            </div>
          </div>
        </div>

        {/* B. PRIMARY PRODUCTION STACK (High-Priority Recruiter Scan Strip) */}
        <div className="border-3 border-ink-black bg-surface-white p-6 sm:p-8 shadow-brutal-md space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b-2 border-ink-black/15 pb-3">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                CORE PRODUCTION FOUNDATION
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
                Primary Engineering Stack
              </h3>
            </div>
            <span className="font-mono text-xs font-bold text-cobalt-blue">
              Daily Active Tooling
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreProductionPillars.map((pillar) => (
              <div
                key={pillar.name}
                className="p-4 bg-canvas-cream border-2 border-ink-black shadow-brutal-sm space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-base uppercase text-ink-black">
                    {pillar.name}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase bg-surface-white border border-ink-black px-1.5 py-0.5 text-text-muted">
                    {pillar.role}
                  </span>
                </div>
                <p className="font-body text-xs text-ink-black/80 leading-snug">
                  {pillar.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* C. FULL CATEGORIZED SKILLS MATRIX */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b-3 border-ink-black pb-3">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                DETAILED CATEGORICAL INVENTORY
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
                Comprehensive Competencies
              </h3>
            </div>
            <span className="font-mono text-xs font-bold text-text-muted">
              {`${skillsData.length} Skill Disciplines`}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {skillsData.map((group: SkillGroup) => (
              <article
                key={group.category}
                className="flex flex-col justify-between border-3 border-ink-black bg-surface-white shadow-brutal-md transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg motion-reduce:hover:transform-none"
              >
                {/* Accent Top Ribbon */}
                <div
                  className={`h-2.5 w-full border-b-2 border-ink-black ${
                    accentHeaderBg[group.accentVariant] || "bg-cyber-yellow"
                  }`}
                  aria-hidden="true"
                />

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span
                          className="p-1.5 bg-canvas-cream border-2 border-ink-black shadow-brutal-sm"
                          aria-hidden="true"
                        >
                          {categoryIcons[group.category] || <Layers className="w-4 h-4 text-ink-black" />}
                        </span>
                        <h4 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-ink-black">
                          {group.category}
                        </h4>
                      </div>

                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-muted bg-canvas-cream border border-ink-black px-1.5 py-0.5">
                        {group.badgeLabel}
                      </span>
                    </div>

                    <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Scannable Skills List with Contextual Highlights */}
                  <div className="pt-4 border-t-2 border-ink-black/10 space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`group/skill relative inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 border transition-colors ${
                            skill.status === "core"
                              ? "bg-canvas-cream border-ink-black font-bold text-ink-black hover:bg-cyber-yellow"
                              : "bg-surface-white border-dashed border-ink-black/60 text-text-muted font-medium hover:text-ink-black"
                          }`}
                        >
                          <span>{skill.name}</span>
                          {skill.status === "exploring" && (
                            <span className="text-[10px] text-text-muted font-normal select-none">
                              (active study)
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* D. RESTRAINED LEGEND & VERIFICATION STANDARD */}
        <div className="p-4 border-2 border-ink-black bg-surface-white shadow-brutal-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-text-muted">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-canvas-cream border border-ink-black inline-block shadow-brutal-sm" />
              <span className="font-bold text-ink-black">Core Production Skill</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-surface-white border border-dashed border-ink-black/60 inline-block" />
              <span>Active Exploration &amp; Study</span>
            </span>
          </div>
          <span className="text-text-muted italic">
            Zero subjective percentage bars or inflated claims
          </span>
        </div>

        {/* E. CLOSING NAVIGATION */}
        <div className="border-3 border-ink-black bg-surface-white p-6 sm:p-8 shadow-brutal-md space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
              PRACTICAL APPLICATION
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
              See These Capabilities in Production Architectures
            </h3>
            <p className="font-body text-sm text-text-muted max-w-2xl leading-relaxed">
              Explore how these languages, databases, and frameworks are structured into working technical systems and prototypes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Button
              href="/projects"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="w-full sm:w-auto text-center"
            >
              EXPLORE CASE STUDIES
            </Button>
            <Button
              href="/experience"
              variant="secondary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="w-full sm:w-auto text-center hover:bg-canvas-cream"
            >
              VIEW ENGINEERING TIMELINE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
