/**
 * Data-Driven Achievements & Recognition Records
 * Kalendra Yadav — Developer Portfolio
 *
 * Content Integrity Rules:
 * - Only genuine accomplishments (hackathon placements, competitions, awards, distinctions).
 * - No unverified claims or fabricated placeholder awards.
 * - Future achievements can be added directly by adding entries to `achievementsData`.
 */

import { ExperienceEvidenceItem } from "./experience";

export type AchievementCategory =
  | "hackathon"
  | "competition"
  | "award"
  | "scholarship"
  | "distinction"
  | "recognition";

export type AchievementType =
  | "Winner"
  | "Runner-Up"
  | "Finalist"
  | "Special Award"
  | "Honorable Mention"
  | "Merit Distinction";

export interface Achievement {
  id: string;
  title: string;
  category: AchievementCategory;
  organization: string;
  eventName: string;
  achievementType: AchievementType;
  result?: string;
  date: string;
  description: string;
  accentVariant?: "yellow" | "cyan" | "pink" | "blue" | "white";
  supportingDetails?: string[];
  evidence?: ExperienceEvidenceItem[];
  externalUrl?: string;
  relatedProject?: {
    name: string;
    slug?: string;
    url?: string;
  };
}

/**
 * Centralized list of verified achievements.
 * Intentionally empty until official awards, hackathon placements, or competition certificates are earned and verified.
 * When entries are added, the Achievements page automatically renders them with responsive cards and expandable evidence inspection.
 */
export const achievementsData: Achievement[] = [];
