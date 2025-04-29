import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/lib/models/User";
import mongoose from "mongoose";

export async function POST(request: Request) {
  try {
    console.log("Starting database connection...");
    // Connect to the database
    const dbConnection = await connectToDatabase();
    console.log("MongoDB Connection Status:", mongoose.connection.readyState);
    console.log("Connected to MongoDB database:", mongoose.connection.name);

    // Parse the request body
    const body = await request.json();
    console.log("Received registration data:", body);

    // Create a new user in the database
    console.log("Attempting to create user in database...");
    const user = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      dateOfBirth: body.dateOfBirth,
      phone: body.phone,
      address: body.address,
      city: body.city,
      state: body.state,
      zipCode: body.zipCode,
      bloodType: body.bloodType,
      lastDonation: body.lastDonation,
      medicalConditions: body.medicalConditions,
      emergencyContact: body.emergencyContact,
      emergencyAvailable: body.emergencyAvailable,
      termsAccepted: body.termsAccepted,
    });

    console.log("User created successfully:", {
      id: user._id,
      name: `${user.firstName} ${user.lastName}`,
      bloodType: user.bloodType,
    });

    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch (error: any) {
    console.error("Error in register API:", error);
    console.log("MongoDB Connection Status:", mongoose.connection.readyState);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
