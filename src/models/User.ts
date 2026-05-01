import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

UserSchema.pre("save", async function (next: any) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    (this as any).password = await bcryptjs.hash((this as any).password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

UserSchema.methods.comparePassword = async function (passwordAttempt: string) {
  return await bcryptjs.compare(passwordAttempt, (this as any).password);
};

export default mongoose.models.User || mongoose.model("User", UserSchema);
