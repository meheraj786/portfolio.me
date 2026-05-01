"use server";

import { connectDB } from "@/lib/db/connect";
import Article from "@/models/Article";

export async function createArticle(data: {
  title: string;
  description: string;
  image: string;
  slug: string;
}) {
  try {
    await connectDB();
    const article = new Article(data);
    await article.save();
    return { success: true, article };
  } catch (error) {
    return { success: false, error: "Failed to create article" };
  }
}

export async function getArticles() {
  try {
    await connectDB();
    const articles = await (Article as any).find().sort({ createdAt: -1 });
    return { success: true, articles };
  } catch (error) {
    return { success: false, error: "Failed to fetch articles" };
  }
}

export async function getArticleBySlug(slug: string) {
  try {
    await connectDB();
    const article = await (Article as any).findOne({ slug });
    return { success: true, article };
  } catch (error) {
    return { success: false, error: "Failed to fetch article" };
  }
}

export async function updateArticle(id: string, data: any) {
  try {
    await connectDB();
    const article = await (Article as any).findByIdAndUpdate(id, data, {
      new: true,
    });
    return { success: true, article };
  } catch (error) {
    return { success: false, error: "Failed to update article" };
  }
}

export async function deleteArticle(id: string) {
  try {
    await connectDB();
    await (Article as any).findByIdAndDelete(id);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete article" };
  }
}
