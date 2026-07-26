import { siteConfig } from "@/shared/config/site";

export const dynamic = "force-static";

export function GET() {
  const body = [
    "Yoann Lasm",
    siteConfig.role,
    "",
    "CV",
    "Je construis des applications web scalables, des systemes backend modernes et des produits data-driven.",
    "",
    "Stack principale",
    "Next.js, React, TypeScript, TailwindCSS, NestJS, Spring Boot, Node.js, Java, PostgreSQL, Prisma, Redis, Docker, AWS, Python, SQL, OpenAI API.",
    "",
    "Focus",
    "Clean Architecture, systemes scalables, tests, cloud, produits data et intelligence artificielle.",
    "",
    `Contact: ${siteConfig.email}`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Disposition": 'attachment; filename="Yoann-Lasm-CV.txt"',
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
