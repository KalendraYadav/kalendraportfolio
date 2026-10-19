/**
 * Data-Driven Professional Experience & Education Records
 * Kalendra Yadav — Developer Portfolio
 *
 * Strict Accuracy Rules:
 * - AMDox Technologies dates: 12 April 2026 — 12 May 2026 (1 month, matching certificates).
 * - Supported by verified documentary certificates.
 * - Simple, concise, punchy writing that lets the evidence speak.
 */

export type ExperienceType = "Internship" | "Full-time" | "Part-time" | "Contract" | "Education";
export type WorkArrangement = "Remote" | "Hybrid" | "On-site";
export type EvidenceType = "certificate" | "screenshot" | "letter" | "document";

export interface ExperienceEvidenceItem {
  id: string;
  title: string;
  type: EvidenceType;
  badgeLabel: string;
  imageSrc: string;
  altText: string;
  description?: string;
  issueDate?: string;
  certificateId?: string;
}

export interface ExperienceEntry {
  id: string;
  organization: string;
  role: string;
  experienceType: ExperienceType;
  startDate: string;
  endDate: string;
  duration: string;
  workArrangement?: WorkArrangement;
  location?: string;
  isOngoing?: boolean;
  accentVariant: "yellow" | "cyan" | "pink" | "blue" | "white";
  description: string;
  learningOutcomes?: string[];
  responsibilities?: string[];
  technologies?: string[];
  organizationUrl?: string;
  evidence?: ExperienceEvidenceItem[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "amdox-internship",
    organization: "AMDox Technologies",
    role: "Web Development Intern",
    experienceType: "Internship",
    startDate: "12 April 2026",
    endDate: "12 May 2026",
    duration: "1 Month (12 Apr 2026 – 12 May 2026)",
    workArrangement: "Remote",
    accentVariant: "yellow",
    description:
      "Web Development Internship at AMDox Technologies, focused on core web technologies, debugging, and collaborative Git development workflows.",
    learningOutcomes: [
      "Front-end development with HTML5, CSS3, and JavaScript.",
      "Practical debugging, testing, and code reliability.",
      "Version control and team collaboration with Git & GitHub.",
      "Writing clean, readable, and maintainable web code.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
    evidence: [
      {
        id: "amdox-internship-cert",
        title: "Internship Completion Certificate",
        type: "certificate",
        badgeLabel: "INTERNSHIP CERTIFICATE",
        imageSrc: "/images/experience/amdox/amdox-internship-certificate.png",
        altText:
          "AMDox Technologies Web Development Certificate of Internship awarded to Kalendra Kumar Yadav (12-04-2026 to 12-05-2026)",
        description:
          "Official Certificate of Internship from AMDox Technologies certifying completion of the Web Development internship from 12-04-2026 to 12-05-2026.",
        issueDate: "17 May 2026",
        certificateId: "adx/jxolel70v4",
      },
      {
        id: "amdox-training-cert",
        title: "Certificate of Training",
        type: "certificate",
        badgeLabel: "TRAINING CERTIFICATE",
        imageSrc: "/images/experience/amdox/amdox-training-certificate.png",
        altText:
          "AMDox Technologies Certificate of Training awarded to Kalendra Kumar Yadav (12-04-2026 to 12-05-2026)",
        description:
          "Official Certificate of Training awarded by Amdox Technologies documenting Web Development training from 12-04-2026 to 12-05-2026.",
        issueDate: "17 May 2026",
        certificateId: "adx/bv8OpAfnsr",
      },
    ],
  },
  {
    id: "dronacharya-btech",
    organization: "Dronacharya Group of Institutions",
    role: "B.Tech in Computer Science & Engineering",
    experienceType: "Education",
    startDate: "2025",
    endDate: "2029",
    duration: "2025 — 2029",
    location: "Greater Noida, India",
    isOngoing: true,
    accentVariant: "cyan",
    description:
      "Undergraduate Computer Science studies focusing on core algorithms, systems programming, and software engineering foundations.",
    learningOutcomes: [
      "Data Structures & Algorithms in C++ and Java.",
      "Database Management Systems & SQL.",
      "Operating Systems & Computer Networks.",
    ],
    technologies: ["C / C++", "Java", "SQL", "Data Structures", "Algorithms"],
  },
];

// Backward-compatibility alias
export type TimelineEntry = ExperienceEntry;
export const experienceTimelineData = experienceEntries;
