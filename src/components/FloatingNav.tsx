"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { appStoreUrl, siteName } from "@/site";

const navLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
];

export function FloatingNav() {
  const pathname = usePathname() ?? "/";

  const isCurrent = (href: string) =>
    pathname === href || pathname === `${href}/`;

  return (
    <header className="nav-pill-wrap">
      <nav className="nav-pill" aria-label="Primary">
        <Link
          href="/"
          className="nav-pill__brand"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <Image
            src="/brand/logo-mark.svg"
            alt=""
            width={22}
            height={22}
            priority
            aria-hidden="true"
          />
          <span>{siteName}</span>
        </Link>

        <ul className="nav-pill__links">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="nav-pill__link"
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-pill__cta"
        >
          Get app
        </a>
      </nav>
    </header>
  );
}
