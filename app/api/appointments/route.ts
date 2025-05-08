import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Appointment from "@/lib/models/Appointment";

export async function GET() {
  try {
    console.log("API: Starting appointments fetch...");

    // Test database connection
    console.log("API: Testing database connection...");
    await connectToDatabase();
    console.log("API: Database connection successful");

    // Test if Appointment model exists
    console.log("API: Checking Appointment model...");
    if (!Appointment) {
      throw new Error("Appointment model is not defined");
    }
    console.log("API: Appointment model found");

    // Attempt to fetch appointments
    console.log("API: Attempting to fetch appointments...");
    const appointments = await Appointment.find({})
      .sort({ appointmentDate: 1 })
      .lean();
    console.log(
      `API: Successfully fetched ${appointments.length} appointments`
    );

    return NextResponse.json({ success: true, appointments });
  } catch (error: any) {
    console.error("API: Detailed error in appointments API:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details:
          process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log("API: Starting appointment creation...");
    console.log("API: Connecting to database...");

    await connectToDatabase();
    console.log("API: Connected to MongoDB database");

    // Parse the request body
    const body = await request.json();
    console.log(
      "API: Received appointment data:",
      JSON.stringify(body, null, 2)
    );

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "bloodType",
      "appointmentDate",
      "appointmentTime",
      "donationType",
      "centerId",
      "centerName",
      "centerAddress",
    ];

    const missingFields = requiredFields.filter((field) => !body[field]);
    if (missingFields.length > 0) {
      console.log("API: Missing required fields:", missingFields);
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Create a new appointment in the database
    console.log("API: Attempting to create appointment in database...");
    const appointment = await Appointment.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      bloodType: body.bloodType,
      previousDonor: body.previousDonor,
      appointmentDate: body.appointmentDate,
      appointmentTime: body.appointmentTime,
      donationType: body.donationType,
      centerId: body.centerId,
      centerName: body.centerName,
      centerAddress: body.centerAddress,
      questions: body.questions,
    });

    console.log("API: Appointment created successfully:", {
      id: appointment._id,
      name: `${appointment.firstName} ${appointment.lastName}`,
      date: appointment.appointmentDate,
    });

    return NextResponse.json({ success: true, appointment }, { status: 201 });
  } catch (error: any) {
    console.error("API: Error in appointments API:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
