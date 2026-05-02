import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, GithubIcon } from "lucide-react";
import Link from "next/link";
import {
  getSystemDesignBySlug,
  getSystemDesigns,
} from "@/app/actions/systemDesign";

export default async function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { systemDesign } = await getSystemDesignBySlug(params.slug);

  if (!systemDesign) {
    notFound();
  }

  return (
    <main className="min-h-screen  py-12 px-4 md:px-8">
      <article className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/system-designs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors font-body"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Case Studies
        </Link>

        {/* Title */}
        <h1 className=" font-primary font-bold text-black mb-6 leading-tight">
          {systemDesign.title}
        </h1>

        {/* Description */}
        <div className="text-lg text-gray-700 font-body mb-10 leading-relaxed prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: systemDesign.description }} />
        </div>

        {/* GitHub Link */}
        {systemDesign.githubLink && (
          <div className="flex justify-center md:justify-start mt-10">
            <Link
              href={systemDesign.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-body"
            >
              <GithubIcon className="w-6 h-6" />
              View Implementation on GitHub
            </Link>
          </div>
        )}
      </article>
    </main>
  );
}

// Static params for SSG
export async function generateStaticParams() {
  const { systemDesigns = [] } = await getSystemDesigns();
  return systemDesigns.map((study: any) => ({
    slug: study.slug,
  }));
}

// Dynamic Metadata (SEO)
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const { systemDesign } = await getSystemDesignBySlug(params.slug);

  if (!systemDesign) return { title: "Case Study Not Found" };

  return {
    title: `${systemDesign.title} | Meheraj Hosen`,
    description: systemDesign.description.replace(/<[^>]*>?/gm, ""),
    openGraph: {
      title: systemDesign.title,
      description: systemDesign.description.replace(/<[^>]*>?/gm, ""),
      images: systemDesign.diagramUrl ? [{ url: systemDesign.diagramUrl }] : [],
      url: `${baseUrl}/system-designs/${systemDesign.slug}`,
    },
    alternates: {
      canonical: `${baseUrl}/system-designs/${systemDesign.slug}`,
    },
  };
}