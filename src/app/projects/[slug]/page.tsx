import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/app/actions/project";
import ProjectDetailClient from "./ProjectDetailClient";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { project } = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

export async function generateStaticParams() {
  const { projects = [] } = await getProjects();
  return projects.map((project: any) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { project } = await getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Meheraj Hosen`,
    description: project.description.replace(/<[^>]*>?/gm, "").substring(0, 160),
  };
}
