import { getPayload } from "payload";
import type { SanitizedConfig } from "payload";

import { skillLevels, techStack, testimonials } from "./shared/config/profile.ts";
import { projects } from "./shared/config/projects.ts";
import { siteConfig } from "./shared/config/site.ts";

const experiences = [
  {
    period: "2024 - Aujourd'hui",
    title: "Developpeur Fullstack",
    company: "Projets independants",
    achievements: [
      "Construction d'applications fullstack avec Next.js, NestJS, PostgreSQL et Docker.",
      "Conception d'API backend avec authentification, validation et frontieres de services claires.",
      "Exploration de workflows produit IA avec OpenAI API, concepts RAG et bases de recherche vectorielle.",
    ],
  },
  {
    period: "2022 - 2024",
    title: "Ingenieur Backend",
    company: "Apprentissage applique et projets de production",
    achievements: [
      "Developpement d'API REST avec Spring Boot, Java, Node.js et NestJS.",
      "Modelisation de donnees relationnelles pour job boards, livraison, chat et projets analytiques.",
      "Ajout de tests, workflows Docker et structures de projet orientees CI.",
    ],
  },
  {
    period: "2020 - 2022",
    title: "Developpeur Web",
    company: "Projets frontend et data",
    achievements: [
      "Construction d'interfaces responsives avec React, TypeScript et TailwindCSS.",
      "Creation de projets d'analyse de donnees avec SQL, Python, Pandas et Power BI.",
      "Amelioration de la structure UI, du routing, des composants reutilisables et des layouts dashboard.",
    ],
  },
];

const profile = {
  name: siteConfig.name,
  logo: siteConfig.logo,
  role: siteConfig.role,
  intro: "Je construis des applications web scalables, des systemes backend modernes et des produits data-driven.",
  email: siteConfig.email,
  location: siteConfig.location,
  roles: [
    { label: "Developpeur Fullstack" },
    { label: "Ingenieur Backend" },
    { label: "Passionne IA" },
  ],
  expertise: [
    { label: "Architecture logicielle" },
    { label: "Clean Architecture" },
    { label: "Systemes scalables" },
    { label: "Strategie de test" },
    { label: "Deploiement cloud" },
    { label: "Intelligence artificielle" },
  ],
};

export async function script(config: SanitizedConfig) {
  const payload = await getPayload({ config });
  console.log("Seeding portfolio content...");

  const existingProfile = await payload.findGlobal({ slug: "profile" });
  await payload.updateGlobal({
    slug: "profile",
    data: {
      ...profile,
      email: existingProfile.email || profile.email,
      location: existingProfile.location || profile.location,
    },
  });
  console.log("Globals seeded.");

  const existingSettings = await payload.findGlobal({ slug: "site-settings" });
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      socials: existingSettings.socials || siteConfig.socials,
      navigation: siteConfig.nav,
      seo: {
        title: "Yoann Lasm | Developpeur Fullstack",
        description: "Portfolio de developpeur fullstack, ingenieur backend et passionne d'IA.",
      },
    },
  });

  for (const [index, project] of projects.entries()) {
    const existing = await payload.find({
      collection: "projects",
      limit: 1,
      where: {
        slug: {
          equals: project.slug,
        },
      },
    });
    const data = {
      title: project.title,
      slug: project.slug,
      year: project.year,
      category: project.category,
      featured: index < 4,
      summary: project.summary,
      outcome: project.outcome,
      role: project.role,
      gradient: project.gradient,
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
      stack: project.stack.map((label) => ({ label })),
      metrics: project.metrics,
      highlights: project.highlights.map((text) => ({ text })),
    };

    if (existing.docs[0]) {
      await payload.update({ collection: "projects", id: existing.docs[0].id, data });
    } else {
      await payload.create({ collection: "projects", data });
    }
  }
  console.log(`Projects seeded: ${projects.length}`);

  for (const [index, experience] of experiences.entries()) {
    const existing = await payload.find({
      collection: "experiences",
      limit: 1,
      where: {
        order: {
          equals: index,
        },
      },
    });
    const data = {
      title: experience.title,
      company: experience.company,
      period: experience.period,
      order: index,
      achievements: experience.achievements.map((text) => ({ text })),
    };

    if (existing.docs[0]) {
      await payload.update({ collection: "experiences", id: existing.docs[0].id, data });
    } else {
      await payload.create({ collection: "experiences", data });
    }
  }
  console.log(`Experiences seeded: ${experiences.length}`);

  for (const [index, skill] of skillLevels.entries()) {
    const existing = await payload.find({
      collection: "skills",
      limit: 1,
      where: {
        order: {
          equals: index,
        },
      },
    });
    const data = { ...skill, order: index };

    if (existing.docs[0]) {
      await payload.update({ collection: "skills", id: existing.docs[0].id, data });
    } else {
      await payload.create({ collection: "skills", data });
    }
  }
  console.log(`Skills seeded: ${skillLevels.length}`);

  for (const [index, group] of techStack.entries()) {
    const existing = await payload.find({
      collection: "tech-stacks",
      limit: 1,
      where: {
        order: {
          equals: index,
        },
      },
    });
    const data = {
      category: group.category,
      icon: group.icon,
      description: group.description,
      order: index,
      items: group.items.map((label) => ({ label })),
    };

    if (existing.docs[0]) {
      await payload.update({ collection: "tech-stacks", id: existing.docs[0].id, data });
    } else {
      await payload.create({ collection: "tech-stacks", data });
    }
  }
  console.log(`Tech stack groups seeded: ${techStack.length}`);

  for (const [index, testimonial] of testimonials.entries()) {
    const existing = await payload.find({
      collection: "testimonials",
      limit: 1,
      where: {
        order: {
          equals: index,
        },
      },
    });
    const data = { ...testimonial, order: index };

    if (existing.docs[0]) {
      await payload.update({ collection: "testimonials", id: existing.docs[0].id, data });
    } else {
      await payload.create({ collection: "testimonials", data });
    }
  }
  console.log(`Testimonials seeded: ${testimonials.length}`);

  payload.logger.info("Portfolio content seeded.");
}
