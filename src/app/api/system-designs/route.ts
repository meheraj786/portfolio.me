import { connectDB } from "@/lib/db/connect";
import SystemDesign from "@/models/SystemDesign";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const systemDesigns = await SystemDesign.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, systemDesigns }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch system designs" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const systemDesign = new SystemDesign(body);
    await systemDesign.save();

    return NextResponse.json({ success: true, systemDesign }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create system design" },
      { status: 500 },
    );
  }
}
