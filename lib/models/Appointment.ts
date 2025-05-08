import mongoose, { Schema } from "mongoose";

export interface IAppointment extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bloodType: string;
  previousDonor: boolean;
  appointmentDate: Date;
  appointmentTime: string;
  donationType: string;
  centerId: number;
  centerName: string;
  centerAddress: string;
  questions: {
    medication: boolean;
    recentIllness: boolean;
    recentTravel: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    bloodType: { type: String, required: true },
    previousDonor: { type: Boolean, default: false },
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true },
    donationType: { type: String, required: true },
    centerId: { type: Number, required: true },
    centerName: { type: String, required: true },
    centerAddress: { type: String, required: true },
    questions: {
      medication: { type: Boolean, default: false },
      recentIllness: { type: Boolean, default: false },
      recentTravel: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Appointment ||
  mongoose.model<IAppointment>("Appointment", AppointmentSchema);
