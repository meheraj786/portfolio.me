import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // shadcn/ui button (যদি না থাকে তাহলে tailwind দিয়ে বানানো যাবে)

import { articles } from "@/layouts/seed";
import Link from "next/link";
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
  const article = articles.find((a) => a.slug === params.slug) as Article | undefined;



  if (!article) {
    notFound();
  }

  // Share URLs (dynamic)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const articleUrl = `${baseUrl}/articles/${article.slug}`;
  const shareText = encodeURIComponent(`${article.title} by Meheraj Hosen\n${article.description}\nRead more:`);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${shareText}&via=meheraj786`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
    whatsapp: `https://wa.me/?text=${shareText} ${encodeURIComponent(articleUrl)}`,
    copy: articleUrl,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(articleUrl);
    alert("Link copied to clipboard!");
  };

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
        <h1 className="font-primary font-bold text-black mb-6 leading-tight text-3xl md:text-4xl">
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
        <div className="mt-12 mb-8 flex flex-wrap items-center justify-center gap-4">
          <p className="text-gray-600 font-body text-sm mr-2 flex items-center gap-2">
            <Share2 className="w-5 h-5" /> Share this article:
          </p>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-blue-50 transition-colors"
            asChild
          >
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-blue-500" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-blue-50 transition-colors"
            asChild
          >
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-blue-700" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-blue-50 transition-colors"
            asChild
          >
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-blue-600" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-green-50 transition-colors"
            asChild
          >
            <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-gray-100 transition-colors"
            onClick={copyToClipboard}
          >
            <LinkIcon className="w-5 h-5 text-gray-600" />
          </Button>
        </div>

        {/* Back to Articles */}
        <div className="mt-8 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-body text-gray-600 hover:text-gray-800 transition-colors"
          >
            <SlUserFollowing className="w-5 h-5" />
            <span>Back to Articles</span>
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