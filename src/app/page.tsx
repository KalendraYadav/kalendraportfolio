import React from "react";
import {
  HeroSection,
  ProjectsSection,
  SkillsSection,
  ExperienceSection,
  AboutSection,
} from "@/components/sections";
import { Card, Badge, SectionHeading, Marquee } from "@/components/ui";
import { Mail, Clock } from "lucide-react";

export default function Home() {
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

      {/* Real Phase 7 Skills Matrix Section (#skills) */}
      <SkillsSection />

      {/* Real Phase 7 Experience & Engineering Timeline Section (#experience) */}
      <ExperienceSection />

      {/* Real Phase 7 About & Engineering Philosophy Section (#about) */}
      <AboutSection />

      {/* Section Roadmap & Anchor Destination for Upcoming Contact Hub (#contact) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <SectionHeading
          number="// SECTION DIRECTORY"
          title="Upcoming Section Roadmap"
          as="h2"
          description="The navigation bar and hero CTAs target the verified contact hub anchor below, which will be fully implemented in Phase 8."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <section
            id="contact"
            tabIndex={-1}
            className="scroll-mt-24 outline-none md:col-span-2 lg:col-span-1"
          >
            <Card
              variant="yellow"
              shadow="md"
              borderWidth="3"
              headerTitle="ANCHOR: #contact"
              headerBadge={
                <Badge size="sm" variant="yellow">
                  Phase 8
                </Badge>
              }
              showWindowControls
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink-black">
                  <Clock className="w-3.5 h-3.5 text-ink-black" />
                  <span>Next Planned Phase</span>
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-ink-black">
                  Contact & Verified Profiles Hub
                </h3>
                <p className="font-body text-sm text-ink-black/80 leading-relaxed">
                  Interactive contact hub with one-click email copy action, verified coding profiles (GitHub, LinkedIn), and official résumé download.
                </p>
                <div className="pt-2 flex items-center gap-2 font-mono text-xs font-bold text-ink-black">
                  <Mail className="w-4 h-4 text-ink-black" />
                  <span>contact@kalendrayadav.dev</span>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
