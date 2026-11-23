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
    default: `${siteName} | Trail Navigation and Group Safety for iPhone`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="flex items-center gap-3 text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface p-1.5">
                <span
                  aria-hidden="true"
                  className="block h-full w-full"
                  style={{
                    background: "linear-gradient(180deg, #F0BA42 0%, #DFB556 100%)",
                    WebkitMaskImage: "url(/brand/logo-mark.svg)",
                    maskImage: "url(/brand/logo-mark.svg)",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              </span>
              <span>{siteName}</span>
            </Link>
            <nav aria-label="Main navigation" className="flex items-center gap-2 text-sm font-medium text-muted sm:gap-3">
              <Link
                href="/"
                className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-surface-elevated hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/privacy"
                className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-surface-elevated hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="/support"
                className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-surface-elevated hover:text-foreground"
              >
                Support
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border bg-surface/60">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              2026 {developerName}
            </p>
            <nav aria-label="Footer navigation" className="flex items-center gap-6">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/support" className="transition-colors hover:text-foreground">
                Support
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
