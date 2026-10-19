import React from "react";
import type { Metadata } from "next";
import { SkillsSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Technical Skills Matrix",
  description:
    "Explore engineering capabilities across TypeScript, React, Next.js, Node.js, databases, and systems architecture.",
};

export default function SkillsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <SkillsSection headingAs="h1" />
    </main>
  );
}
