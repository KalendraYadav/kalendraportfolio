import { Button, Badge, Marquee } from "@/components/ui";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas-cream flex flex-col justify-between selection:bg-cyber-yellow">
      {/* Top Banner Marquee */}
      <Marquee
        items={[
          "KALENDRA YADAV",
          "FULL-STACK SOFTWARE ENGINEER",
          "PHASE 3 DESIGN SYSTEM",
          "UI PRIMITIVES VERIFIED",
          "WCAG 2.2 AA",
        ]}
        variant="dark"
      />

      {/* Hero Announcement Block */}
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-center space-y-8">
        <div className="flex justify-center">
          <Badge variant="yellow" tilt="left" icon={<Sparkles className="w-3.5 h-3.5" />}>
            {"PHASE 3 // BASE DESIGN SYSTEM ESTABLISHED"}
          </Badge>
        </div>

        <div className="space-y-4">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-text-muted uppercase">
            {"// DEVELOPER PORTFOLIO FOUNDATION"}
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-ink-black leading-[0.95]">
            KALENDRA YADAV
          </h1>
          <p className="font-body text-base sm:text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
            The foundational design system, color tokens, typography hierarchy, and reusable neo-brutalist UI primitives are implemented and ready for inspection.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/design-system"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            View Design System Preview
          </Button>
        </div>
      </div>

      {/* Bottom Colophon */}
      <footer className="border-t-3 border-ink-black py-4 bg-surface-white text-center font-mono text-xs text-text-muted">
        {"© 2026 Kalendra Yadav // Neo-Brutalism + Pop Art Portfolio System"}
      </footer>
    </main>
  );
}
