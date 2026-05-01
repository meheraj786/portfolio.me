"use server";

import { connectDB } from "@/lib/db/connect";
import Project from "@/models/Project";

export async function createProject(data: {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  githubLink: string;
  liveLink: string;
}) {
  try {
    await connectDB();
    const project = new Project(data);
    await project.save();
    return { success: true, project };
  } catch (error) {
    return { success: false, error: "Failed to create project" };
  }
}

export async function getProjects() {
  try {
    await connectDB();
    const projects = await (Project as any).find().sort({ createdAt: -1 });
    return { success: true, projects };
  } catch (error) {
    return { success: false, error: "Failed to fetch projects" };
  }
}

export async function updateProject(id: string, data: any) {
  try {
    await connectDB();
    const project = await (Project as any).findByIdAndUpdate(id, data, {
      new: true,
    });
    return { success: true, project };
  } catch (error) {
    return { success: false, error: "Failed to update project" };
  }
}

export async function deleteProject(id: string) {
  try {
    await connectDB();
    await (Project as any).findByIdAndDelete(id);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete project" };
  }
}
