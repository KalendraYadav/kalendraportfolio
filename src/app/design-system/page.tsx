import React from "react";
import {
  Button,
  Card,
  Badge,
  SectionHeading,
  Marquee,
} from "@/components/ui";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Code2,
  Sparkles,
  Terminal,
  Layers,
} from "lucide-react";

export default function DesignSystemPreviewPage() {
  const marqueeItems = [
    "NEO-BRUTALISM",
    "POP ART EDITORIAL",
    "NEXT.JS 16",
    "REACT 19",
    "TAILWIND CSS 4",
    "HARD SHADOWS",
    "3PX SOLID BORDERS",
    "ACCESSIBLE WCAG AA",
  ];

  return (
    <main id="main-content" className="min-h-screen bg-canvas-cream text-ink-black pb-24">
      {/* Dev Notice Banner */}
      <div className="bg-pop-pink text-surface-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 text-center border-b-3 border-ink-black flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>
          [DEV PREVIEW: PHASE 3 DESIGN SYSTEM PRIMITIVES & TOKENS]
        </span>
      </div>

      {/* Marquee Banner */}
      <Marquee items={marqueeItems} variant="dark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <SectionHeading
            number="// SPEC 01"
            title="Design System & UI Primitives"
            description="Isolated development preview verifying color tokens, typography scales, hard shadows, and atomic brutalist components."
            badge={
              <Badge variant="cyan" tilt="right">
                VERIFIED READY
              </Badge>
            }
          />
        </div>

        {/* 1. Color Palette */}
        <section aria-labelledby="colors-heading" className="space-y-6">
          <SectionHeading
            number="// 01"
            title="Color Tokens & Contrast"
            as="h2"
            description="High-contrast neo-brutalist palette engineered for visual impact and WCAG 2.2 AA compliance."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: "Cyber Yellow", hex: "#FFE600", bg: "bg-cyber-yellow", text: "text-ink-black", role: "Primary Canvas / CTAs" },
              { name: "Ink Black", hex: "#0A0A0A", bg: "bg-ink-black", text: "text-surface-white", role: "Borders / Outlines / Text" },
              { name: "Pure White", hex: "#FFFFFF", bg: "bg-surface-white", text: "text-ink-black", role: "Card Canvas / Modals" },
              { name: "Canvas Cream", hex: "#FAF7EE", bg: "bg-canvas-cream", text: "text-ink-black", role: "Reading Surface" },
              { name: "Cobalt Blue", hex: "#0047FF", bg: "bg-cobalt-blue", text: "text-surface-white", role: "Pop Art Duotone Mid" },
              { name: "Pop Red", hex: "#FF3333", bg: "bg-pop-red", text: "text-surface-white", role: "Pop Art Duotone High" },
              { name: "Cyber Cyan", hex: "#00E5FF", bg: "bg-cyber-cyan", text: "text-ink-black", role: "Frame Backing / Active" },
              { name: "Pop Pink", hex: "#FF2A85", bg: "bg-pop-pink", text: "text-surface-white", role: "Tape Stickers / Badges" },
              { name: "Accent Green", hex: "#22C55E", bg: "bg-accent-green", text: "text-ink-black", role: "Live Status / Success" },
              { name: "Muted Text", hex: "#525252", bg: "bg-neutral-600", text: "text-surface-white", role: "Metadata / Captions" },
            ].map((color) => (
              <div
                key={color.name}
                className="border-3 border-ink-black shadow-brutal-sm p-3 bg-surface-white space-y-2"
              >
                <div
                  className={`h-14 w-full border-2 border-ink-black ${color.bg} flex items-center justify-center font-mono font-bold text-xs ${color.text}`}
                >
                  {color.hex}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-ink-black">
                    {color.name}
                  </div>
                  <div className="font-mono text-[11px] text-text-muted">
                    {color.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Typography Scale */}
        <section aria-labelledby="typography-heading" className="space-y-6">
          <SectionHeading
            number="// 02"
            title="Typography Hierarchy"
            as="h2"
            description="Display font (Space Grotesk), readable body (Inter), and technical metadata font (JetBrains Mono)."
          />
          <Card borderWidth="3" shadow="md" variant="white">
            <div className="space-y-6 divide-y-2 divide-ink-black/10">
              <div className="pb-4">
                <span className="font-mono text-xs uppercase text-text-muted">
                  Display / Space Grotesk Black
                </span>
                <p className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tighter text-ink-black">
                  BOLD INTERFACES
                </p>
              </div>
              <div className="pt-4 pb-4">
                <span className="font-mono text-xs uppercase text-text-muted">
                  H2 / Space Grotesk Bold
                </span>
                <p className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-ink-black">
                  ENGINEERING SHOWCASE & SYSTEMS
                </p>
              </div>
              <div className="pt-4 pb-4">
                <span className="font-mono text-xs uppercase text-text-muted">
                  Body Lead / Inter Medium
                </span>
                <p className="font-body text-lg text-ink-black leading-relaxed">
                  Architecting full-stack web applications with uncompromising visual design, verified metrics, and high-performance frontend engineering.
                </p>
              </div>
              <div className="pt-4">
                <span className="font-mono text-xs uppercase text-text-muted">
                  Monospace / JetBrains Mono Bold
                </span>
                <p className="font-mono text-sm sm:text-base font-bold text-ink-black uppercase tracking-wider">
                  const ARCHITECTURE = &#123; stack: [&quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Tailwind&quot;] &#125;;
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* 3. Reusable Buttons */}
        <section aria-labelledby="buttons-heading" className="space-y-6">
          <SectionHeading
            number="// 03"
            title="Button Primitives"
            as="h2"
            description="Tactile push-button physics: lifts on hover, depresses into page on click, with accessible focus states."
          />
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Primary Yellow
              </Button>
              <Button variant="secondary" icon={<ExternalLink className="w-4 h-4" />}>
                Secondary White
              </Button>
              <Button variant="accent" icon={<Sparkles className="w-4 h-4" />}>
                Accent Pink
              </Button>
              <Button variant="cyan" icon={<Code2 className="w-4 h-4" />}>
                Cyber Cyan
              </Button>
              <Button variant="outline">
                Outline
              </Button>
              <Button variant="dark" icon={<Download className="w-4 h-4" />}>
                Dark Ink
              </Button>
              <Button variant="primary" disabled>
                Disabled State
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <Button size="sm" variant="primary">
                Small (sm)
              </Button>
              <Button size="md" variant="primary">
                Medium (md)
              </Button>
              <Button size="lg" variant="primary" icon={<ArrowRight className="w-5 h-5" />}>
                Large CTA (lg)
              </Button>
            </div>
          </div>
        </section>

        {/* 4. Badges & Sticker Labels */}
        <section aria-labelledby="badges-heading" className="space-y-6">
          <SectionHeading
            number="// 04"
            title="Badges & Tape Stickers"
            as="h2"
            description="Categorization pills, live status indicators, and angled pop-art sticker labels."
          />
          <div className="flex flex-wrap gap-4 items-center">
            <Badge variant="yellow" tilt="left">
              HOT // TECH
            </Badge>
            <Badge variant="pink" tilt="right">
              NEW FEATURE
            </Badge>
            <Badge variant="cyan">
              TYPESCRIPT 5.9
            </Badge>
            <Badge variant="green" statusDot>
              STATUS: LIVE
            </Badge>
            <Badge variant="dark" statusDot>
              SYSTEM ONLINE
            </Badge>
            <Badge variant="red" icon={<Terminal className="w-3.5 h-3.5" />}>
              API v2.0
            </Badge>
            <Badge variant="outline">
              OPEN SOURCE
            </Badge>
            <Badge size="sm" variant="yellow">
              Small Tag
            </Badge>
          </div>
        </section>

        {/* 5. Cards & Containers */}
        <section aria-labelledby="cards-heading" className="space-y-6">
          <SectionHeading
            number="// 05"
            title="Card Containers"
            as="h2"
            description="Solid 3px/4px border rectangular containers with zero-blur hard shadows and optional retro window headers."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              headerTitle="TERMINAL // KY-DEV"
              showWindowControls
              headerBadge={
                <Badge size="sm" variant="green">
                  ACTIVE
                </Badge>
              }
              shadow="md"
              variant="white"
            >
              <h3 className="font-display font-bold text-xl uppercase mb-2">
                Retro Window Card
              </h3>
              <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
                Structured with solid top window bar and standard hard drop shadow. Perfect for technical case studies and code breakdowns.
              </p>
              <Button size="sm" variant="primary">
                Action Link
              </Button>
            </Card>

            <Card
              variant="yellow"
              shadow="lg"
              interactive
              borderWidth="3"
            >
              <Badge variant="dark" tilt="left" className="mb-3">
                HIGHLIGHT
              </Badge>
              <h3 className="font-display font-black text-2xl uppercase mb-2">
                Interactive Card
              </h3>
              <p className="font-body text-sm text-ink-black leading-relaxed mb-4">
                Hover over this card to observe the tactile offset lift (`-translate-x-0.5 -translate-y-0.5`) and deepened shadow.
              </p>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Card>

            <Card
              variant="cyan"
              shadow="md"
              borderWidth="3"
            >
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-ink-black" aria-hidden="true" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  COMPONENT SPEC
                </span>
              </div>
              <h3 className="font-display font-bold text-xl uppercase mb-2">
                Cyber Cyan Block
              </h3>
              <p className="font-body text-sm text-ink-black leading-relaxed mb-4">
                High-visibility container for secondary callouts, metrics, or architecture notes with maximum contrast.
              </p>
              <Badge variant="dark" size="sm">
                WCAG AAA: 13.4:1
              </Badge>
            </Card>
          </div>
        </section>

        {/* 6. Marquee Ticker Variations */}
        <section aria-labelledby="marquee-heading" className="space-y-6">
          <SectionHeading
            number="// 06"
            title="Marquee Ticker Banner"
            as="h2"
            description="Pure CSS infinite marquee. Automatically pauses on hover and keyboard focus, and adapts to prefers-reduced-motion."
          />
          <div className="space-y-4">
            <Marquee
              items={["FULL-STACK", "SYSTEMS DESIGN", "ACCESSIBLE UI", "PERFORMANCE FIRST"]}
              variant="yellow"
            />
            <Marquee
              items={["K. YADAV // 2026", "REACT 19", "NEXT.JS 16", "TAILWIND CSS 4"]}
              variant="white"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
