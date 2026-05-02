import mongoose from "mongoose";

const SystemDesignSchema = new mongoose.Schema(
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

delete mongoose.models.SystemDesign;

export default mongoose.models.SystemDesign ||
  mongoose.model("SystemDesign", SystemDesignSchema);
