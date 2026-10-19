"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button, Badge } from "@/components/ui";
import { Menu, X, FileText } from "lucide-react";

const getNavTrigger = (href: string) => {
  if (href === "/") return "nav-home";
  if (href.includes("/projects")) return "nav-projects";
  if (href.includes("/skills")) return "nav-skills";
  if (href.includes("/experience")) return "nav-experience";
  if (href.includes("/achievements")) return "nav-achievements";
  if (href.includes("/about")) return "nav-about";
  if (href.includes("/contact")) return "nav-contact";
  return undefined;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menu automatically whenever route changes (React recommended pattern)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Close menu on Escape key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isOpen) {
          closeMenu();
        }
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Automatically close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-surface-white border-b-3 border-ink-black shadow-brutal-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Approved Brand Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              aria-label={`${siteConfig.name} - Home`}
              data-avatar-trigger="nav-home"
              className="inline-flex items-center p-1 border-2 border-transparent hover:border-ink-black hover:bg-cyber-yellow/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black transition-all select-none"
            >
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={50}
                height={40}
                priority
                className="h-9 md:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-1.5 xl:gap-3.5"
            >
              {siteConfig.navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-avatar-trigger={getNavTrigger(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-mono text-xs xl:text-sm font-bold uppercase tracking-wider px-2 xl:px-2.5 py-1.5 transition-all inline-flex items-center gap-1.5 border-2 ${
                      isActive
                        ? "bg-cyber-yellow text-ink-black border-ink-black shadow-brutal-sm"
                        : "border-transparent text-ink-black hover:bg-cyber-yellow hover:border-ink-black"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge size="sm" variant="pink">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href={siteConfig.resume.url}
                external
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                icon={<FileText className="w-4 h-4" />}
                data-avatar-trigger="nav-resume"
                aria-label="Open Kalendra Yadav Résumé PDF in a new tab"
                title="Open Résumé (PDF) in new tab"
              >
                {siteConfig.resume.label}
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                className="p-2 border-2 border-ink-black bg-surface-white hover:bg-cyber-yellow active:translate-x-0.5 active:translate-y-0.5 transition-all text-ink-black min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black"
              >
                {isOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Backdrop & Drawer */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 top-16 md:top-20 bg-ink-black/60 backdrop-blur-none z-30 lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="relative z-40 lg:hidden border-t-3 border-ink-black bg-canvas-cream px-4 py-6 shadow-brutal-md space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
            <div className="flex flex-col space-y-2">
              {siteConfig.navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    data-avatar-trigger={getNavTrigger(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-mono text-base font-bold uppercase tracking-wider p-3 border-2 border-ink-black transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-cyber-yellow text-ink-black shadow-brutal-sm"
                        : "bg-surface-white text-ink-black hover:bg-cyber-yellow"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <Badge size="sm" variant="pink">
                        {item.badge}
                      </Badge>
                    ) : (
                      <span className="font-mono text-xs text-text-muted">
                        {item.sectionStatus === "upcoming" ? "// UPCOMING" : "➔"}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t-2 border-ink-black">
              <Button
                href={siteConfig.resume.url}
                external
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                fullWidth
                icon={<FileText className="w-4 h-4" />}
                data-avatar-trigger="nav-resume"
                onClick={closeMenu}
                aria-label="Open Kalendra Yadav Résumé PDF in a new tab"
                title="Open Résumé (PDF) in new tab"
              >
                {"VIEW RÉSUMÉ (PDF)"}
              </Button>
            </div>
          </nav>
        </>
      )}
    </header>
    </>
  );
}
