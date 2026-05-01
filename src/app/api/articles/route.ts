import { connectDB } from "@/lib/db/connect";
import Article from "@/models/Article";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const articles = await Article.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, articles }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch articles" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    // Generate slug from title if not provided
    if (!body.slug && body.title) {
      body.slug = body.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .trim();
    }

    const article = new Article(body);
    await article.save();

    return NextResponse.json({ success: true, article }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create article" },
      { status: 500 },
    );
  }
}
