import { notFound } from "next/navigation";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getProjectBySlug, getProjects } from "@/app/actions/project";

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { project } = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold font-primary text-black mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string, idx: number) => (
              <Badge key={idx} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
            <Link href={project.githubLink} target="_blank">
              <Button variant="outline" className="flex items-center text-black! gap-2">
                <FaGithub /> GitHub
              </Button>
            </Link>
            <Link href={project.liveLink} target="_blank">
              <Button className="flex items-center gap-2">
                <FaLink /> Live Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {project.images.map((image: string, idx: number) => (
            <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={`${project.title} - ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Project Description */}
        <div className="prose prose-lg max-w-none font-body text-gray-800 mb-10">
          <h2 className="text-2xl font-bold mb-4">About this Project</h2>
          <div dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link href="/projects">
            <Button variant="ghost">← Back to Projects</Button>
          </Link>
        </div>
      </div>
    </main>
  );
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
  params: { slug: string };
}) {
  const { project } = await getProjectBySlug(params.slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Meheraj Hosen`,
    description: project.description.replace(/<[^>]*>?/gm, "").substring(0, 160),
  };
}
