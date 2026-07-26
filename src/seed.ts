import { getPayload } from "payload";
import type { SanitizedConfig } from "payload";

import { skillLevels, techStack, testimonials } from "./shared/config/profile.ts";
import { projects } from "./shared/config/projects.ts";
import { siteConfig } from "./shared/config/site.ts";

const experiences = [
  {
    period: "2024 - Now",
    title: "Fullstack Developer",
    company: "Independent projects",
    achievements: [
      "Built fullstack applications with Next.js, NestJS, PostgreSQL, and Docker.",
      "Designed backend APIs with authentication, validation, and clean service boundaries.",
      "Explored AI product workflows using OpenAI API, RAG concepts, and vector search foundations.",
    ],
  },
  {
    period: "2022 - 2024",
    title: "Backend Engineer",
    company: "Applied learning and production projects",
    achievements: [
      "Developed REST APIs with Spring Boot, Java, Node.js, and NestJS.",
      "Modeled relational data for job boards, delivery workflows, chat systems, and analytics projects.",
      "Added testing, Docker workflows, and CI-oriented project structure.",
    ],
  },
  {
    period: "2020 - 2022",
    title: "Web Developer",
    company: "Frontend and data projects",
    achievements: [
      "Built responsive interfaces with React, TypeScript, and TailwindCSS.",
      "Created data analysis projects with SQL, Python, Pandas, and Power BI.",
      "Improved UI structure, routing, reusable components, and dashboard layouts.",
    ],
  },
];

const profile = {
  name: siteConfig.name,
  logo: siteConfig.logo,
  role: siteConfig.role,
  intro: "I build scalable web applications, modern backend systems and data-driven products.",
  email: siteConfig.email,
  location: siteConfig.location,
  roles: [
    { label: "Fullstack Developer" },
    { label: "Backend Engineer" },
    { label: "AI Enthusiast" },
  ],
  expertise: [
    { label: "Software architecture" },
    { label: "Clean Architecture" },
    { label: "Scalable systems" },
    { label: "Testing strategy" },
    { label: "Cloud deployment" },
    { label: "Artificial Intelligence" },
  ],
};

export async function script(config: SanitizedConfig) {
  const payload = await getPayload({ config });
  console.log("Seeding portfolio content...");

  await payload.updateGlobal({
    slug: "profile",
    data: profile,
  });
  console.log("Globals seeded.");

  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      socials: siteConfig.socials,
      navigation: siteConfig.nav,
      seo: {
        title: "Yoann Lasm | Fullstack Developer",
        description: "Fullstack developer, backend engineer, and AI enthusiast portfolio.",
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
        title: {
          equals: experience.title,
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
        label: {
          equals: skill.label,
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
        category: {
          equals: group.category,
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
        name: {
          equals: testimonial.name,
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
