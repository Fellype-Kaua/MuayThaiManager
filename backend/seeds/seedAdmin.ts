import mongoose from "mongoose";
import User from "../modules/user/user.model";

async function seedAdmin() {
  const adminExists = await User.findOne({ role: "admin" });
  if (adminExists) return;

  await User.create({
    id: "uuid-ou-uuidv4()",
    name: "Admin Inicial",
    email: "admin@meusistema.com",
    telephone: "11999999999",
    password: "SenhaForte123!",
    role: "admin",
    subscriptionType: "Premium Plan",
    monthlyFee: 0,
  });

  console.log("Admin inicial criado!");
}

async function main() {
  await mongoose.connect(process.env.MONGO_URI!);
  await seedAdmin();
  mongoose.disconnect();
}

main();
