import React from "react";
import {
  HeroSection,
  ProjectsSection,
  SkillsSection,
  ExperienceSection,
  AboutSection,
  ContactSection,
} from "@/components/sections";
import { Marquee } from "@/components/ui";

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

      {/* Real Phase 8 Contact & Collaboration Hub (#contact) */}
      <ContactSection />
    </main>
  );
}
