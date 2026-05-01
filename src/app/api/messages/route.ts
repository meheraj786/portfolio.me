import { connectDB } from "@/lib/db/connect";
import ContactMessage from "@/models/ContactMessage";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, messages }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch messages" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const message = new ContactMessage(body);
    await message.save();

    return NextResponse.json({ success: true, message }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to save message" },
      { status: 500 },
    );
  }
}
