import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact & Collaboration Hub",
  description:
    "Get in touch with Kalendra Yadav regarding full-stack software engineering, systems architecture, and engineering roles.",
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <ContactSection headingAs="h1" />
    </main>
  );
}
