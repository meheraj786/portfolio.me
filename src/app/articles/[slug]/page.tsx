import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { SlUserFollowing } from "react-icons/sl";
import ShareButtons from "@/components/ShareButtons";
import { getArticleBySlug, getArticles } from "@/app/actions/article";

export default async function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { article } = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-white py-12 px-4 md:px-8">
      <article className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-10 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title & Meta */}
        <h1 className="font-primary font-bold text-black mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="font-body text-sm">Meheraj Hosen</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="font-body text-sm">{formattedDate}</span>
          </div>
        </div>

        <Separator className="my-10" />

        {/* Content */}
        <div className="prose prose-lg max-w-none font-body text-gray-800 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: article.description }} />
        </div>

        {/* Social Share Buttons */}
        <ShareButtons
          articleUrl={`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/articles/${article.slug}`}
          title={article.title}
          description={article.title}
        />

        {/* Back to Articles */}
        <div className="mt-8 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-body text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Button variant="outline" size="sm">
              <SlUserFollowing className="w-5 h-5" />
              <span>Back to Articles</span>
            </Button>
          </Link>
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const { articles = [] } = await getArticles();
  return articles.map((article: any) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const { article } = await getArticleBySlug(params.slug);

  if (!article) return { title: "Not Found" };

  const imageUrl =
    article.image && article.image.toString().startsWith("http")
      ? article.image.toString()
      : `${baseUrl}${article.image}`;

  return {
    title: `${article.title} | Meheraj Hosen`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [{ url: imageUrl }],
      url: `${baseUrl}/articles/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${baseUrl}/articles/${article.slug}`,
    },
  };
}
