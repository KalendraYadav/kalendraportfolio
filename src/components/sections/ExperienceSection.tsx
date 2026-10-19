import React from "react";
import { experienceTimelineData, TimelineEntry } from "@/data/experience";
import { Button } from "@/components/ui";
import {
  GraduationCap,
  GitBranch,
  Layers,
  CheckCircle2,
  Clock,
  ArrowRight,
  Mail,
  ShieldCheck,
  Compass,
} from "lucide-react";

const categoryIcon: Record<string, React.ReactNode> = {
  milestone: <GitBranch className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  education: <GraduationCap className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  experience: <Layers className="w-4 h-4 text-ink-black" aria-hidden="true" />,
};

const accentNodeBg: Record<string, string> = {
  yellow: "bg-cyber-yellow",
  cyan: "bg-cyber-cyan",
  pink: "bg-pop-pink",
  blue: "bg-cobalt-blue text-surface-white",
  white: "bg-surface-white",
};

export interface ExperienceSectionProps {
  headingAs?: "h1" | "h2";
}

export function ExperienceSection({ headingAs = "h2" }: ExperienceSectionProps = {}) {
  const HeadingComponent = headingAs;

  return (
    <section
      id="experience"
      tabIndex={-1}
      aria-labelledby="experience-heading"
      className="scroll-mt-24 w-full relative bg-canvas-cream border-b-4 border-ink-black py-14 sm:py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* A. EDITORIAL PAGE HEADER */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-black bg-cyber-yellow px-2.5 py-1 border-2 border-ink-black shadow-brutal-sm">
              CHRONOLOGY
            </span>
            <span className="font-mono text-xs text-text-muted font-bold tracking-wider uppercase">
              · MILESTONES &amp; EDUCATION
            </span>
          </div>

          <HeadingComponent
            id="experience-heading"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-ink-black leading-[1.05]"
          >
            Experience &amp; Engineering Timeline.
          </HeadingComponent>

          <p className="font-body text-base sm:text-lg md:text-xl text-ink-black/85 leading-relaxed">
            Chronological milestones, architectural explorations, and academic foundations grounded in real engineering artifacts and demonstrable code.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-green" aria-hidden="true" />
              <span>Documented Milestones &amp; Codebases</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-cobalt-blue" aria-hidden="true" />
              <span>Undergraduate CS Curriculum Foundations</span>
            </div>
          </div>
        </div>

        {/* B. TIMELINE SPINE WITH REFINED NEO-BRUTALIST CARDS */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-4 border-ink-black ml-3 sm:ml-6 md:ml-8 space-y-12 sm:space-y-14">
          {experienceTimelineData.map((item: TimelineEntry) => (
            <article key={item.id} className="relative group">
              {/* Timeline Geometric Node Marker */}
              <div
                className={`absolute -left-[38px] sm:-left-[58px] md:-left-[66px] top-2 w-7 h-7 sm:w-8 sm:h-8 border-3 border-ink-black shadow-brutal-sm flex items-center justify-center select-none ${
                  accentNodeBg[item.accentVariant] || "bg-cyber-yellow"
                }`}
                aria-hidden="true"
              >
                <div className="w-2 h-2 bg-ink-black rounded-none" />
              </div>

              {/* Timeline Entry Card */}
              <div className="border-3 border-ink-black bg-surface-white shadow-brutal-md transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg motion-reduce:hover:transform-none">
                {/* Entry Header Ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink-black/15 bg-canvas-cream px-4 sm:px-6 py-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-surface-white border border-ink-black shadow-brutal-sm" aria-hidden="true">
                      {categoryIcon[item.category] || <Layers className="w-3.5 h-3.5 text-ink-black" />}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-black">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div>
                    {item.isOngoing ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-ink-black bg-cyber-yellow border border-ink-black px-2.5 py-0.5 shadow-brutal-sm">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        <span>{item.periodOrStatus}</span>
                      </span>
                    ) : (
                      <span className="font-mono text-xs font-bold text-text-muted bg-surface-white border border-ink-black/30 px-2 py-0.5">
                        {item.periodOrStatus}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-7 md:p-8 space-y-5">
                  <div className="space-y-1.5">
                    <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-ink-black leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm font-bold text-cobalt-blue">
                      {item.organizationOrContext}
                    </p>
                  </div>

                  <p className="font-body text-sm sm:text-base text-ink-black/85 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bulleted Deliverables */}
                  {item.highlights.length > 0 && (
                    <div className="space-y-2.5 pt-4 border-t-2 border-ink-black/10">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted block">
                        Demonstrated Work &amp; Deliverables:
                      </span>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-ink-black/90 leading-relaxed"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-accent-green shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Associated Technologies Tags */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="pt-4 border-t-2 border-ink-black/10 flex flex-wrap gap-1.5 items-center">
                      <span className="font-mono text-xs font-bold text-text-muted mr-1">
                        Stack:
                      </span>
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] font-bold uppercase tracking-wider bg-canvas-cream border border-ink-black px-2 py-0.5 text-ink-black shadow-brutal-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* C. TIMELINE INTEGRITY NOTE */}
        <div className="p-4 border-2 border-ink-black bg-surface-white shadow-brutal-sm flex items-center justify-between gap-4 font-mono text-xs text-text-muted">
          <span>
            Every milestone represents documented engineering work, production prototype architectures, or formal coursework.
          </span>
        </div>

        {/* D. CLOSING NAVIGATION */}
        <div className="border-3 border-ink-black bg-surface-white p-6 sm:p-8 shadow-brutal-md space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
              NEXT STEPS // CONNECT
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
              Want to Review Technical Case Studies or Discuss Opportunities?
            </h3>
            <p className="font-body text-sm text-text-muted max-w-2xl leading-relaxed">
              Explore in-depth technical challenges and solutions in the projects showcase, or reach out directly for engineering roles and collaboration.
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
              EXPLORE PROJECT CASE STUDIES
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="md"
              icon={<Mail className="w-4 h-4" />}
              className="w-full sm:w-auto text-center hover:bg-canvas-cream"
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
