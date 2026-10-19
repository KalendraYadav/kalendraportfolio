import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import { Navbar, Footer, SkipToContent } from "@/components/layout";
import { FloatingAvatar } from "@/components/avatar";
import { siteConfig } from "@/config/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kalendrayadav.dev";
const siteUrl = rawSiteUrl.replace(/\/+$/, "");

export const viewport: Viewport = {
  themeColor: "#FFE600",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "Kalendra Yadav",
    "Full-Stack Software Engineer",
    "Next.js Developer",
    "TypeScript",
    "React 19",
    "Tailwind CSS 4",
    "Systems Architecture",
    "Neo-Brutalism",
    "Interactive Portfolio",
    "Web Performance",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.tagline,
    siteName: siteConfig.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.tagline,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/brand/logo-icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/images/brand/logo-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body bg-canvas-cream text-ink-black antialiased selection:bg-cyber-yellow selection:text-ink-black">
        <SkipToContent />
        <Navbar />
        {children}
        <FloatingAvatar />
        <Footer />
      </body>
    </html>
  );
}
