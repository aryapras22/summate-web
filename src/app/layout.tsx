import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import {
  contactEmail,
  developerName,
  siteDescription,
  siteName,
  siteUrl,
} from "@/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
    <html lang="en" className="dark antialiased">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <FloatingNav />

        <main id="main-content">{children}</main>

        <footer className="foot-stmt">
          <p className="foot-stmt__line">
            Your trail stays on your iPhone.
          </p>
          <div className="foot-stmt__meta">
            <div className="foot-stmt__brand">
              <span className="foot-stmt__wordmark">
                <Image
                  src="/brand/logo-mark.svg"
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden="true"
                />
                <span>{siteName}</span>
              </span>
              <span>2026 {developerName}</span>
            </div>

            <nav aria-label="Footer" className="foot-stmt__links">
              <Link href="/privacy" className="foot-stmt__link">
                Privacy
              </Link>
              <Link href="/support" className="foot-stmt__link">
                Support
              </Link>
              <a
                href={`mailto:${contactEmail}`}
                className="foot-stmt__link"
              >
                Contact
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
