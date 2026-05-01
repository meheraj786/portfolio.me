import { connectDB } from "@/lib/db/connect";
import User from "@/models/User";

async function seedDatabase() {
  try {
    console.log("Connecting to database...");
    await connectDB();
    console.log("Connected successfully.");

    const email = process.env.NEXT_ADMIN_EMAIL;
    const password = process.env.NEXT_ADMIN_PASSWORD;

    if (!email || !password) {
      console.error("Missing environment variables: NEXT_ADMIN_EMAIL or NEXT_ADMIN_PASSWORD");
      process.exit(1);
    }

    // Check if user already exists
    const existingUser = await (User as any).findOne({
      email: email,
    });

    if (existingUser) {
      console.log("User already exists with email:", email);
      return;
    }

    // Create admin user
    const user = new User({
      email: email,
      password: password,
      name: "Admin",
    });

    await user.save();
    console.log("Admin user created successfully:", email);
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    process.exit(0);
  }
}

seedDatabase();
