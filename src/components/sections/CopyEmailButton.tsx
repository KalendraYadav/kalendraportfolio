"use client";

import React, { useState, useRef, useEffect } from "react";
import { Copy, Check, AlertCircle } from "lucide-react";

export interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

export function CopyEmailButton({ email, className = "" }: CopyEmailButtonProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">("idle");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopyStatus("success");
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (successful) {
          setCopyStatus("success");
        } else {
          setCopyStatus("error");
        }
      }
    } catch {
      setCopyStatus("error");
    }

    timeoutRef.current = setTimeout(() => {
      setCopyStatus("idle");
    }, 2500);
  };

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy email address ${email} to clipboard`}
        className={`inline-flex items-center justify-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-ink-black px-4 py-2.5 min-h-[44px] w-full sm:w-auto transition-all shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-md active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 ${
          copyStatus === "success"
            ? "bg-accent-green text-surface-white"
            : copyStatus === "error"
            ? "bg-pop-red text-surface-white"
            : "bg-cyber-yellow text-ink-black"
        } ${className}`}
      >
        {copyStatus === "success" ? (
          <>
            <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Copied to Clipboard!</span>
          </>
        ) : copyStatus === "error" ? (
          <>
            <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Copy Failed — Select Manually</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Copy Email Address</span>
          </>
        )}
      </button>

      {/* Screen-reader live status announcement */}
      <span className="sr-only" aria-live="polite">
        {copyStatus === "success"
          ? "Email address copied to clipboard."
          : copyStatus === "error"
          ? "Failed to copy email address. Please copy it manually."
          : ""}
      </span>
    </div>
  );
}
