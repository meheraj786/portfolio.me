import mongoose, { Schema, model, models, Model, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const ArticleSchema = new Schema<IArticle>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      default: "General",
    },
  },
  { timestamps: true },
);

const Article: Model<IArticle> =
  models.Article || model<IArticle>("Article", ArticleSchema);

export default Article;
