import mongoose, { Schema } from "mongoose";

export interface IDonationRequest extends mongoose.Document {
  donorId?: string;
  donorName?: string;
  requester: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    relationshipToPatient: string;
  };
  patient: {
    firstName: string;
    lastName: string;
    bloodType: string;
  };
  requestDetails: {
    urgencyLevel: string;
    neededDate?: Date;
    neededTime?: string;
    medicalFacility: string;
    facilityAddress?: string;
    facilityCity?: string;
    facilityState?: string;
    facilityZipCode?: string;
    reason?: string;
    additionalNotes?: string;
  };
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const DonationRequestSchema = new Schema(
  {
    donorId: { type: String },
    donorName: { type: String },
    requester: {
      firstName: { type: String, required: true, trim: true },
      lastName: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
      relationshipToPatient: { type: String, trim: true },
    },
    patient: {
      firstName: { type: String, required: true, trim: true },
      lastName: { type: String, required: true, trim: true },
      bloodType: { type: String, required: true },
    },
    requestDetails: {
      urgencyLevel: { type: String, required: true },
      neededDate: { type: Date },
      neededTime: { type: String },
      medicalFacility: { type: String, required: true, trim: true },
      facilityAddress: { type: String, trim: true },
      facilityCity: { type: String, trim: true },
      facilityState: { type: String, trim: true },
      facilityZipCode: { type: String, trim: true },
      reason: { type: String },
      additionalNotes: { type: String },
    },
    status: {
      type: String,
      enum: ["pending", "contacted", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.DonationRequest ||
  mongoose.model<IDonationRequest>("DonationRequest", DonationRequestSchema);
