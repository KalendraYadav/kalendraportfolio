import React from "react";
import type { Metadata } from "next";
import { AchievementsSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Achievements & Recognition",
  description:
    "Documented competition milestones, hackathon placements, awards, and formal distinctions earned by Kalendra Yadav.",
};

export default function AchievementsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <AchievementsSection headingAs="h1" />
    </main>
  );
}
