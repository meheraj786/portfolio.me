import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; 

import { articles } from "@/layouts/seed";
import Link from "next/link";
import { SlUserFollowing } from "react-icons/sl";
import ShareButtons from "@/components/ShareButtons";

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
  const article = articles.find((a) => a.slug === params.slug) as Article | undefined;



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
        <h1 className="font-primary font-bold text-black mb-6 leading-tight">
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

        {/* Content */}
        <div className="prose prose-lg max-w-none font-body text-gray-800 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Social Share Buttons */}
<ShareButtons 
  articleUrl={`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/articles/${article.slug}`}
  title={article.title}
  description={article.description}
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
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
//   const article = articles.find((a) => a.slug === params.slug);

//   if (!article) return { title: "Not Found" };

//   return {
//     title: `${article.title} | Meheraj Hosen`,
//     description: article.description,
//     openGraph: {
//       title: article.title,
//       description: article.description,
//       images: [{ url: `${baseUrl}${article.image}` }],
//       url: `${baseUrl}/articles/${article.slug}`,
//     },
//     alternates: {
//       canonical: `${baseUrl}/articles/${article.slug}`,
//     },
//   };
// }