import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles } from "@/app/actions/article";
import ArticleDetailClient from "./ArticleDetailClient";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { article } = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return <ArticleDetailClient article={article} formattedDate={formattedDate} />;
}

export async function generateStaticParams() {
  const { articles = [] } = await getArticles();
  return articles.map((article: { slug: string }) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://meherajdev.vercel.app";
  const { article } = await getArticleBySlug(slug);

  if (!article) return { title: "Not Found" };

  const imageUrl =
    article.image && article.image.toString().startsWith("http")
      ? article.image.toString()
      : `${baseUrl}${article.image}`;

  return {
    title: `${article.title} | Meheraj Hosen`,
    description: article.description.replace(/<[^>]*>?/gm, "").substring(0, 160),
    openGraph: {
      title: article.title,
      description: article.description.replace(/<[^>]*>?/gm, "").substring(0, 160),
      images: [{ url: imageUrl }],
      url: `${baseUrl}/articles/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description.replace(/<[^>]*>?/gm, "").substring(0, 160),
      images: [imageUrl],
    },
    alternates: {
      canonical: `${baseUrl}/articles/${article.slug}`,
    },
  };
}
