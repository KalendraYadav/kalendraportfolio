import React from "react";
import {
  HeroSection,
  PersonalIntroSection,
  HowIBuildSection,
  FeaturedProjectsTeaser,
  HomeCtaSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      {/* 1. Approved Signature Hero Section */}
      <HeroSection />

      {/* 2. Short Personal Introduction */}
      <PersonalIntroSection />

      {/* 3. "A Little About How I Build" Principles */}
      <HowIBuildSection />

      {/* 4. Small Featured-Projects Teaser */}
      <FeaturedProjectsTeaser />

      {/* 5. Closing Navigation Call to Action */}
      <HomeCtaSection />
    </main>
  );
}
