export type ProjectCategory =
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
    slug: "biotrace-nidusclean",
    name: "BioTrace / NidusClean",
    tagline: "IoT-enabled sanitation monitoring and environmental compliance architecture.",
    category: "Healthcare & IoT",
    role: "System Architecture & Full-Stack",
    status: "CASE_STUDY",
    statusLabel: "CASE STUDY",
    featured: true,
    accentVariant: "cyan",
    technologies: ["TypeScript", "Next.js", "Node.js", "IoT Telemetry", "PostgreSQL", "Tailwind CSS"],
    problemStatement:
      "Clinical and sanitation facilities require continuous, tamper-evident audit trails for sterilization cycles and environmental compliance without relying on error-prone manual paper logs.",
    solutionOverview:
      "Engineered an end-to-end monitoring architecture that streams real-time telemetry from sensor endpoints into an immutable structured audit pipeline with instant visual dashboard reporting.",
    architectureDetails: [
      "Decoupled telemetry ingestion pipeline with event timestamp validation.",
      "Relational schema normalized for regulatory inspection logs and anomaly alerts.",
      "High-contrast editorial dashboard interface displaying real-time facility metrics.",
    ],
    keyChallenges: [
      {
        title: "Telemetry Ingestion Resilience",
        description:
          "Handling sporadic connectivity from edge sensors by buffering sensor event payloads with idempotency keys.",
      },
      {
        title: "Audit Trail Integrity",
        description:
          "Structuring compliance logs with strict read-only audit triggers to prevent retrospective tampering.",
      },
    ],
    hasDetailedCaseStudy: true,
  },
  {
    id: "netravaha",
    slug: "netravaha",
    name: "NetraVaha",
    tagline: "Computer vision and mobility intelligence platform for assistive visual navigation.",
    category: "Computer Vision & AI",
    role: "Full-Stack & Pipeline Design",
    status: "PROTOTYPE",
    statusLabel: "PROTOTYPE",
    featured: true,
    accentVariant: "yellow",
    technologies: ["Python", "OpenCV", "TensorFlow", "React", "FastAPI", "WebSockets"],
    problemStatement:
      "Pedestrian navigation in unstructured environments requires low-latency spatial perception and real-time obstacle avoidance feedback without heavy cloud dependency.",
    solutionOverview:
      "Architected a lightweight visual inference pipeline that processes streaming camera feeds, detects pathway anomalies, and generates directional audio-haptic cues.",
    architectureDetails: [
      "Optimized model inference pipeline designed for edge compute constraints.",
      "WebSocket streaming protocol for sub-100ms spatial alert transmission.",
      "Accessible operator dashboard designed with high-contrast tactile feedback.",
    ],
    keyChallenges: [
      {
        title: "Inference Latency Optimization",
        description:
          "Reducing frame processing latency by downsampling non-critical video frames while maintaining obstacle edge precision.",
      },
      {
        title: "Real-Time State Synchronization",
        description:
          "Managing persistent bidirectional WebSocket connections during frequent client network handoffs.",
      },
    ],
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
