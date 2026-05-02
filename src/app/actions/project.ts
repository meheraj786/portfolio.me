"use server";

import { connectDB } from "@/lib/db/connect";
import Project from "@/models/Project";

export async function createProject(data: {
  title: string;
  slug: string;
  description: string;
  images: string[];
  tags: string[];
  githubLink: string;
  liveLink: string;
}) {
  try {
    await connectDB();
    const project = new Project(data);
    const savedProject = await project.save();
    return {
      success: true,
      project: JSON.parse(JSON.stringify(savedProject)),
    };
  } catch (error) {
    console.error("Create Project Error:", error);
    return { success: false, error: "Failed to create project" };
  }
}

export async function getProjects() {
  try {
    await connectDB();
    const projects = await (Project as any).find().sort({ createdAt: -1 }).lean();
    return { success: true, projects: JSON.parse(JSON.stringify(projects)) };
  } catch (error) {
    return { success: false, error: "Failed to fetch projects" };
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    await connectDB();
    const project = await (Project as any).findOne({ slug }).lean();
    return { success: true, project: JSON.parse(JSON.stringify(project)) };
  } catch (error) {
    return { success: false, error: "Failed to fetch project" };
  }
}

export async function updateProject(id: string, data: any) {
  try {
    await connectDB();
    const project = await (Project as any)
      .findByIdAndUpdate(id, data, {
        new: true,
      })
      .lean();
    return { success: true, project: JSON.parse(JSON.stringify(project)) };
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
