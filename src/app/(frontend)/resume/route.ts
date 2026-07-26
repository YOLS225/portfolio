import { siteConfig } from "@/shared/config/site";

export const dynamic = "force-static";

export function GET() {
  const body = [
    "Yoann Lasm",
    siteConfig.role,
    "",
    "Summary",
    "I build scalable web applications, modern backend systems and data-driven products.",
    "",
    "Core stack",
    "Next.js, React, TypeScript, TailwindCSS, NestJS, Spring Boot, Node.js, Java, PostgreSQL, Prisma, Redis, Docker, AWS, Python, SQL, OpenAI API.",
    "",
    "Focus",
    "Clean Architecture, scalable systems, testing, cloud, data products, and artificial intelligence.",
    "",
    `Contact: ${siteConfig.email}`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Disposition": 'attachment; filename="Yoann-Lasm-Resume.txt"',
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
