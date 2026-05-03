import mongoose, { Schema, model, models, Model, Document } from "mongoose";

export interface ISystemDesign extends Document {
  title: string;
  slug: string;
  description: string;
  githubLink?: string;
  createdAt: Date;
  updatedAt: Date;
}

const SystemDesignSchema = new Schema<ISystemDesign>(
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
    githubLink: {
      type: String,
    },
  },
  { timestamps: true },
);

const SystemDesign: Model<ISystemDesign> =
  models.SystemDesign || model<ISystemDesign>("SystemDesign", SystemDesignSchema);

export default SystemDesign;
