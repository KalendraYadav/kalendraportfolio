"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useSyncExternalStore,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import type { AnimationName } from "./Onee";
import { resolveElementTrigger } from "./avatar-triggers";
import { X } from "lucide-react";

// Dynamically import Onee on client side to ensure optimal SSR performance and zero hydration mismatch
const Onee = dynamic(() => import("./Onee").then((mod) => mod.Onee), {
  ssr: false,
});

export interface ContextConfig {
  animation: AnimationName;
  message: string;
}

// Canonical contexts: 'home' | 'about' | 'projects' | 'skills' | 'experience' | 'contact' | 'how-i-build'
export const CONTEXT_CONFIGS: Record<string, ContextConfig> = {
  home: {
    animation: "excited",
    message: "Hey, welcome!",
  },
  about: {
    animation: "curious",
    message: "A little about me.",
  },
  projects: {
    animation: "working",
    message: "Explore my projects.",
  },
  skills: {
    animation: "proud",
    message: "What I work with.",
  },
  experience: {
    animation: "listening",
    message: "Here's my journey.",
  },
  achievements: {
    animation: "proud",
    message: "Milestones & recognition.",
  },
  contact: {
    animation: "happy",
    message: "Let's talk!",
  },
  "how-i-build": {
    animation: "thinking",
    message: "Building beyond the happy path.",
  },
};

// Map DOM section IDs to canonical context
export const SECTION_ID_TO_CONTEXT: Record<string, string> = {
  home: "home",
  intro: "about",
  about: "about",
  "how-i-build": "how-i-build",
  "featured-work": "projects",
  projects: "projects",
  skills: "skills",
  experience: "experience",
  achievements: "achievements",
  contact: "contact",
  "closing-cta": "contact",
};

// Map Route paths to canonical context
export function getRouteContext(pathname: string): string {
  if (pathname === "/projects" || pathname.startsWith("/projects/")) return "projects";
  if (pathname === "/skills" || pathname.startsWith("/skills/")) return "skills";
  if (pathname === "/experience" || pathname.startsWith("/experience/")) return "experience";
  if (pathname === "/achievements" || pathname.startsWith("/achievements/")) return "achievements";
  if (pathname === "/about" || pathname.startsWith("/about/")) return "about";
  if (pathname === "/contact" || pathname.startsWith("/contact/")) return "contact";
  return "home";
}

const emptySubscribe = () => () => {};

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const getReducedMotionServerSnapshot = () => false;

export function FloatingAvatar() {
  const pathname = usePathname();

  // Client hydration check via useSyncExternalStore
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Accessible reduced motion preference subscription
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  // 1. Passive contextual state (driven by route and scroll position)
  const [activeContext, setActiveContext] = useState<string>(() => getRouteContext(pathname));

  // 2. Explicit interaction overrides (hover, keyboard focus, click actions)
  const [overrideState, setOverrideState] = useState<{
    animation: AnimationName;
    priority: number; // 1 = hover/focus, 2 = click action
  } | null>(null);

  // 3. Speech bubble state
  const [speechMessage, setSpeechMessage] = useState<string | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

  // 4. Stable refs for timers, tracking, and cooldowns
  const bubbleDismissTimerRef = useRef<NodeJS.Timeout | null>(null);
  const scrollDebounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hoverLeaveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const welcomeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const hoverActiveRef = useRef<boolean>(false);
  const currentHoverTargetRef = useRef<HTMLElement | null>(null);
  const lastSpokenContextRef = useRef<string | null>(null);
  const lastBubbleTimeRef = useRef<number>(0);
  const lastHoverLeaveTimeRef = useRef<number>(0);
  const dismissedContextRef = useRef<string | null>(null);
  const prevPathnameRef = useRef<string>(pathname);

  // Unified speech bubble display function
  const showSpeech = useCallback(
    (
      message: string,
      animation?: AnimationName,
      origin: "welcome" | "route" | "scroll" | "hover" | "click" = "scroll",
      durationMs: number = 3800
    ) => {
      // Clear pending dismiss timer
      if (bubbleDismissTimerRef.current) {
        clearTimeout(bubbleDismissTimerRef.current);
        bubbleDismissTimerRef.current = null;
      }

      setSpeechMessage(message);
      lastBubbleTimeRef.current = Date.now();

      // Set explicit animation override for hover/click interactions
      if (animation && (origin === "hover" || origin === "click")) {
        setOverrideState({
          animation,
          priority: origin === "click" ? 2 : 1,
        });
      }

      // Schedule auto-dismissal
      bubbleDismissTimerRef.current = setTimeout(() => {
        setSpeechMessage(null);
        bubbleDismissTimerRef.current = null;
        if (origin === "click") {
          setOverrideState(null);
        }
      }, durationMs);
    },
    []
  );

  // Accessible dismiss function (Close Button)
  const dismissSpeechBubble = useCallback(() => {
    if (bubbleDismissTimerRef.current) {
      clearTimeout(bubbleDismissTimerRef.current);
      bubbleDismissTimerRef.current = null;
    }
    setSpeechMessage(null);
    setOverrideState(null);
    dismissedContextRef.current = activeContext;
  }, [activeContext]);

  const [prevPathname, setPrevPathname] = useState<string>(pathname);

  // Synchronize route context during render (React recommended pattern for prop/route change)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setActiveContext(getRouteContext(pathname));
    if (pathname === "/") {
      setSpeechMessage(null);
    }
  }

  // A. ROUTE NAVIGATION EFFECT: Trigger contextual message when navigating between routes
  useEffect(() => {
    if (!isMounted) return;

    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      dismissedContextRef.current = null;
      currentHoverTargetRef.current = null;
      hoverActiveRef.current = false;
      if (bubbleDismissTimerRef.current) {
        clearTimeout(bubbleDismissTimerRef.current);
        bubbleDismissTimerRef.current = null;
      }

      const routeCtx = getRouteContext(pathname);

      // Dedicated routes display their message upon entry
      if (pathname !== "/") {
        const config = CONTEXT_CONFIGS[routeCtx];
        if (config) {
          lastSpokenContextRef.current = routeCtx;
          const timer = setTimeout(() => {
            showSpeech(config.message, config.animation, "route", 3800);
          }, 80);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [pathname, isMounted, showSpeech]);

  // B. HOMEPAGE ENTRY EFFECT: Display "Hey, welcome!" only on first session visit to "/"
  useEffect(() => {
    if (!isMounted || pathname !== "/") return;

    try {
      if (sessionStorage.getItem("portfolio_avatar_welcome")) {
        return;
      }
    } catch {
      // sessionStorage unavailable
    }

    welcomeTimerRef.current = setTimeout(() => {
      showSpeech(CONTEXT_CONFIGS.home.message, CONTEXT_CONFIGS.home.animation, "welcome", 3800);
      lastSpokenContextRef.current = "home";
      try {
        sessionStorage.setItem("portfolio_avatar_welcome", "true");
      } catch {
        // Ignore
      }
    }, 850);

    return () => {
      if (welcomeTimerRef.current) clearTimeout(welcomeTimerRef.current);
    };
  }, [isMounted, pathname, showSpeech]);

  // C. MODAL & OVERLAY DETECTION: Hide companion when dialog or drawer is open
  useEffect(() => {
    if (!isMounted) return;

    const checkOverlays = () => {
      const hasModal = !!document.querySelector(
        '[role="dialog"], [aria-modal="true"], #case-study-modal'
      );
      const isBodyLocked = document.body.style.overflow === "hidden";
      setIsOverlayOpen(hasModal || isBodyLocked);
    };

    checkOverlays();

    const observer = new MutationObserver(checkOverlays);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [isMounted]);

  // D. RELIABLE SECTION SCROLL OBSERVER: Height-based visibility calculation (supports upward & downward scrolling)
  useEffect(() => {
    if (!isMounted) return;

    const visibleHeights = new Map<string, number>();
    const targetSectionIds = [
      "home",
      "intro",
      "about",
      "how-i-build",
      "featured-work",
      "projects",
      "skills",
      "experience",
      "achievements",
      "closing-cta",
      "contact",
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting && entry.intersectionRect.height > 0) {
          visibleHeights.set(id, entry.intersectionRect.height);
        } else {
          visibleHeights.delete(id);
        }
      });

      // Find section with largest visible pixel height in viewport
      let dominantId: string | null = null;
      let maxHeight = 50; // Minimum 50px visible in viewport

      visibleHeights.forEach((height, id) => {
        if (height > maxHeight) {
          maxHeight = height;
          dominantId = id;
        }
      });

      if (!dominantId) return;

      const contextKey = SECTION_ID_TO_CONTEXT[dominantId];
      if (!contextKey) return;

      // Update passive context
      setActiveContext(contextKey);

      // Debounce speech bubble to ensure user has settled on section rather than rapidly flicking past
      if (scrollDebounceTimerRef.current) {
        clearTimeout(scrollDebounceTimerRef.current);
      }

      scrollDebounceTimerRef.current = setTimeout(() => {
        const now = Date.now();
        const isHovered = hoverActiveRef.current;
        const recentHover = now - lastHoverLeaveTimeRef.current < 2000;
        const isDismissed = dismissedContextRef.current === contextKey;
        const isDifferentContext = lastSpokenContextRef.current !== contextKey;
        const cooldownElapsed = now - lastBubbleTimeRef.current > 5000;

        if (!isHovered && !recentHover && !isDismissed && (isDifferentContext || cooldownElapsed)) {
          // If returning to home hero after welcome, remain quiet on passive scroll
          if (contextKey === "home" && pathname === "/") {
            return;
          }

          const config = CONTEXT_CONFIGS[contextKey];
          if (config) {
            lastSpokenContextRef.current = contextKey;
            showSpeech(config.message, config.animation, "scroll", 3600);
          }
        }
      }, 280);
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });

    targetSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (scrollDebounceTimerRef.current) {
        clearTimeout(scrollDebounceTimerRef.current);
      }
    };
  }, [isMounted, pathname, showSpeech]);

  // E. EXPLICIT HOVER, FOCUS & CLICK INTERACTION DELEGATION
  useEffect(() => {
    if (!isMounted) return;

    const handlePointerOver = (e: MouseEvent | FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const trigger = resolveElementTrigger(target, pathname);
      if (!trigger) return;

      // Prevent duplicate trigger while pointer or focus remains within the same element
      if (currentHoverTargetRef.current === trigger.matchedElement) return;

      currentHoverTargetRef.current = trigger.matchedElement;
      hoverActiveRef.current = true;
      if (hoverLeaveTimerRef.current) {
        clearTimeout(hoverLeaveTimerRef.current);
        hoverLeaveTimerRef.current = null;
      }

      showSpeech(trigger.config.message, trigger.config.animation, "hover", 3500);
    };

    const handlePointerOut = (e: MouseEvent | FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !currentHoverTargetRef.current) return;

      // Check if target is actually related to the current active hovered element.
      // If pointerout fired from an unrelated element that was already exited, do not nullify current hover.
      if (!currentHoverTargetRef.current.contains(target) && currentHoverTargetRef.current !== target) {
        return;
      }

      // Check if focus or pointer is moving to an inner child element
      const related = (e as MouseEvent).relatedTarget as Node | null;
      if (related && currentHoverTargetRef.current.contains(related)) {
        return;
      }

      // Leaving interactive control
      currentHoverTargetRef.current = null;
      hoverActiveRef.current = false;
      lastHoverLeaveTimeRef.current = Date.now();

      // Gracefully restore passive animation after short delay
      hoverLeaveTimerRef.current = setTimeout(() => {
        setOverrideState((prev) => (prev?.priority === 1 ? null : prev));
      }, 1200);
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Email action (copy email button or mailto link)
      const isEmailAction =
        target.closest<HTMLElement>(
          'button[aria-label*="email" i], [data-avatar-trigger="action-copy-email"]'
        ) || target.textContent?.toLowerCase().includes("copy email");

      if (isEmailAction) {
        showSpeech("Thanks for reaching out!", "celebrate", "click", 4000);
        return;
      }
    };

    document.addEventListener("mouseover", handlePointerOver, { passive: true });
    document.addEventListener("focusin", handlePointerOver, { passive: true });
    document.addEventListener("mouseout", handlePointerOut, { passive: true });
    document.addEventListener("focusout", handlePointerOut, { passive: true });
    document.addEventListener("click", handleClick, { passive: true });

    return () => {
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("focusin", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);
      document.removeEventListener("focusout", handlePointerOut);
      document.removeEventListener("click", handleClick);
      if (hoverLeaveTimerRef.current) clearTimeout(hoverLeaveTimerRef.current);
    };
  }, [isMounted, pathname, showSpeech]);

  // Direct click on companion avatar
  const handleAvatarClick = () => {
    const playfulMessages = [
      "Glad you're exploring!",
      "Building something great!",
      "Always curious!",
      "Crafting digital systems!",
    ];
    const randomMsg =
      playfulMessages[Math.floor(Math.random() * playfulMessages.length)];
    showSpeech(randomMsg, "playful", "click", 3000);
  };

  // Determine active animation with priority: Override (hover/click) > Active Context > Default "idle"
  const resolvedAnimation: AnimationName =
    overrideState?.animation ||
    CONTEXT_CONFIGS[activeContext]?.animation ||
    "idle";

  if (!isMounted) return null;

  return (
    <aside
      aria-label="Floating interactive companion avatar"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 lg:bottom-7 lg:right-7 z-30 select-none print:hidden pointer-events-none transition-all duration-300 ${
        isOverlayOpen ? "opacity-0 pointer-events-none scale-90" : "opacity-100"
      }`}
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
        right: "calc(1.25rem + env(safe-area-inset-right, 0px))",
      }}
    >
      <div className="relative flex flex-col items-end">
        {/* 1. Contextual Pop Art Comic-Cloud Speech Bubble */}
        {speechMessage && (
          <div
            role="status"
            aria-live="polite"
            className="pointer-events-auto mb-2 mr-0 sm:mr-1 animate-bubble-pop max-w-[calc(100vw-2.5rem)] sm:max-w-[240px]"
          >
            <div className="relative w-[210px] sm:w-[230px] max-w-full h-[78px] sm:h-[84px] filter drop-shadow-[3px_3px_0px_#0A0A0A]">
              {/* Authentic Pop-Art Scalloped Comic Cloud Outline */}
              <svg
                viewBox="0 0 230 84"
                className="w-full h-full block overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Cloud body lobes */}
                <path
                  d="M 32 22 A 18 18 0 0 1 64 12 A 22 22 0 0 1 106 10 A 22 22 0 0 1 148 10 A 18 18 0 0 1 184 14 A 18 18 0 0 1 210 30 A 18 18 0 0 1 216 50 A 18 18 0 0 1 198 64 A 18 18 0 0 1 176 66 A 18 18 0 0 1 142 68 A 20 20 0 0 1 98 68 A 18 18 0 0 1 54 66 A 18 18 0 0 1 24 54 A 18 18 0 0 1 16 36 A 18 18 0 0 1 32 22 Z"
                  fill="#FAF7EE"
                  stroke="#0A0A0A"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                {/* Comic trailing cloud pointer puffs directed toward the avatar */}
                <circle cx="184" cy="74" r="5" fill="#FAF7EE" stroke="#0A0A0A" strokeWidth="2.2" />
                <circle cx="194" cy="81" r="3" fill="#FAF7EE" stroke="#0A0A0A" strokeWidth="1.8" />
                {/* Small restrained Cyber Yellow Pop-Art spark accent */}
                <path
                  d="M 28 8 L 30 13 L 35 15 L 30 17 L 28 22 L 26 17 L 21 15 L 26 13 Z"
                  fill="#FFE600"
                  stroke="#0A0A0A"
                  strokeWidth="1.2"
                />
              </svg>

              {/* Safe Content Area for Message & Close Button */}
              <div className="absolute inset-0 flex items-center justify-between pl-6 pr-4 pt-1.5 pb-4">
                <p className="font-display font-black text-xs sm:text-[13px] text-ink-black leading-snug select-none pr-1">
                  {speechMessage}
                </p>
                <button
                  type="button"
                  onClick={dismissSpeechBubble}
                  aria-label="Dismiss speech bubble"
                  className="min-w-[32px] min-h-[32px] flex items-center justify-center p-1.5 -mr-1 text-ink-black/70 hover:text-ink-black active:scale-95 cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black"
                >
                  <X className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. Floating Animated Avatar Character (Independent, No Card, Transparent Background) */}
        <button
          type="button"
          onClick={handleAvatarClick}
          aria-label={`Interactive companion avatar, currently ${resolvedAnimation}. Click to interact.`}
          className="pointer-events-auto relative cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 rounded-full p-0.5 group"
        >
          <div
            className={`w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] md:w-[92px] md:h-[92px] lg:w-[104px] lg:h-[104px] flex items-center justify-center ${
              prefersReducedMotion ? "" : "animate-avatar-float"
            } group-hover:scale-105 active:scale-95 transition-transform duration-200 motion-reduce:transform-none`}
          >
            <Onee
              animation={resolvedAnimation}
              playing={!prefersReducedMotion}
              viewBox="-118 -98 236 236"
              size="100%"
              className="w-full h-full drop-shadow-none"
            />
          </div>
        </button>
      </div>
    </aside>
  );
}

export default FloatingAvatar;
