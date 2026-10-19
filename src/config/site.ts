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
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
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
  brand: "Kalendra Yadav",
  logo: {
    src: "/images/brand/logo.png",
    alt: "Kalendra Yadav",
    width: 570,
    height: 455,
  },
  role: "Frontend Developer · Full-Stack Explorer",
  tagline: "Building resilient software systems, high-performance web applications, and intuitive digital experiences.",
  location: "India",
  navItems: [
    { label: "Home", href: "/", isAnchor: false, sectionStatus: "ready" },
    { label: "Projects", href: "/projects", isAnchor: false, sectionStatus: "ready" },
    { label: "Skills", href: "/skills", isAnchor: false, sectionStatus: "ready" },
    { label: "Experience", href: "/experience", isAnchor: false, sectionStatus: "ready" },
    { label: "Achievements", href: "/achievements", isAnchor: false, sectionStatus: "ready" },
    { label: "About", href: "/about", isAnchor: false, sectionStatus: "ready" },
    { label: "Contact", href: "/contact", isAnchor: false, sectionStatus: "ready" },
  ],
  contact: {
    email: {
      address: "kalendrak527@gmail.com",
      verified: true,
      unavailableNotice: "Primary contact email address for Kalendra Yadav.",
    },
    headline: "Let's build something durable.",
    subheading: "Available for full-time engineering roles, high-impact contract systems, and technical collaboration.",
    operatingLocation: "India (Open to Remote & Relocation)",
    statusText: "AVAILABLE FOR ROLES",
  },
  resume: {
    isAvailable: true,
    url: "/resume/kalendra-yadav-resume.pdf",
    label: "RÉSUMÉ",
    notice: "Official résumé PDF is available for viewing and download.",
  },
  portrait: {
    src: "/images/portrait/kalendra-pop-art.jpg",
    alt: "Pop-art portrait of Kalendra Yadav",
    isPlaceholder: false,
  },
  profiles: [
    {
      platform: "GitHub",
      label: "GitHub",
      url: "https://github.com/KalendraYadav",
      verified: true,
    },
    {
      platform: "LinkedIn",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/kalendra-yadav",
      verified: true,
    },
    {
      platform: "LeetCode",
      label: "LeetCode",
      url: "https://leetcode.com/u/KalendraYadav0/",
      verified: true,
    },
    {
      platform: "Email",
      label: "Email",
      url: "mailto:kalendrak527@gmail.com?subject=Engineering%20Inquiry",
      verified: true,
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
