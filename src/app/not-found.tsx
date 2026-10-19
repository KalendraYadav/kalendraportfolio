import React from "react";
import { Button } from "@/components/ui";
import { Home, ArrowRight, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex-1 flex items-center justify-center bg-canvas-cream px-4 sm:px-6 py-16 sm:py-24 outline-none"
    >
      <div className="max-w-xl w-full border-4 border-ink-black bg-surface-white p-6 sm:p-10 shadow-brutal-xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink-black bg-cyber-yellow border-2 border-ink-black px-3 py-1 shadow-brutal-sm">
          <AlertTriangle className="w-4 h-4 text-ink-black" aria-hidden="true" />
          <span>HTTP 404 // NOT FOUND</span>
        </div>

        <div className="space-y-2">
          <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-ink-black leading-none">
            Page Not Found.
          </h1>
          <p className="font-body text-sm sm:text-base text-ink-black/80 leading-relaxed max-w-md mx-auto">
            The page you are looking for does not exist, has been moved, or has an invalid URL.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            className="w-full sm:w-auto text-center"
          >
            RETURN HOME
          </Button>
          <Button
            href="/projects"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            className="w-full sm:w-auto text-center"
          >
            BROWSE PROJECTS
          </Button>
        </div>
      </div>
    </main>
  );
}
