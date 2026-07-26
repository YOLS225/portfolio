import { ExperiencePage } from "@/features/experience";
import { getExperienceData } from "@/shared/data/portfolio";

export default async function Experience() {
  const roles = await getExperienceData();

  return <ExperiencePage roles={roles} />;
}
