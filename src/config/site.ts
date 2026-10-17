export interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
  isExternal?: boolean;
  badge?: string;
  sectionStatus?: "ready" | "upcoming";
}

export interface ProfileLink {
  platform: string;
  label: string;
  url: string;
  verified: boolean;
}

export interface ContactEmailConfig {
  address: string;
  verified: boolean;
  unavailableNotice: string;
}

export interface ContactConfig {
  email: ContactEmailConfig;
  headline: string;
  subheading: string;
  operatingLocation: string;
  statusText: string;
}

export interface SiteConfig {
  name: string;
  brand: string;
  role: string;
  tagline: string;
  location: string;
  navItems: NavItem[];
  contact: ContactConfig;
  resume: {
    isAvailable: boolean;
    url: string;
    label: string;
    notice: string;
  };
  portrait: {
    src: string;
    alt: string;
    isPlaceholder: boolean;
  };
  profiles: ProfileLink[];
}

export const siteConfig: SiteConfig = {
  name: "Kalendra Yadav",
  brand: "KALENDRA.DEV",
  role: "Full-Stack Software Engineer",
  tagline: "Architecting resilient systems, high-performance web products, and interactive digital experiences with unapologetic precision.",
  location: "India",
  navItems: [
    { label: "Home", href: "/#home", isAnchor: true, sectionStatus: "ready" },
    { label: "Projects", href: "/#projects", isAnchor: true, sectionStatus: "ready" },
    { label: "Skills", href: "/#skills", isAnchor: true, sectionStatus: "ready" },
    { label: "Experience", href: "/#experience", isAnchor: true, sectionStatus: "ready" },
    { label: "About", href: "/#about", isAnchor: true, sectionStatus: "ready" },
    { label: "Contact", href: "/#contact", isAnchor: true, sectionStatus: "ready" },
    { label: "Design System", href: "/design-system", isAnchor: false, badge: "DEV" },
  ],
  contact: {
    email: {
      address: "contact@kalendrayadav.dev",
      verified: false,
      unavailableNotice: "Official contact address is currently pending DNS setup. Update 'verified: true' in src/config/site.ts to activate copy & direct mail actions.",
    },
    headline: "Let's build something durable.",
    subheading: "Available for full-time engineering roles, high-impact contract systems, and technical collaboration.",
    operatingLocation: "India (Open to Remote & Relocation)",
    statusText: "AVAILABLE FOR ROLES",
  },
  resume: {
    isAvailable: false,
    url: "/documents/kalendra-yadav-resume.pdf",
    label: "Résumé",
    notice: "The official résumé PDF will be available upon launch. Please reach out via email for early access.",
  },
  portrait: {
    src: "/images/portrait/placeholder-avatar.svg",
    alt: "Kalendra Yadav - Full-Stack Software Engineer pop-art duotone portrait",
    isPlaceholder: true,
  },
  profiles: [
    {
      platform: "GitHub",
      label: "GitHub",
      url: "https://github.com",
      verified: false,
    },
    {
      platform: "LinkedIn",
      label: "LinkedIn",
      url: "https://linkedin.com",
      verified: false,
    },
    {
      platform: "Email",
      label: "Contact Email",
      url: "mailto:contact@kalendrayadav.dev",
      verified: false,
    },
  ],
};

/**
 * Returns only verified profile links to avoid rendering unconfirmed or broken links in production.
 */
export function getVerifiedProfiles(): ProfileLink[] {
  return siteConfig.profiles.filter((profile) => profile.verified);
}

/**
 * Checks whether a verified contact email is currently configured.
 */
export function isEmailVerified(): boolean {
  return siteConfig.contact.email.verified;
}

/**
 * Checks whether the official resume PDF is confirmed in the repository.
 */
export function isResumeAvailable(): boolean {
  return siteConfig.resume.isAvailable;
}
