import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "./user.types";

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    telephone: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    paymentDueDate: Date,
    gracePeriodEnd: Date,
    status: {
      type: String,
      enum: ["active", "inactive", "suspended"],
      default: "active",
    },
    subscriptionType: {
      type: String,
      enum: ["Regular Plan", "Premium Plan"],
      default: "Regular Plan",
    },
    monthlyFee: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// 🔒 Hash da senha antes de salvar
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
// 🔒 Hash da senha antes de atualizar
userSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate() as any;
  if (update.password) {
    const salt = await bcrypt.genSalt(10);
    update.password = await bcrypt.hash(update.password, salt);
    this.setUpdate(update);
  }
  next();
});

// 🔑 Método opcional para comparar senha
userSchema.methods.comparePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

export const UserModel = mongoose.model<IUser>("User", userSchema);
