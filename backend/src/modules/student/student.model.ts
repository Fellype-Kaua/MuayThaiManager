import mongoose from "mongoose";
import { IStudent } from "./student.types";

const studentSchema = new mongoose.Schema<IStudent>(
  {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    telephone: {type: String, required: true},
    startDate: {type: Date, required: true},
    status: {
        type: String,
        enum: ["active", "inactive", "suspended"],
        default: "active",
    }, 
    subscriptionType: {type: String, required: true},
    monthlyFee: {type: Number, required: true},
    paymentDueDate: {type: Date, required: true},
    gracePeriodEnd: {type: Date, required: true},
    },
    {timestamps: true}
);

export const StudentModel = mongoose.model<IStudent>("Student", studentSchema);