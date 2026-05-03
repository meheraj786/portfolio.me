"use server";

import { connectDB } from "@/lib/db/connect";
import User from "@/models/User";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET =
  process.env.NEXT_JWT_SECRET ||
  process.env.JWT_SECRET ||
  "your-secret-key-change-in-production";
const secret = new TextEncoder().encode(JWT_SECRET);

export async function registerUser(
  email: string,
  password: string,
  name: string,
) {
  try {
    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, error: "User already exists" };
    }

    const user = new User({ email, password, name });
    await user.save();

    const token = await new SignJWT({ userId: user._id, email: user.email })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
    });

    return { success: true, user: { email: user.email, name: user.name } };
  } catch (error) {
    console.error("Registration failed:", error);
    return { success: false, error: "Registration failed" };
  }
}

export async function loginUser(email: string, password: string) {
  try {
    console.log("Login attempt for:", email);
    console.log("Connecting to DB...");
    await connectDB();
    console.log("DB connected.");

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found:", email);
      return { success: false, error: "User not found" };
    }

    console.log("Verifying password...");
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      console.log("Invalid password for:", email);
      return { success: false, error: "Invalid password" };
    }

    console.log("Generating token...");
    const token = await new SignJWT({ userId: user._id, email: user.email })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
    });

    console.log("Login successful for:", email);
    return { success: true, user: { email: user.email, name: user.name } };
  } catch (error: any) {
    console.error("Login error:", error);
    return { success: false, error: error.message || "Login failed" };
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

    const { payload } = await jwtVerify(token, secret);
    await connectDB();
    const user = await User
      .findById(payload.userId)
      .select("-password");

    return { user };
  } catch (error) {
    console.error("Auth check failed:", error);
    return { user: null };
  }
}
