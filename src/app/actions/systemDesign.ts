"use server";

import { connectDB } from "@/lib/db/connect";
import SystemDesign from "@/models/SystemDesign";

export async function createSystemDesign(data: {
  title: string;
  description: string;
  githubLink: string;
}) {
  try {
    await connectDB();
    const systemDesign = new SystemDesign(data);
    await systemDesign.save();
    return { success: true, systemDesign };
  } catch (error) {
    return { success: false, error: "Failed to create system design" };
  }
}

export async function getSystemDesigns() {
  try {
    await connectDB();
    const systemDesigns = await (SystemDesign as any)
      .find()
      .sort({ createdAt: -1 });
    return { success: true, systemDesigns };
  } catch (error) {
    return { success: false, error: "Failed to fetch system designs" };
  }
}

export async function updateSystemDesign(id: string, data: any) {
  try {
    await connectDB();
    const systemDesign = await (SystemDesign as any).findByIdAndUpdate(
      id,
      data,
      { new: true },
    );
    return { success: true, systemDesign };
  } catch (error) {
    return { success: false, error: "Failed to update system design" };
  }
}

export async function deleteSystemDesign(id: string) {
  try {
    await connectDB();
    await (SystemDesign as any).findByIdAndDelete(id);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete system design" };
  }
}
