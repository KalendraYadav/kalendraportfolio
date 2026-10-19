import React from "react";
import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Selected Projects & Systems Architecture",
  description:
    "A curated selection of software systems, production prototypes, and engineering experiments engineered by Kalendra Yadav.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <ProjectsSection headingAs="h1" />
    </main>
  );
}
