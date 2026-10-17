export type SkillCategory =
  | "Programming Languages"
  | "Frontend Development"
  | "Backend & Systems"
  | "Databases & Storage"
  | "DevOps & Tools"
  | "AI & Computer Vision"
  | "CS Fundamentals";

export type SkillLevel = "core" | "exploring";

export interface SkillItem {
  name: string;
  status: SkillLevel;
  highlight?: string;
}

export interface SkillGroup {
  category: SkillCategory;
  description: string;
  badgeLabel: string;
  accentVariant: "yellow" | "cyan" | "pink" | "white" | "blue";
  skills: SkillItem[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Programming Languages",
    description: "Core syntax, strongly typed systems, and scripting languages used across projects.",
    badgeLabel: "LANGUAGES",
    accentVariant: "yellow",
    skills: [
      { name: "TypeScript", status: "core", highlight: "Primary language for frontend & backend services" },
      { name: "JavaScript (ES6+)", status: "core", highlight: "Asynchronous runtime & DOM primitives" },
      { name: "Python", status: "core", highlight: "Data processing & CV pipelines" },
      { name: "SQL", status: "core", highlight: "Relational querying & schema design" },
      { name: "C / C++", status: "core", highlight: "Algorithmic problem solving & memory concepts" },
      { name: "HTML5 / CSS3", status: "core", highlight: "Semantic structure & modern styling" },
    ],
  },
  {
    category: "Frontend Development",
    description: "Modern component-driven web architectures, design systems, and responsive interfaces.",
    badgeLabel: "FRONTEND",
    accentVariant: "cyan",
    skills: [
      { name: "Next.js (App Router)", status: "core", highlight: "Server Components & static generation" },
      { name: "React 19", status: "core", highlight: "Declarative component design & state management" },
      { name: "Tailwind CSS", status: "core", highlight: "Design tokens, utility architectures & responsive layouts" },
      { name: "Web Accessibility (a11y)", status: "core", highlight: "WCAG 2.2 AA compliance, ARIA & keyboard flows" },
      { name: "Responsive Layouts", status: "core", highlight: "Fluid, mobile-first design systems" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Server runtimes, RESTful endpoints, streaming interfaces, and decoupled services.",
    badgeLabel: "BACKEND",
    accentVariant: "pink",
    skills: [
      { name: "Node.js", status: "core", highlight: "Event-driven runtime & asynchronous execution" },
      { name: "Express", status: "core", highlight: "REST API route design & middleware pipelines" },
      { name: "RESTful API Design", status: "core", highlight: "Stateless HTTP contracts & resource modeling" },
      { name: "WebSockets", status: "core", highlight: "Bidirectional low-latency real-time streaming" },
      { name: "Fastify", status: "exploring", highlight: "High-throughput micro-service endpoints" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Relational normalization, document stores, and in-memory caching layers.",
    badgeLabel: "DATA",
    accentVariant: "white",
    skills: [
      { name: "PostgreSQL", status: "core", highlight: "Relational normalization & transactional integrity" },
      { name: "MongoDB", status: "core", highlight: "Flexible document data modeling" },
      { name: "Redis", status: "exploring", highlight: "In-memory caching & distributed task queues" },
    ],
  },
  {
    category: "DevOps & Tools",
    description: "Version control workflows, containerization, and modern development tooling.",
    badgeLabel: "DEV_OPS",
    accentVariant: "yellow",
    skills: [
      { name: "Git & GitHub", status: "core", highlight: "Atomic commits, branching & PR workflows" },
      { name: "Docker", status: "exploring", highlight: "Containerized environments & service isolation" },
      { name: "Linux / Bash", status: "core", highlight: "Shell scripting & development environments" },
      { name: "Postman", status: "core", highlight: "API testing, validation & endpoint documentation" },
      { name: "Vercel", status: "core", highlight: "CI/CD automated deployment & edge routing" },
    ],
  },
  {
    category: "AI & Computer Vision",
    description: "Specialized visual perception pipelines and machine learning inference.",
    badgeLabel: "AI / CV",
    accentVariant: "blue",
    skills: [
      { name: "OpenCV", status: "core", highlight: "Video frame processing & edge detection" },
      { name: "TensorFlow", status: "exploring", highlight: "Model evaluation & inference pipelines" },
    ],
  },
  {
    category: "CS Fundamentals",
    description: "Theoretical engineering foundation powering practical problem-solving.",
    badgeLabel: "FOUNDATIONS",
    accentVariant: "white",
    skills: [
      { name: "Data Structures & Algorithms", status: "core", highlight: "Arrays, trees, graphs, hashing & dynamic programming" },
      { name: "Object-Oriented Design", status: "core", highlight: "Inheritance, encapsulation & modular patterns" },
      { name: "Database Normalization", status: "core", highlight: "1NF to 3NF schema design & integrity constraints" },
      { name: "System Architecture Basics", status: "core", highlight: "Client-server separation, decoupling & caching" },
    ],
  },
];
