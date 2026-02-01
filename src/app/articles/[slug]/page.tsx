import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import { articles } from "@/layouts/seed";
import { SlUserFollowing } from "react-icons/sl";

interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

export default async function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles.find((a) => a.slug === params.slug) as
    | Article
    | undefined;

  if (!article) {
    notFound();
  }

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
        <h1 className=" font-primary font-bold text-black mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="font-body text-sm">{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="font-body text-sm">{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-body text-sm">{article.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-sm font-body bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="prose prose-lg max-w-none font-body text-gray-800 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
          {/* {article.content} */}
        </div>

        {/* Back to Articles */}
        <div className="mt-16 text-center">
          <a
            href="/articles"
            className="inline-flex items-center px-2 py-1 bg-background text-white font-body rounded-lg hover:bg-gray-800 transition-all"
          >
            ← Back to All Articles
          </a>
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
