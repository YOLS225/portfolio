import { SkillsPage } from "@/features/skills";
import { getSkillLevelsData, getTechStackData } from "@/shared/data/portfolio";

export default async function Skills() {
  const [skillLevels, techStack] = await Promise.all([getSkillLevelsData(), getTechStackData()]);

  return <SkillsPage skillLevels={skillLevels} techStack={techStack} />;
}
