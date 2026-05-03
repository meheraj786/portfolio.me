"use server";

import { connectDB } from "@/lib/db/connect";
import ContactMessage from "@/models/ContactMessage";

export async function createContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    await connectDB();
    const contactMessage = new ContactMessage(data);
    await contactMessage.save();
    return { success: true, contactMessage };
  } catch (error) {
    return { success: false, error: "Failed to save message" };
  }
}

export async function getContactMessages() {
  try {
    await connectDB();
    const messages = await ContactMessage
      .find()
      .sort({ createdAt: -1 });
    return { success: true, messages };
  } catch (error) {
    return { success: false, error: "Failed to fetch messages" };
  }
}

export async function deleteContactMessage(id: string) {
  try {
    await connectDB();
    await ContactMessage.findByIdAndDelete(id);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete message" };
  }
}
