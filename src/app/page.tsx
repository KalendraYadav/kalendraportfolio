import React from "react";
import { Card, Badge, Button, SectionHeading, Marquee } from "@/components/ui";
import { ArrowRight, Layers, Sparkles, Clock } from "lucide-react";

export default function Home() {
  const roadmapItems = [
    {
      id: "home",
      title: "Hero & Pop-Art Portrait",
      phase: "Phase 5",
      status: "Next Planned Phase",
      desc: "Editorial introduction, high-contrast duotone pop-art portrait frame, and signature headline.",
    },
    {
      id: "projects",
      title: "Featured Projects & Case Studies",
      phase: "Phase 6",
      status: "Upcoming",
      desc: "Verified project cards with architecture breakdowns, tech stack pills, and case study dialogs.",
    },
    {
      id: "skills",
      title: "Technical Skills Matrix",
      phase: "Phase 7",
      status: "Upcoming",
      desc: "Categorized skills across Languages, Frontend, Backend, Tools, and Core CS fundamentals.",
    },
    {
      id: "experience",
      title: "Experience & Practical Exposure",
      phase: "Phase 7",
      status: "Upcoming",
      desc: "Chronological vertical timeline of verified engineering milestones and contributions.",
    },
    {
      id: "about",
      title: "About & Engineering Philosophy",
      phase: "Phase 7",
      status: "Upcoming",
      desc: "Personal developer bio, engineering values, craftsmanship standards, and approach to problem-solving.",
    },
    {
      id: "contact",
      title: "Contact & Verified Profiles",
      phase: "Phase 8",
      status: "Upcoming",
      desc: "One-click email copy action, verified social/coding profiles, and official résumé access.",
    },
  ];

  return (
    <main id="main-content" className="flex-1">
      {/* Infinite Ticker Tape */}
      <Marquee
        items={[
          "KALENDRA YADAV",
          "FULL-STACK SOFTWARE ENGINEER",
          "PHASE 4 SHELL ESTABLISHED",
          "STICKY NAVIGATION LIVE",
          "ACCESSIBLE WCAG 2.2 AA",
        ]}
        variant="dark"
      />

      {/* Target Anchor: #home */}
      <section
        id="home"
        tabIndex={-1}
        className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12"
      >
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Badge
              variant="yellow"
              tilt="left"
              icon={<Sparkles className="w-3.5 h-3.5" />}
            >
              {"PHASE 4 // GLOBAL SHELL & NAVIGATION"}
            </Badge>
          </div>

          <div className="space-y-4">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-text-muted uppercase">
              {"// PORTFOLIO ARCHITECTURE SHELL"}
            </span>
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-ink-black leading-[0.95]">
              KALENDRA YADAV
            </h1>
            <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
              Global navigation, accessible mobile menu drawer, skip-to-content mechanism, and sticky application shell have been successfully established.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/design-system"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Design System Preview
            </Button>
            <Button
              href="#projects"
              variant="secondary"
              size="lg"
            >
              View Section Roadmap
            </Button>
          </div>
        </div>

        {/* Section Target Stubs (Validates Anchor Navigation Gracefully) */}
        <div className="pt-12 space-y-8">
          <SectionHeading
            number="// SECTION DIRECTORY"
            title="Incremental Roadmap & Anchor Destinations"
            description="The navigation bar targets the following verified section anchors. Each section will be populated in subsequent phases without breaking page flow."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapItems.map((item) => (
              <section
                key={item.id}
                id={item.id}
                tabIndex={-1}
                className="scroll-mt-24 outline-none"
              >
                <Card
                  variant="white"
                  shadow="md"
                  borderWidth="3"
                  headerTitle={`ANCHOR: #${item.id}`}
                  headerBadge={
                    <Badge
                      size="sm"
                      variant={item.status === "Next Planned Phase" ? "yellow" : "outline"}
                    >
                      {item.phase}
                    </Badge>
                  }
                  showWindowControls
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-text-muted">
                      {item.status === "Next Planned Phase" ? (
                        <>
                          <Clock className="w-3.5 h-3.5 text-ink-black" />
                          <span className="text-ink-black">{item.status}</span>
                        </>
                      ) : (
                        <>
                          <Layers className="w-3.5 h-3.5" />
                          <span>{item.status}</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-xl uppercase text-ink-black">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Card>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
