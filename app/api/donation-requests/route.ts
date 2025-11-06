import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import DonationRequest from "@/lib/models/DonationRequest";

export async function POST(request: Request) {
  try {
    console.log("API: Starting donation request creation...");
    await connectToDatabase();
    console.log("API: Connected to MongoDB database");

    const body = await request.json();
    console.log("API: Received donation request data:", JSON.stringify(body, null, 2));

    // Validate required fields
    const requiredFields = [
      "requester.firstName",
      "requester.lastName",
      "requester.email",
      "requester.phone",
      "patient.firstName",
      "patient.lastName",
      "patient.bloodType",
      "requestDetails.urgencyLevel",
      "requestDetails.medicalFacility",
    ];

    const missingFields: string[] = [];
    
    if (!body.requester?.firstName) missingFields.push("requester.firstName");
    if (!body.requester?.lastName) missingFields.push("requester.lastName");
    if (!body.requester?.email) missingFields.push("requester.email");
    if (!body.requester?.phone) missingFields.push("requester.phone");
    if (!body.patient?.firstName) missingFields.push("patient.firstName");
    if (!body.patient?.lastName) missingFields.push("patient.lastName");
    if (!body.patient?.bloodType) missingFields.push("patient.bloodType");
    if (!body.requestDetails?.urgencyLevel) missingFields.push("requestDetails.urgencyLevel");
    if (!body.requestDetails?.medicalFacility) missingFields.push("requestDetails.medicalFacility");

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

    // Create donation request
    console.log("API: Attempting to create donation request in database...");
    const donationRequest = await DonationRequest.create({
      donorId: body.donorId || null,
      donorName: body.donorName || null,
      requester: {
        firstName: body.requester.firstName,
        lastName: body.requester.lastName,
        email: body.requester.email,
        phone: body.requester.phone,
        relationshipToPatient: body.requester.relationshipToPatient || "",
      },
      patient: {
        firstName: body.patient.firstName,
        lastName: body.patient.lastName,
        bloodType: body.patient.bloodType,
      },
      requestDetails: {
        urgencyLevel: body.requestDetails.urgencyLevel,
        neededDate: body.requestDetails.neededDate || null,
        neededTime: body.requestDetails.neededTime || "",
        medicalFacility: body.requestDetails.medicalFacility,
        facilityAddress: body.requestDetails.facilityAddress || "",
        facilityCity: body.requestDetails.facilityCity || "",
        facilityState: body.requestDetails.facilityState || "",
        facilityZipCode: body.requestDetails.facilityZipCode || "",
        reason: body.requestDetails.reason || "",
        additionalNotes: body.requestDetails.additionalNotes || "",
      },
      status: "pending",
    });

    console.log("API: Donation request created successfully:", {
      id: donationRequest._id,
      requester: `${donationRequest.requester.firstName} ${donationRequest.requester.lastName}`,
      patient: `${donationRequest.patient.firstName} ${donationRequest.patient.lastName}`,
      bloodType: donationRequest.patient.bloodType,
    });

    return NextResponse.json(
      { success: true, donationRequest },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("API: Error in donation requests API:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to create donation request",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const requests = await DonationRequest.find({})
      .sort({ createdAt: -1 })
      .limit(100);

    return NextResponse.json({ success: true, requests });
  } catch (error: any) {
    console.error("Error fetching donation requests:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch donation requests",
      },
      { status: 500 }
    );
  }
}

