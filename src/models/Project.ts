import mongoose, { Schema, model, models, Model, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  slug: string;
  description: string;
  images: string[];
  tags: string[];
  githubLink: string;
  liveLink: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    githubLink: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Project: Model<IProject> =
  models.Project || model<IProject>("Project", ProjectSchema);

export default Project;
