import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/shared/ui/site-footer";
import { SiteHeader } from "@/shared/ui/site-header";
import { getProfileData, getSiteData } from "@/shared/data/portfolio";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoann Lasm | Developpeur Fullstack",
  description: "Portfolio de developpeur fullstack, ingenieur backend et passionne d'IA.",
};

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [profile, site] = await Promise.all([getProfileData(), getSiteData()]);

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader profile={profile} site={site} />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter profile={profile} site={site} />
      </body>
    </html>
  );
}
