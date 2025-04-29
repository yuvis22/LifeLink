import mongoose, { Schema } from "mongoose";

export interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  bloodType: string;
  lastDonation?: Date;
  medicalConditions?: string;
  emergencyContact: string;
  emergencyAvailable: boolean;
  termsAccepted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    dateOfBirth: { type: Date, required: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    zipCode: { type: String, required: true, trim: true },
    bloodType: { type: String, required: true },
    lastDonation: { type: Date },
    medicalConditions: { type: String },
    emergencyContact: { type: String, required: true, trim: true },
    emergencyAvailable: { type: Boolean, default: false },
    termsAccepted: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
