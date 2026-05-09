"use server";

import { connectDB } from "@/lib/db/connect";
import SystemDesign from "@/models/SystemDesign";
import { revalidatePath } from "next/cache";

export async function createSystemDesign(data: {
  title: string;
  slug: string;
  description: string;
  githubLink?: string;
}) {
  try {
    await connectDB();
    const systemDesign = new SystemDesign(data);
    const savedSystemDesign = await systemDesign.save();

    revalidatePath("/system-designs");

    return {
      success: true,
      systemDesign: JSON.parse(JSON.stringify(savedSystemDesign)),
    };
  } catch (error) {
    console.error("Create System Design Error:", error);
    return { success: false, error: "Failed to create system design" };
  }
}

export async function getSystemDesigns() {
  try {
    await connectDB();
    const systemDesigns = await SystemDesign.find()
      .sort({ createdAt: -1 })
      .lean();
    return {
      success: true,
      systemDesigns: JSON.parse(JSON.stringify(systemDesigns)),
    };
  } catch (error) {
    console.error("Fetch System Designs Error:", error);
    return { success: false, error: "Failed to fetch system designs" };
  }
}

export async function getSystemDesignBySlug(slug: string) {
  try {
    await connectDB();
    const systemDesign = await SystemDesign.findOne({ slug }).lean();
    return {
      success: true,
      systemDesign: JSON.parse(JSON.stringify(systemDesign)),
    };
  } catch (error) {
    console.error("Fetch System Design by Slug Error:", error);
    return { success: false, error: "Failed to fetch system design" };
  }
}

export async function updateSystemDesign(
  id: string,
  data: {
    title: string;
    slug: string;
    description: string;
    githubLink?: string;
  },
) {
  try {
    await connectDB();
    const systemDesign = await SystemDesign.findByIdAndUpdate(id, data, {
      new: true,
    }).lean();

    revalidatePath("/system-designs");
    revalidatePath("/system-designs/[slug]");

    return {
      success: true,
      systemDesign: JSON.parse(JSON.stringify(systemDesign)),
    };
  } catch (error) {
    return { success: false, error: "Failed to update system design" };
  }
}

export async function deleteSystemDesign(id: string) {
  try {
    await connectDB();
    await SystemDesign.findByIdAndDelete(id);

    revalidatePath("/system-designs");
    revalidatePath("/system-designs/[slug]");

    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete system design" };
  }
}
