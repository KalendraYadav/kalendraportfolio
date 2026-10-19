import React from "react";
import type { Metadata } from "next";
import { AboutSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "About & Engineering Philosophy",
  description:
    "Engineering philosophy, system architecture principles, and background of full-stack engineer Kalendra Yadav.",
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <AboutSection headingAs="h1" />
    </main>
  );
}
