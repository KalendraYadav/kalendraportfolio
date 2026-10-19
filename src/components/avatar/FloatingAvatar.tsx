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
import { X } from "lucide-react";

// Dynamically import Onee on client side to ensure optimal SSR performance and zero hydration mismatch
const Onee = dynamic(() => import("./Onee").then((mod) => mod.Onee), {
  ssr: false,
});

interface SectionConfig {
  animation: AnimationName;
  message: string;
}

const SECTION_CONFIGS: Record<string, SectionConfig> = {
  home: {
    animation: "excited",
    message: "Hey, welcome!",
  },
  intro: {
    animation: "curious",
    message: "A little about me.",
  },
  "how-i-build": {
    animation: "thinking",
    message: "Building beyond the happy path.",
  },
  "featured-work": {
    animation: "working",
    message: "Take a look at what I've built.",
  },
  "closing-cta": {
    animation: "celebrate",
    message: "Let's build something useful.",
  },
};

const ROUTE_CONFIGS: Record<string, SectionConfig> = {
  "/projects": {
    animation: "working",
    message: "Take a look at what I've built.",
  },
  "/skills": {
    animation: "proud",
    message: "Here's what I work with.",
  },
  "/experience": {
    animation: "listening",
    message: "Here's what I've been learning.",
  },
  "/about": {
    animation: "curious",
    message: "A little about my background.",
  },
  "/contact": {
    animation: "happy",
    message: "Let's talk!",
  },
};

const DEFAULT_CONFIG: SectionConfig = {
  animation: "idle",
  message: "Always exploring!",
};

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

function getRouteConfig(path: string): SectionConfig {
  for (const [route, config] of Object.entries(ROUTE_CONFIGS)) {
    if (path.startsWith(route)) {
      return config;
    }
  }
  return SECTION_CONFIGS.home;
}

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

  const [activeSectionId, setActiveSectionId] = useState<string>("home");
  const [prevPathname, setPrevPathname] = useState<string>(pathname);

  // Transient interaction overrides (hover, click, contact triggers)
  const [overrideState, setOverrideState] = useState<{
    animation: AnimationName;
    expiresAt?: number;
  } | null>(null);

  // Speech bubble state
  const [speechMessage, setSpeechMessage] = useState<string | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

  // Refs for tracking cooldowns and timers without unnecessary re-renders
  const lastBubbleTimeRef = useRef<number>(0);
  const shownSectionsRef = useRef<Set<string>>(new Set());
  const bubbleDismissTimerRef = useRef<NodeJS.Timeout | null>(null);
  const overrideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize route change during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setActiveSectionId("route:" + pathname);
  }

  // Trigger speech bubble with auto-dismiss
  const triggerSpeech = useCallback(
    (message: string, animation?: AnimationName, durationMs: number = 3600) => {
      if (bubbleDismissTimerRef.current) {
        clearTimeout(bubbleDismissTimerRef.current);
      }
      if (overrideTimerRef.current) {
        clearTimeout(overrideTimerRef.current);
      }

      setSpeechMessage(message);
      lastBubbleTimeRef.current = Date.now();

      if (animation) {
        setOverrideState({
          animation,
          expiresAt: Date.now() + durationMs,
        });

        overrideTimerRef.current = setTimeout(() => {
          setOverrideState(null);
        }, durationMs);
      }

      bubbleDismissTimerRef.current = setTimeout(() => {
        setSpeechMessage(null);
      }, durationMs);
    },
    []
  );

  const dismissSpeechBubble = useCallback(() => {
    if (bubbleDismissTimerRef.current) {
      clearTimeout(bubbleDismissTimerRef.current);
    }
    setSpeechMessage(null);
  }, []);

  // 1. Initial greeting on page load (once)
  useEffect(() => {
    if (!isMounted) return;

    const initialTimer = setTimeout(() => {
      const isHomepage = window.location.pathname === "/";
      const initialMessage = isHomepage
        ? SECTION_CONFIGS.home.message
        : getRouteConfig(window.location.pathname).message;

      triggerSpeech(initialMessage, isHomepage ? "excited" : undefined, 3800);
      shownSectionsRef.current.add(isHomepage ? "home" : window.location.pathname);
    }, 800);

    return () => clearTimeout(initialTimer);
  }, [isMounted, triggerSpeech]);

  // 2. Overlay detection (modal dialogs & mobile menu)
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

  // 3. Contextual scroll detection using Intersection Observer
  useEffect(() => {
    if (!isMounted) return;

    const ratioMap = new Map<string, number>();
    const targetSectionIds = [
      "home",
      "intro",
      "how-i-build",
      "featured-work",
      "closing-cta",
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          ratioMap.set(id, entry.intersectionRatio);
        } else {
          ratioMap.delete(id);
        }
      });

      // Deterministic selection: highest visible area
      let bestId: string | null = null;
      let highestRatio = 0.12;

      ratioMap.forEach((ratio, id) => {
        if (ratio > highestRatio) {
          highestRatio = ratio;
          bestId = id;
        }
      });

      if (bestId && bestId !== activeSectionId) {
        setActiveSectionId(bestId);

        // Check if we should show a contextual speech bubble
        const now = Date.now();
        const hasShownSection = shownSectionsRef.current.has(bestId);
        const cooldownPassed = now - lastBubbleTimeRef.current > 5000;

        if (!hasShownSection && cooldownPassed && SECTION_CONFIGS[bestId]) {
          shownSectionsRef.current.add(bestId);
          triggerSpeech(SECTION_CONFIGS[bestId].message, undefined, 3500);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-10% 0px -25% 0px",
      threshold: [0.15, 0.35, 0.6, 0.8],
    });

    targetSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [isMounted, activeSectionId, triggerSpeech]);

  // 4. Global interaction delegation for "Get in Touch" buttons & email actions
  useEffect(() => {
    if (!isMounted) return;

    // Hover / focus detection for welcoming expression
    const handlePointerOver = (e: MouseEvent | FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isContactElement =
        target.closest<HTMLElement>(
          'a[href="/contact"], a[href^="mailto:"], button[aria-label*="contact" i], button[aria-label*="email" i]'
        ) || target.textContent?.toLowerCase().includes("get in touch");

      if (isContactElement) {
        setOverrideState({ animation: "happy" });
      }
    };

    const handlePointerOut = (e: MouseEvent | FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isContactElement =
        target.closest<HTMLElement>(
          'a[href="/contact"], a[href^="mailto:"], button[aria-label*="contact" i], button[aria-label*="email" i]'
        ) || target.textContent?.toLowerCase().includes("get in touch");

      if (isContactElement) {
        setOverrideState((prev) => (prev?.animation === "happy" ? null : prev));
      }
    };

    // Click detection for "Get in Touch" and email actions
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Email action (copy email or mailto link)
      const isEmailAction =
        target.closest<HTMLElement>(
          'button[aria-label*="email" i], a[href^="mailto:"]'
        ) || target.textContent?.toLowerCase().includes("copy email");

      if (isEmailAction) {
        triggerSpeech("Thanks for reaching out!", "celebrate", 4000);
        return;
      }

      // "Get in Touch" action
      const isGetInTouch =
        target.closest<HTMLElement>('a[href="/contact"]') ||
        target.textContent?.toLowerCase().includes("get in touch");

      if (isGetInTouch) {
        triggerSpeech("Let's talk!", "excited", 3500);
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
    };
  }, [isMounted, triggerSpeech]);

  // Click on avatar directly
  const handleAvatarClick = () => {
    const playfulMessages = [
      "Glad you're exploring!",
      "Building something great!",
      "Always curious!",
      "Crafting digital systems!",
    ];
    const randomMsg =
      playfulMessages[Math.floor(Math.random() * playfulMessages.length)];
    triggerSpeech(randomMsg, "playful", 3000);
  };

  // Determine active animation
  let resolvedAnimation: AnimationName = DEFAULT_CONFIG.animation;
  if (overrideState?.animation) {
    resolvedAnimation = overrideState.animation;
  } else if (activeSectionId.startsWith("route:")) {
    const route = activeSectionId.replace("route:", "");
    resolvedAnimation = getRouteConfig(route).animation;
  } else if (SECTION_CONFIGS[activeSectionId]) {
    resolvedAnimation = SECTION_CONFIGS[activeSectionId].animation;
  }

  if (!isMounted) return null;

  return (
    <aside
      aria-label="Floating interactive companion avatar"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 select-none print:hidden pointer-events-none transition-all duration-300 ${
        isOverlayOpen ? "opacity-0 pointer-events-none scale-90" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-end">
        {/* 1. Contextual Pop Art Comic Speech Bubble */}
        {speechMessage && (
          <div
            role="status"
            aria-live="polite"
            className="pointer-events-auto mb-2 mr-1 sm:mr-2 animate-bubble-pop max-w-[210px] sm:max-w-[250px]"
          >
            <div className="relative bg-surface-white text-ink-black border-2 border-ink-black px-3 py-2 shadow-[2.5px_2.5px_0px_#0A0A0A] rounded-none">
              <div className="flex items-start justify-between gap-2">
                <p className="font-display font-bold text-xs sm:text-[13px] text-ink-black leading-snug">
                  {speechMessage}
                </p>
                <button
                  type="button"
                  onClick={dismissSpeechBubble}
                  aria-label="Dismiss speech bubble"
                  className="text-ink-black/60 hover:text-ink-black active:scale-95 p-0.5 -mr-1 -mt-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink-black"
                >
                  <X className="w-3 h-3" aria-hidden="true" />
                </button>
              </div>

              {/* Comic Speech Bubble Pointer (Tail) pointing down toward avatar */}
              <div
                className="absolute -bottom-1.5 right-6 w-2.5 h-2.5 bg-surface-white border-b-2 border-r-2 border-ink-black transform rotate-45"
                aria-hidden="true"
              />
            </div>
          </div>
        )}

        {/* 2. Floating Animated Avatar Character (No Card, No Box, Transparent Background) */}
        <button
          type="button"
          onClick={handleAvatarClick}
          aria-label={`Interactive companion avatar, currently ${resolvedAnimation}. Click to interact.`}
          className="pointer-events-auto relative cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 rounded-full p-0.5 group"
        >
          <div
            className={`w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex items-center justify-center ${
              prefersReducedMotion ? "" : "animate-avatar-float"
            } group-hover:scale-110 active:scale-95 transition-transform duration-200 motion-reduce:transform-none`}
          >
            <Onee
              animation={resolvedAnimation}
              playing={!prefersReducedMotion}
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
