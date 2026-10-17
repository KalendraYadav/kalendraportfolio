import React from "react";
import { skillsData, SkillGroup } from "@/data/skills";
import { SectionHeading, Badge } from "@/components/ui";
import { Code, Layout, Server, Database, Terminal, Cpu, BookOpen } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-4 h-4 text-cyber-yellow" aria-hidden="true" />,
  "Frontend Development": <Layout className="w-4 h-4 text-cyber-cyan" aria-hidden="true" />,
  "Backend & Systems": <Server className="w-4 h-4 text-pop-pink" aria-hidden="true" />,
  "Databases & Storage": <Database className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "DevOps & Tools": <Terminal className="w-4 h-4 text-cyber-yellow" aria-hidden="true" />,
  "AI & Computer Vision": <Cpu className="w-4 h-4 text-cobalt-blue" aria-hidden="true" />,
  "CS Fundamentals": <BookOpen className="w-4 h-4 text-ink-black" aria-hidden="true" />,
};

const accentHeaderBg: Record<string, string> = {
  yellow: "bg-cyber-yellow",
  cyan: "bg-cyber-cyan",
  pink: "bg-pop-pink",
  white: "bg-surface-white",
  blue: "bg-cobalt-blue",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      tabIndex={-1}
      aria-labelledby="skills-heading"
      className="scroll-mt-24 w-full relative bg-canvas-cream border-b-4 border-ink-black py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <SectionHeading
            number="// 02"
            title="Technical Skills Matrix"
            as="h2"
            description="Categorized engineering capabilities grounded in real project architectures, modern frontend systems, and reliable backend services. Zero arbitrary percentage bars."
          />
        </div>

        {/* Legend / Content Verification Standard */}
        <div className="flex flex-wrap items-center gap-4 p-4 bg-surface-white border-3 border-ink-black shadow-brutal-sm text-xs font-mono">
          <span className="font-bold uppercase tracking-wider text-ink-black">
            {"// CLASSIFICATION STANDARD:"}
          </span>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-green border border-ink-black" aria-hidden="true" />
            <span className="font-bold text-ink-black">CORE STACK</span>
            <span className="text-text-muted">(Architected in verified codebases)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyber-yellow border border-ink-black" aria-hidden="true" />
            <span className="font-bold text-ink-black">ACTIVE FOCUS</span>
            <span className="text-text-muted">(Deepening domain specialization)</span>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {skillsData.map((group: SkillGroup) => (
            <div
              key={group.category}
              className="flex flex-col justify-between border-3 border-ink-black bg-surface-white shadow-brutal-md transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              {/* Card Window Header */}
              <div className="flex items-center justify-between border-b-3 border-ink-black bg-ink-black text-surface-white px-4 py-2.5 select-none">
                <div className="flex items-center gap-2">
                  {categoryIcons[group.category]}
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-surface-white">
                    {group.badgeLabel}
                  </span>
                </div>
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-pop-red border border-ink-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cyber-yellow border border-ink-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-green border border-ink-black" />
                </div>
              </div>

              {/* Accent Color Strip */}
              <div
                className={`h-1.5 w-full border-b-2 border-ink-black ${accentHeaderBg[group.accentVariant] || "bg-cyber-yellow"}`}
                aria-hidden="true"
              />

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-ink-black">
                    {group.category}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skills List */}
                <div className="space-y-2.5 pt-3 border-t-2 border-ink-black/10">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item p-2.5 bg-canvas-cream border-2 border-ink-black flex flex-col gap-1 transition-colors hover:bg-surface-white"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs sm:text-sm font-bold text-ink-black">
                          {skill.name}
                        </span>
                        <Badge
                          variant={skill.status === "core" ? "green" : "yellow"}
                          size="sm"
                        >
                          {skill.status === "core" ? "CORE" : "ACTIVE"}
                        </Badge>
                      </div>
                      {skill.highlight && (
                        <span className="font-body text-[11px] text-text-muted leading-tight">
                          {skill.highlight}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
