import type { Metadata } from "next";

import { ProjectDetailPage } from "@/features/projects";
import { projects as fallbackProjects } from "@/shared/config/projects";
import { getProjectDataBySlug, getProjectsData } from "@/shared/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjectsData();

  return (projects.length ? projects : fallbackProjects).map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectDataBySlug(slug);

  return {
    title: project ? `${project.title} | Portfolio Yoann` : "Projet | Portfolio Yoann",
    description: project?.summary,
  };
}

export default async function Project({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectDataBySlug(slug);

  return <ProjectDetailPage project={project} />;
}
