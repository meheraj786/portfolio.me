import { notFound } from "next/navigation";
import { getSystemDesignBySlug, getSystemDesigns } from "@/app/actions/systemDesign";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { systemDesign } = await getSystemDesignBySlug(slug);

  if (!systemDesign) {
    notFound();
  }

  return (
    <main className="min-h-screen py-12">
      <CaseStudyDetailClient systemDesign={systemDesign} />
    </main>
  );
}

// Static params for SSG
export async function generateStaticParams() {
  const { systemDesigns = [] } = await getSystemDesigns();
  return systemDesigns.map((study: { slug: string }) => ({
    slug: study.slug,
  }));
}

// Dynamic Metadata (SEO)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://meherajdev.vercel.app";
  const { slug } = await params;
  const { systemDesign } = await getSystemDesignBySlug(slug);

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
