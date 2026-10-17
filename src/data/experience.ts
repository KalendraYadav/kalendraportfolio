export type TimelineCategory = "milestone" | "education" | "experience";

export interface TimelineEntry {
  id: string;
  title: string;
  organizationOrContext: string;
  category: TimelineCategory;
  categoryLabel: string;
  periodOrStatus: string;
  isOngoing?: boolean;
  accentVariant: "yellow" | "cyan" | "pink" | "blue" | "white";
  description: string;
  highlights: string[];
  technologies?: string[];
}

export const experienceTimelineData: TimelineEntry[] = [
  {
    id: "automate-workflow",
    title: "Event-Driven Workflow Orchestrator",
    organizationOrContext: "Automate.com · Systems Architecture",
    category: "milestone",
    categoryLabel: "SYSTEM MILESTONE",
    periodOrStatus: "Active Development",
    isOngoing: true,
    accentVariant: "yellow",
    description:
      "Designed a directed acyclic graph (DAG) task runner for developer operations, managing dependency graphs and asynchronous background workers.",
    highlights: [
      "Implemented cycle-detection algorithms to reject circular workflow dependencies.",
      "Engineered decoupled worker queue processing with state persistence.",
    ],
    technologies: ["TypeScript", "Node.js", "Docker", "Redis"],
  },
  {
    id: "nexa-platform",
    title: "Local-First Web Productivity Workspace",
    organizationOrContext: "Nexa · Frontend Architecture",
    category: "milestone",
    categoryLabel: "ENGINEERING MILESTONE",
    periodOrStatus: "Active Development",
    isOngoing: true,
    accentVariant: "cyan",
    description:
      "Architected an optimistic, low-latency productivity tool designed with strict keyboard-first interaction patterns and conflict-free state mutations.",
    highlights: [
      "Engineered optimistic state reconciliation layer with rollback validation.",
      "Built keyboard-driven command execution system with accessible dialogs.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
  },
  {
    id: "netravaha-cv",
    title: "Assistive Computer Vision Inference Pipeline",
    organizationOrContext: "NetraVaha · Research Prototype",
    category: "milestone",
    categoryLabel: "RESEARCH PROTOTYPE",
    periodOrStatus: "Prototype Phase",
    accentVariant: "blue",
    description:
      "Developed a low-latency edge visual perception prototype analyzing camera feeds to detect pathway obstacles and stream spatial alerts.",
    highlights: [
      "Optimized frame inference pipelines to preserve obstacle edge precision under edge compute constraints.",
      "Implemented persistent WebSocket channel for sub-100ms alert streaming.",
    ],
    technologies: ["Python", "OpenCV", "TensorFlow", "WebSockets", "FastAPI"],
  },
  {
    id: "biotrace-iot",
    title: "IoT Sanitation Telemetry & Audit Architecture",
    organizationOrContext: "BioTrace / NidusClean · Healthcare Systems",
    category: "milestone",
    categoryLabel: "SYSTEM MILESTONE",
    periodOrStatus: "Case Study Complete",
    accentVariant: "pink",
    description:
      "Engineered an end-to-end telemetry ingestion architecture capturing sensor event logs for regulatory sanitation and environmental compliance.",
    highlights: [
      "Structured immutable audit trails with event timestamp verification.",
      "Designed high-contrast editorial dashboard for real-time facility metric inspection.",
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "IoT Telemetry"],
  },
  {
    id: "cs-undergrad",
    title: "Computer Science & Engineering Studies",
    organizationOrContext: "Higher Education · Curriculum Foundations",
    category: "education",
    categoryLabel: "ACADEMIC FOUNDATION",
    periodOrStatus: "Undergraduate Journey",
    isOngoing: true,
    accentVariant: "white",
    description:
      "Rigorous theoretical and applied computer science coursework focusing on computational complexity, system architecture, and algorithmic design.",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems.",
      "Applied Studies: Operating Systems, Computer Networks, Software Engineering Methodologies.",
    ],
    technologies: ["C / C++", "Java", "SQL", "Algorithms", "System Architecture"],
  },
];
