import React from "react";
import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Experience & Engineering Timeline",
  description:
    "Chronological engineering milestones, production applications, and academic foundations grounded in verifiable code.",
};

export default function ExperiencePage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <ExperienceSection headingAs="h1" />
    </main>
  );
}
