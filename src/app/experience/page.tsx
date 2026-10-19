import React from "react";
import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Professional Experience & Education",
  description:
    "Verified professional journey, Web Development Internship at AMDox Technologies supported by documentary certificate evidence, and undergraduate computer science studies.",
};

export default function ExperiencePage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <ExperienceSection headingAs="h1" />
    </main>
  );
}
