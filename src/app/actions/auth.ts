"use server";

import { connectDB } from "@/lib/db/connect";
import User from "@/models/User";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";

export async function registerUser(
  email: string,
  password: string,
  name: string,
) {
  try {
    await connectDB();

    const existingUser = await (User as any).findOne({ email });
    if (existingUser) {
      return { success: false, error: "User already exists" };
    }

    const user = new User({ email, password, name });
    await user.save();

    const token = jwt.sign(
      { userId: (user as any)._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" },
    );

    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
    });

    return { success: true, user: { email: user.email, name: user.name } };
  } catch (error) {
    return { success: false, error: "Registration failed" };
  }
}

export async function loginUser(email: string, password: string) {
  try {
    await connectDB();

    const user = await (User as any).findOne({ email });
    if (!user) {
      return { success: false, error: "User not found" };
    }

    const isPasswordValid = await (user as any).comparePassword(password);
    if (!isPasswordValid) {
      return { success: false, error: "Invalid password" };
    }

    const token = jwt.sign(
      { userId: (user as any)._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" },
    );

    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
    });

    return { success: true, user: { email: user.email, name: user.name } };
  } catch (error) {
    return { success: false, error: "Login failed" };
  }
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_token");
  return { success: true };
}

export async function getAuthUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return { user: null };
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    await connectDB();
    const user = await (User as any)
      .findById(decoded.userId)
      .select("-password");

    return { user };
  } catch (error) {
    return { user: null };
  }
}
