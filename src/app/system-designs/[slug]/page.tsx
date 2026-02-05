import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, GithubIcon } from "lucide-react"; 
import Link from "next/link";

import { caseStudies } from "@/layouts/seed";

interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  keyFeatures: string[];
  diagramUrl: string;
  github?: string | null;
  learnings: string;
  detailedExplanation?: string;
  tradeoffs?: string[];
  challenges?: string[];
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((s) => s.slug === params.slug) as CaseStudy | undefined;

  if (!study) {
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
          {study.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 font-body mb-10 leading-relaxed">
          {study.description}
        </p>

        {/* Diagram - Larger version */}
        <div className="relative w-full aspect-[16/9] md:aspect-[4/3] mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <Image
            src={study.diagramUrl}
            alt={`${study.title} Architecture Diagram`}
            fill
            className="object-contain bg-white p-4"
            priority
          />
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className=" font-primary font-semibold text-black mb-6">
            Key Components & Choices
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-800 font-body">
            {study.keyFeatures.map((feature, idx) => (
              <li key={idx} className="text-lg leading-relaxed">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Learnings */}
        <div className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-primary font-semibold text-black mb-4">
            Key Learnings
          </h2>
          <p className="text-gray-800 font-body leading-relaxed italic">
            {study.learnings}
          </p>
        </div>

        {study.tradeoffs && (
          <div className="mb-12">
            <h2 className="text-2xl font-primary font-semibold text-black mb-6">
              Trade-offs Considered
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-800 font-body">
              {study.tradeoffs.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* GitHub Link */}
        {study.github && (
          <div className="flex justify-center md:justify-start mt-10">
            <Link
              href={study.github}
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
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

// Dynamic Metadata (SEO)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Meheraj Hosen`,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      images: [{ url: `${baseUrl}${study.diagramUrl}` }],
      url: `${baseUrl}/system-designs/${study.slug}`,
    },
    alternates: {
      canonical: `${baseUrl}/system-designs/${study.slug}`,
    },
  };
}