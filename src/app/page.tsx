import React from "react";
import { HeroSection, ProjectsSection } from "@/components/sections";
import { Card, Badge, SectionHeading, Marquee } from "@/components/ui";
import { Layers, Clock } from "lucide-react";

export default function Home() {
  const upcomingSections = [
    {
      id: "skills",
      title: "Technical Skills Matrix",
      phase: "Phase 7",
      status: "Next Planned Phase",
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
      {/* Infinite Running Marquee Ticker */}
      <Marquee
        items={[
          "KALENDRA YADAV",
          "FULL-STACK SOFTWARE ENGINEER",
          "BUILDING DIGITAL SYSTEMS",
          "NEO-BRUTALISM + POP ART",
          "VERIFIED CODE ONLY",
        ]}
        variant="dark"
      />

      {/* Signature Phase 5 Hero Section (#home) */}
      <HeroSection />

      {/* Real Phase 6 Projects Section (#projects) */}
      <ProjectsSection />

      {/* Section Roadmap & Anchor Destinations (#skills, #experience, #about, #contact) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <SectionHeading
          number="// SECTION DIRECTORY"
          title="Section Roadmap & Verified Anchor Destinations"
          as="h2"
          description="The navigation bar targets the following verified section anchors. Each section will be incrementally implemented in subsequent phases."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingSections.map((item) => (
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
    </main>
  );
}
