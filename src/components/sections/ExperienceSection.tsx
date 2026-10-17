import React from "react";
import { experienceTimelineData, TimelineEntry } from "@/data/experience";
import { SectionHeading, Badge } from "@/components/ui";
import { GraduationCap, GitBranch, Layers, CheckCircle2, Clock } from "lucide-react";

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

export function ExperienceSection() {
  return (
    <section
      id="experience"
      tabIndex={-1}
      aria-labelledby="experience-heading"
      className="scroll-mt-24 w-full relative bg-surface-white border-b-4 border-ink-black py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <SectionHeading
            number="// 03"
            title="Experience & Engineering Timeline"
            as="h2"
            description="Chronological milestones, architectural explorations, and academic foundations grounded in real engineering artifacts and demonstrable code."
          />
        </div>

        {/* Timeline Container with Solid Spine */}
        <div className="relative pl-6 sm:pl-10 border-l-4 border-ink-black ml-2 sm:ml-6 space-y-10 sm:space-y-12">
          {experienceTimelineData.map((item: TimelineEntry) => (
            <div key={item.id} className="relative group">
              {/* Timeline Geometric Node Marker */}
              <div
                className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 border-3 border-ink-black shadow-brutal-sm flex items-center justify-center ${
                  accentNodeBg[item.accentVariant] || "bg-cyber-yellow"
                }`}
                aria-hidden="true"
              >
                <div className="w-2 h-2 bg-ink-black rounded-none" />
              </div>

              {/* Timeline Card Entry */}
              <div className="border-3 border-ink-black bg-canvas-cream shadow-brutal-md transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg">
                {/* Entry Window Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-3 border-ink-black bg-ink-black text-surface-white px-4 py-2.5 select-none">
                  <div className="flex items-center gap-2">
                    <span className="p-1 bg-surface-white border border-ink-black">
                      {categoryIcon[item.category] || <Layers className="w-3.5 h-3.5 text-ink-black" />}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-surface-white">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.isOngoing ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-cyber-yellow">
                        <Clock className="w-3.5 h-3.5 animate-pulse" aria-hidden="true" />
                        <span>{item.periodOrStatus}</span>
                      </span>
                    ) : (
                      <span className="font-mono text-xs font-medium text-surface-white/80">
                        {item.periodOrStatus}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-7 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm font-bold text-cobalt-blue">
                      {item.organizationOrContext}
                    </p>
                  </div>

                  <p className="font-body text-sm sm:text-base text-ink-black/90 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bulleted List */}
                  {item.highlights.length > 0 && (
                    <div className="space-y-2 pt-2 border-t-2 border-ink-black/10">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                        {"// VERIFIED IMPACT & ARTIFACTS:"}
                      </span>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-ink-black/85">
                            <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Tags */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="pt-3 border-t-2 border-ink-black/10 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] font-bold uppercase tracking-wider bg-surface-white border border-ink-black px-2 py-0.5 text-ink-black"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Verification Policy Note */}
        <div className="p-4 bg-canvas-cream border-2 border-dashed border-ink-black font-mono text-xs text-text-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>
            {"// VERIFICATION POLICY: Formal employment tenure and official graduation records will be confirmed upon final certification."}
          </span>
          <Badge variant="outline" size="sm">
            DOCUMENTED MILESTONES ONLY
          </Badge>
        </div>
      </div>
    </section>
  );
}
