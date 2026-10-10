"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/shared/ui/theme-toggle";

import { siteConfig as fallbackSiteConfig } from "@/shared/config/site";
import type { ProfileData, SiteData } from "@/shared/data/portfolio";

type SiteHeaderProps = {
  profile?: ProfileData;
  site?: SiteData;
};

export function SiteHeader({ profile, site = fallbackSiteConfig }: SiteHeaderProps) {
  const pathname = usePathname();
  const logo = profile?.logo || site.logo;

  return (
    <header className="site-header">
      <nav className="portfolio-container site-nav" aria-label="Navigation principale">
        <Link href="/" className="site-logo">{logo}</Link>
        <div className="site-nav-controls">
          <div className="site-nav-links">
            {site.nav.map((item) => {
              const active = pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(`${item.href}/`));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "is-active" : undefined}
                  aria-current={active ? (pathname === item.href ? "page" : "location") : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
