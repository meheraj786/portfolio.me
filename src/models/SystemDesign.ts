import mongoose from "mongoose";

const SystemDesignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
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

export default mongoose.models.SystemDesign ||
  mongoose.model("SystemDesign", SystemDesignSchema);
