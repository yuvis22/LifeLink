import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/lib/models/User";
import mongoose from "mongoose";

export async function GET() {
  try {
    console.log("Starting database connection in donors API...");
    await connectToDatabase();
    console.log("MongoDB Connection Status:", mongoose.connection.readyState);
    console.log("Connected to MongoDB database:", mongoose.connection.name);

    // Fetch all users (donors) from the database
    console.log("Fetching all donors from database...");
    const donors = await User.find({})
      .sort({ createdAt: -1 }) // Sort by most recent first
      .select("-termsAccepted"); // Exclude terms accepted field

    console.log(`Retrieved ${donors.length} donors from database`);

    return NextResponse.json({ success: true, donors });
  } catch (error: any) {
    console.error("Error fetching donors:", error);
    console.log("MongoDB Connection Status:", mongoose.connection.readyState);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
