import type { Metadata } from "next";
import Link from "next/link";
import {
  developerName,
  siteDescription,
  siteName,
  siteUrl,
} from "@/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Offline Trail Navigation and Group Safety`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="border-b border-border bg-background/95">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
            >
              {siteName}
            </Link>
            <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm text-muted">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/support" className="hover:text-foreground transition-colors">
                Support
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border bg-surface/50">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              {siteName} by {developerName}
            </p>
            <nav aria-label="Footer navigation" className="flex items-center gap-6">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/support" className="hover:text-foreground transition-colors">
                Support
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
