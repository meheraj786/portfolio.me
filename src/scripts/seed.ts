import { connectDB } from "@/lib/db/connect";
import User from "@/models/User";

async function seedDatabase() {
  try {
    await connectDB();
    const email= process.env.NEXT_ADMIN_EMAIL ;
    const password= process.env.NEXT_ADMIN_PASSWORD ;

    // Check if user already exists
    const existingUser = await (User as any).findOne({
      email: email,
    });

    if (existingUser) {
      console.log("User already exists");
      return;
    }

    // Create admin user
    const user = new User({
      email: email,
      password: password, 
      name: "Admin",
    });

    await user.save();
    console.log("User created successfully");
  } catch (error) {
    console.error("Seeding failed:", error);
  }

  process.exit(0);
}

seedDatabase();
