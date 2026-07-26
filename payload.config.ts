import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

import { Experiences } from "./src/collections/Experiences.ts";
import { Projects } from "./src/collections/Projects.ts";
import { Skills } from "./src/collections/Skills.ts";
import { TechStacks } from "./src/collections/TechStacks.ts";
import { Testimonials } from "./src/collections/Testimonials.ts";
import { Users } from "./src/collections/Users.ts";
import { Profile } from "./src/globals/Profile.ts";
import { SiteSettings } from "./src/globals/SiteSettings.ts";

const databaseURL =
  process.env.DATABASE_URL ;

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  bin: [
    {
      key: "seed",
      scriptPath: "src/seed.ts",
    },
  ],
  collections: [Users, Projects, Experiences, Skills, TechStacks, Testimonials],
  globals: [Profile, SiteSettings],
  db: postgresAdapter({
    pool: {
      connectionString: databaseURL,
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "dev-secret-change-me",
  typescript: {
    outputFile: "src/payload-types.ts",
  },
});
