import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import healthRouter from "./modules/health.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/health", healthRouter)

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log("✅ MongoDB Atlas conectado!"))
  .catch(err => console.error("❌ Erro ao conectar:", err));

app.get("/", (_, res) => res.send("Servidor rodando!"));

app.listen(PORT, () => console.log(`🚀 Servidor na porta ${PORT}`));
