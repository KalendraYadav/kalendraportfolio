export type ProjectCategory =
  | "Biomedical Waste Tracking & Compliance"
  | "AI-Powered CCTV Intelligence"
  | "Waste Tracking & Compliance"
  | "Healthcare & IoT"
  | "Computer Vision & AI"
  | "Web Platform & Tooling"
  | "Telemedicine Systems"
  | "Workflow Automation";

export type ProjectStatus =
  | "CASE_STUDY"
  | "PROTOTYPE"
  | "IN_DEVELOPMENT"
  | "VERIFIED_LIVE";

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  role: string;
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  accentVariant: "yellow" | "cyan" | "pink" | "white";
  technologies: string[];
  problemStatement: string;
  solutionOverview: string;
  architectureDetails: string[];
  keyChallenges: ProjectChallenge[];
  repositoryUrl?: string; // Strictly omitted if unverified
  liveUrl?: string; // Strictly omitted if unverified
  hasDetailedCaseStudy: boolean;
}

export const projectsData: Project[] = [
  {
    id: "biotrace",
    slug: "biotrace",
    name: "BioTrace",
    tagline:
      "A digital platform that helps hospitals and waste-management facilities track biomedical waste from registration to treatment. QR-code scanning records each batch's movement, making it easier to trace waste handling and maintain accountable records.",
    category: "Biomedical Waste Tracking & Compliance",
    role: "System Architecture & Full-Stack",
    status: "PROTOTYPE",
    statusLabel: "WORKING PROTOTYPE",
    featured: true,
    accentVariant: "cyan",
    technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    problemStatement:
      "Biomedical waste must be handled and tracked responsibly, but fragmented records can make its journey difficult to follow. BioTrace creates a centralized digital record of waste batches and their movements, helping facilities improve traceability and reduce dependence on manual paperwork.",
    solutionOverview:
      "Centralizes biomedical waste records into a structured web platform where facilities register waste batches, generate unique QR codes, and record scanning events to maintain an accountable chain of custody from collection to treatment.",
    architectureDetails: [
      "Digital registration workflow generating unique QR identifiers for biomedical waste batches.",
      "Normalized relational database schema tracking custody transfers and treatment status.",
      "High-contrast dashboard interface displaying historical batch movements and compliance logs.",
    ],
    keyChallenges: [
      {
        title: "Chain-of-Custody Accountability",
        description:
          "Ensuring waste batch records accurately reflect movement history when QR codes are scanned at transfer points.",
      },
      {
        title: "Audit Trail Clarity",
        description:
          "Structuring digital records so facilities and compliance officers can review historical waste movements without relying on paper logs.",
      },
    ],
    repositoryUrl: "https://github.com/KalendraYadav/biotrackReal.git",
    liveUrl: "https://biotrack-frontend-xhrr.onrender.com",
    hasDetailedCaseStudy: true,
  },
  {
    id: "netravaha",
    slug: "netrava",
    name: "NETRAVA",
    tagline:
      "An AI-powered CCTV intelligence platform that helps police identify vehicles, read number plates, and search for suspicious or stolen vehicles across camera footage—without manually reviewing hours of recordings.",
    category: "AI-Powered CCTV Intelligence",
    role: "Full-Stack & Pipeline Design",
    status: "PROTOTYPE",
    statusLabel: "WORKING PROTOTYPE",
    featured: true,
    accentVariant: "yellow",
    technologies: ["Python", "OpenCV", "TensorFlow", "React", "FastAPI"],
    problemStatement:
      "Instead of relying entirely on officers to watch and search CCTV footage, NETRAVA uses computer vision to extract useful information from camera feeds and make vehicle searches faster and more efficient.",
    solutionOverview:
      "Uses computer vision and deep learning models to analyze CCTV video streams, identify vehicles, extract number-plate text, and enable investigative queries without requiring manual inspection of extensive recordings.",
    architectureDetails: [
      "Video ingestion and frame extraction pipeline for analyzing camera footage.",
      "Computer vision models trained for vehicle detection and license plate recognition.",
      "Search interface allowing investigators to query detected vehicles and review footage timestamps.",
    ],
    keyChallenges: [
      {
        title: "Detection Accuracy Across Varied Conditions",
        description:
          "Handling variations in camera angles, lighting conditions, and video resolution when detecting vehicles and plates.",
      },
      {
        title: "Search Efficiency Over Video Streams",
        description:
          "Indexing extracted vehicle metadata so investigators can quickly locate footage of interest without re-scanning raw video.",
      },
    ],
    repositoryUrl: "https://github.com/KalendraYadav/gujcamera",
    liveUrl: "https://gujcamera.vercel.app",
    hasDetailedCaseStudy: true,
  },
  {
    id: "nexa",
    slug: "nexa",
    name: "Nexa",
    tagline: "Modern web productivity platform with resilient local-first state synchronization.",
    category: "Web Platform & Tooling",
    role: "Frontend Architecture & API Design",
    status: "IN_DEVELOPMENT",
    statusLabel: "IN DEVELOPMENT",
    featured: false,
    accentVariant: "white",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "REST APIs"],
    problemStatement:
      "Distributed engineering workflows suffer from fragmented task tracking and cognitive overhead caused by bloated, slow-loading team tooling.",
    solutionOverview:
      "Built a focused productivity environment engineered with zero bloat, instant keyboard-first command palettes, and optimistic UI updates.",
    architectureDetails: [
      "Optimistic mutation layer that updates local UI instantly while background sync reconciles state.",
      "Strict keyboard navigation model with accessible modal command execution.",
      "Modular neo-brutalist component design system with high data density.",
    ],
    keyChallenges: [
      {
        title: "Conflict-Free State Updates",
        description:
          "Implementing optimistic rollback mechanisms when backend API validation fails during rapid user interactions.",
      },
    ],
    hasDetailedCaseStudy: true,
  },
  {
    id: "vyomcare",
    slug: "vyomcare",
    name: "VyomCare",
    tagline: "Telemedicine consultation triage and patient record management system.",
    category: "Telemedicine Systems",
    role: "Full-Stack Development",
    status: "CASE_STUDY",
    statusLabel: "CASE STUDY",
    featured: false,
    accentVariant: "pink",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "Tailwind CSS"],
    problemStatement:
      "Remote healthcare delivery faces friction in patient intake, reliable video link establishment, and synchronized clinical consultation notes.",
    solutionOverview:
      "Created a streamlined patient consultation portal integrating secure room negotiation, pre-consultation triage questionnaires, and structured prescription outputs.",
    architectureDetails: [
      "Peer-to-peer WebRTC signaling server with automatic fallback relays.",
      "Structured clinical record schema with strict patient privacy constraints.",
      "Responsive patient intake interface operable on low-bandwidth mobile connections.",
    ],
    keyChallenges: [
      {
        title: "Low-Bandwidth Session Stability",
        description:
          "Gracefully degrading video resolution to prioritize crystal-clear audio during fluctuating cellular signals in rural regions.",
      },
    ],
    hasDetailedCaseStudy: true,
  },
  {
    id: "automate-com",
    slug: "automate-com",
    name: "Automate.com",
    tagline: "Event-driven workflow orchestration engine for developer operations.",
    category: "Workflow Automation",
    role: "Backend & Systems Design",
    status: "IN_DEVELOPMENT",
    statusLabel: "IN DEVELOPMENT",
    featured: false,
    accentVariant: "white",
    technologies: ["TypeScript", "Node.js", "Docker", "Redis", "Event Bus"],
    problemStatement:
      "Repetitive deployment verification tasks and multi-service health checks create operational friction when maintained via ad-hoc shell scripts.",
    solutionOverview:
      "Designed a declarative task runner that triggers sequential and parallel verification stages based on Git events and webhook payloads.",
    architectureDetails: [
      "Directed Acyclic Graph (DAG) execution engine for dependency-aware task scheduling.",
      "Redis-backed queue worker for distributed task dispatch.",
      "Standardized log output streamer with real-time process monitoring.",
    ],
    keyChallenges: [
      {
        title: "Deadlock Prevention in Task DAGs",
        description:
          "Cycle detection algorithms executed during workflow parsing to reject invalid circular dependency graphs.",
      },
    ],
    hasDetailedCaseStudy: true,
  },
];
