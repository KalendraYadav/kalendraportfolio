import type { AnimationName } from "./Onee";

export interface AvatarTriggerConfig {
  message: string;
  animation: AnimationName;
  priority?: number;
}

export const AVATAR_TRIGGERS: Record<string, AvatarTriggerConfig> = {
  // Navigation Links (Default when navigating from a different route)
  "nav-home": {
    message: "Let's head home.",
    animation: "excited",
  },
  "nav-home-current": {
    message: "You're already home!",
    animation: "excited",
  },
  "nav-projects": {
    message: "See what I've built.",
    animation: "working",
  },
  "nav-projects-current": {
    message: "You're already exploring my projects.",
    animation: "working",
  },
  "nav-skills": {
    message: "What I work with.",
    animation: "proud",
  },
  "nav-skills-current": {
    message: "You're already checking out my skills.",
    animation: "proud",
  },
  "nav-experience": {
    message: "Here's my journey.",
    animation: "listening",
  },
  "nav-experience-current": {
    message: "You're already exploring my journey.",
    animation: "listening",
  },
  "nav-achievements": {
    message: "Milestones I'm proud of.",
    animation: "proud",
  },
  "nav-achievements-current": {
    message: "You're already checking out my milestones.",
    animation: "proud",
  },
  "nav-about": {
    message: "A little about me.",
    animation: "curious",
  },
  "nav-about-current": {
    message: "You're already getting to know me.",
    animation: "curious",
  },
  "nav-contact": {
    message: "Let's talk!",
    animation: "happy",
  },
  "nav-contact-current": {
    message: "You're already in the right place!",
    animation: "happy",
  },
  "nav-resume": {
    message: "Take a look at my background.",
    animation: "curious",
  },

  // Distinct Page Actions
  "action-return-home": {
    message: "Wanna head back?",
    animation: "curious",
  },
  "back-to-top": {
    message: "Let's take you to the top!",
    animation: "excited",
  },

  // Primary Call-to-Actions
  "explore-projects": {
    message: "See what I've built.",
    animation: "curious",
  },
  "get-in-touch": {
    message: "Let's talk!",
    animation: "happy",
  },
  "view-experience": {
    message: "Here's my journey.",
    animation: "listening",
  },
  "view-skills": {
    message: "What I work with.",
    animation: "proud",
  },

  // Project Actions
  "project-demo": {
    message: "Take a look at the live project.",
    animation: "excited",
  },
  "project-source": {
    message: "Curious how it works?",
    animation: "curious",
  },
  "project-case-study": {
    message: "Here's how I approached it.",
    animation: "thinking",
  },

  // Documentary Evidence & Certificates
  "evidence-view": {
    message: "Here's the proof.",
    animation: "proud",
  },

  // Social & Professional Channels
  "channel-email": {
    message: "Let's talk!",
    animation: "happy",
  },
  "channel-github": {
    message: "Explore my code.",
    animation: "working",
  },
  "channel-linkedin": {
    message: "Let's connect.",
    animation: "happy",
  },
  "channel-leetcode": {
    message: "See how I solve problems.",
    animation: "thinking",
  },
  "channel-resume": {
    message: "Take a look at my background.",
    animation: "curious",
  },

  // Action Confirmations (e.g. on click)
  "action-copy-email": {
    message: "Thanks for reaching out!",
    animation: "celebrate",
  },
};

/**
 * Normalizes route paths by trimming trailing slashes and ensuring a leading slash.
 */
export function normalizeRoute(path?: string): string {
  if (!path) return "/";
  const trimmed = path.trim().replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

/**
 * Returns the contextual configuration for a navigation trigger based on whether
 * the visitor is already viewing that specific route.
 */
export function getContextualNavConfig(
  triggerKey: string,
  currentPathname?: string
): AvatarTriggerConfig {
  const normPath = normalizeRoute(
    currentPathname || (typeof window !== "undefined" ? window.location.pathname : "/")
  );

  switch (triggerKey) {
    case "nav-home": {
      const isAlreadyOnRoute = normPath === "/";
      return isAlreadyOnRoute
        ? AVATAR_TRIGGERS["nav-home-current"]
        : AVATAR_TRIGGERS["nav-home"];
    }
    case "nav-projects": {
      const isAlreadyOnRoute = normPath === "/projects" || normPath.startsWith("/projects/");
      return isAlreadyOnRoute
        ? AVATAR_TRIGGERS["nav-projects-current"]
        : AVATAR_TRIGGERS["nav-projects"];
    }
    case "nav-skills": {
      const isAlreadyOnRoute = normPath === "/skills" || normPath.startsWith("/skills/");
      return isAlreadyOnRoute
        ? AVATAR_TRIGGERS["nav-skills-current"]
        : AVATAR_TRIGGERS["nav-skills"];
    }
    case "nav-experience": {
      const isAlreadyOnRoute = normPath === "/experience" || normPath.startsWith("/experience/");
      return isAlreadyOnRoute
        ? AVATAR_TRIGGERS["nav-experience-current"]
        : AVATAR_TRIGGERS["nav-experience"];
    }
    case "nav-achievements": {
      const isAlreadyOnRoute = normPath === "/achievements" || normPath.startsWith("/achievements/");
      return isAlreadyOnRoute
        ? AVATAR_TRIGGERS["nav-achievements-current"]
        : AVATAR_TRIGGERS["nav-achievements"];
    }
    case "nav-about": {
      const isAlreadyOnRoute = normPath === "/about" || normPath.startsWith("/about/");
      return isAlreadyOnRoute
        ? AVATAR_TRIGGERS["nav-about-current"]
        : AVATAR_TRIGGERS["nav-about"];
    }
    case "nav-contact": {
      const isAlreadyOnRoute = normPath === "/contact" || normPath.startsWith("/contact/");
      return isAlreadyOnRoute
        ? AVATAR_TRIGGERS["nav-contact-current"]
        : AVATAR_TRIGGERS["nav-contact"];
    }
    default:
      return AVATAR_TRIGGERS[triggerKey];
  }
}

/**
 * Resolves an HTML element to an avatar trigger configuration.
 * Inspects explicit data attributes first, then applies deterministic rules for standard links and buttons.
 */
export function resolveElementTrigger(
  target: HTMLElement,
  currentPathname?: string
): { key: string; config: AvatarTriggerConfig; matchedElement: HTMLElement } | null {
  // 1. Check for explicit data-avatar-message on target or closest ancestor
  const customMessageEl = target.closest<HTMLElement>("[data-avatar-message]");
  if (customMessageEl) {
    const msg = customMessageEl.getAttribute("data-avatar-message");
    if (msg) {
      const anim = (customMessageEl.getAttribute("data-avatar-animation") as AnimationName) || "curious";
      return {
        key: `custom-${msg}`,
        config: { message: msg, animation: anim },
        matchedElement: customMessageEl,
      };
    }
  }

  // 2. Check for explicit data-avatar-trigger
  const explicitTriggerEl = target.closest<HTMLElement>("[data-avatar-trigger]");
  if (explicitTriggerEl) {
    const triggerKey = explicitTriggerEl.getAttribute("data-avatar-trigger");
    if (triggerKey) {
      if (triggerKey.startsWith("nav-") && triggerKey !== "nav-resume") {
        const config = getContextualNavConfig(triggerKey, currentPathname);
        if (config) {
          return { key: triggerKey, config, matchedElement: explicitTriggerEl };
        }
      }
      if (AVATAR_TRIGGERS[triggerKey]) {
        return {
          key: triggerKey,
          config: AVATAR_TRIGGERS[triggerKey],
          matchedElement: explicitTriggerEl,
        };
      }
    }
  }

  // 3. Back to Top Button
  const topBtn = target.closest<HTMLElement>(
    'button[aria-label*="top" i], [data-avatar-trigger="back-to-top"]'
  );
  if (topBtn || (target.tagName === "BUTTON" && /back to top/i.test(target.textContent || ""))) {
    const el = topBtn || target;
    return { key: "back-to-top", config: AVATAR_TRIGGERS["back-to-top"], matchedElement: el };
  }

  // 4. Return Home on Contact or specific return home buttons
  const returnHomeEl = target.closest<HTMLElement>(
    '[data-avatar-trigger="action-return-home"]'
  );
  if (returnHomeEl || (/return home/i.test(target.textContent || "") && target.closest("a, button"))) {
    const el = returnHomeEl || target.closest<HTMLElement>("a, button")!;
    return { key: "action-return-home", config: AVATAR_TRIGGERS["action-return-home"], matchedElement: el };
  }

  // 5. Navigation Links (Desktop nav, mobile nav drawer, footer nav)
  const navLink = target.closest<HTMLElement>(
    "header nav a, #mobile-navigation a, footer nav a, [aria-label*='navigation' i] a"
  );
  if (navLink) {
    const href = navLink.getAttribute("href") || "";
    if (href === "/" || href === "#home") {
      return { key: "nav-home", config: getContextualNavConfig("nav-home", currentPathname), matchedElement: navLink };
    }
    if (href.includes("/projects") || href === "#projects") {
      return { key: "nav-projects", config: getContextualNavConfig("nav-projects", currentPathname), matchedElement: navLink };
    }
    if (href.includes("/skills") || href === "#skills") {
      return { key: "nav-skills", config: getContextualNavConfig("nav-skills", currentPathname), matchedElement: navLink };
    }
    if (href.includes("/experience") || href === "#experience") {
      return { key: "nav-experience", config: getContextualNavConfig("nav-experience", currentPathname), matchedElement: navLink };
    }
    if (href.includes("/achievements") || href === "#achievements") {
      return { key: "nav-achievements", config: getContextualNavConfig("nav-achievements", currentPathname), matchedElement: navLink };
    }
    if (href.includes("/about") || href === "#about") {
      return { key: "nav-about", config: getContextualNavConfig("nav-about", currentPathname), matchedElement: navLink };
    }
    if (href.includes("/contact") || href === "#contact") {
      return { key: "nav-contact", config: getContextualNavConfig("nav-contact", currentPathname), matchedElement: navLink };
    }
  }

  // 6. Résumé Button or Link
  const resumeEl = target.closest<HTMLElement>(
    'a[href*="resume"], a[title*="résumé" i], a[title*="resume" i], button[title*="resume" i], [aria-label*="résumé" i], [aria-label*="resume" i]'
  );
  if (resumeEl) {
    return { key: "nav-resume", config: AVATAR_TRIGGERS["nav-resume"], matchedElement: resumeEl };
  }

  // 7. Project Actions (Live Demo, Source Code, Case Study)
  const caseStudyBtn = target.closest<HTMLElement>(
    "button[aria-label*='case study' i], button[aria-haspopup='dialog']"
  );
  if (caseStudyBtn && /case study/i.test(caseStudyBtn.textContent || "")) {
    return { key: "project-case-study", config: AVATAR_TRIGGERS["project-case-study"], matchedElement: caseStudyBtn };
  }

  const liveDemoLink = target.closest<HTMLElement>(
    'a[aria-label*="live" i], a[title*="live" i]'
  );
  if (liveDemoLink && /live demo|visit/i.test(liveDemoLink.textContent || "")) {
    return { key: "project-demo", config: AVATAR_TRIGGERS["project-demo"], matchedElement: liveDemoLink };
  }

  const sourceCodeLink = target.closest<HTMLElement>(
    'a[aria-label*="source code" i], a[title*="source code" i], a[aria-label*="repository" i]'
  );
  if (sourceCodeLink && /source code|repository/i.test(sourceCodeLink.textContent || "")) {
    return { key: "project-source", config: AVATAR_TRIGGERS["project-source"], matchedElement: sourceCodeLink };
  }

  // 8. Evidence & Certificate Controls
  const evidenceBtn = target.closest<HTMLElement>(
    'button[aria-controls*="evidence" i], button[aria-label*="inspect" i]'
  );
  if (evidenceBtn || (target.tagName === "BUTTON" && /certificate|evidence/i.test(target.textContent || ""))) {
    const el = evidenceBtn || target;
    return { key: "evidence-view", config: AVATAR_TRIGGERS["evidence-view"], matchedElement: el };
  }

  // 9. Primary Action Buttons by Text & Destination
  const actionButton = target.closest<HTMLElement>("a, button");
  if (actionButton) {
    const text = (actionButton.textContent || "").trim().toLowerCase();
    const href = actionButton.getAttribute("href") || "";

    if (text.includes("explore project") || text.includes("browse project") || text.includes("see what i've built")) {
      return { key: "explore-projects", config: AVATAR_TRIGGERS["explore-projects"], matchedElement: actionButton };
    }
    if (text.includes("get in touch") || text.includes("contact me") || text.includes("connect for competition")) {
      return { key: "get-in-touch", config: AVATAR_TRIGGERS["get-in-touch"], matchedElement: actionButton };
    }
    if (text.includes("view engineering timeline") || text.includes("view experience")) {
      return { key: "view-experience", config: AVATAR_TRIGGERS["view-experience"], matchedElement: actionButton };
    }
    if (text.includes("explore case studies")) {
      return { key: "explore-projects", config: AVATAR_TRIGGERS["explore-projects"], matchedElement: actionButton };
    }

    // Social & Profile Links
    if (href.includes("github.com")) {
      return { key: "channel-github", config: AVATAR_TRIGGERS["channel-github"], matchedElement: actionButton };
    }
    if (href.includes("linkedin.com")) {
      return { key: "channel-linkedin", config: AVATAR_TRIGGERS["channel-linkedin"], matchedElement: actionButton };
    }
    if (href.includes("leetcode.com")) {
      return { key: "channel-leetcode", config: AVATAR_TRIGGERS["channel-leetcode"], matchedElement: actionButton };
    }
    if (href.startsWith("mailto:") || text.includes("email me") || text.includes("copy email")) {
      return { key: "channel-email", config: AVATAR_TRIGGERS["channel-email"], matchedElement: actionButton };
    }
  }

  return null;
}
