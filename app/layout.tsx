import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "../styles/utilities.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: {
    default: "Manali Potekar | Full-Stack Developer",
    template: "%s | Alex Carter"
  },
  description:
    "Software engineer portfolio showcasing full-stack projects, frontend craft, and backend architecture.",
  keywords: [
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript Engineer",
    "Software Engineer"
  ],
  openGraph: {
    title: "Manali Potekar | Full-Stack Developer",
    description: "Explore projects, skills, and experience for Alex Carter, a full-stack software engineer.",
    url: "https://portfolio.example.com",
    siteName: "Manali Potekar Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Manali Potekar | Full-Stack Developer",
    description: "Portfolio website built with Next.js, TypeScript, and Tailwind CSS."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-[family-name:var(--font-space-grotesk)]`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored ? stored : (prefersDark ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
