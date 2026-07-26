import { ProjectsPage } from "@/features/projects";
import { getProjectsData } from "@/shared/data/portfolio";

export default async function Projects() {
  const projects = await getProjectsData();

  return <ProjectsPage projects={projects} />;
}
