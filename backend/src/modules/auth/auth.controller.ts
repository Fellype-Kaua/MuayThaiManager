import { Request, Response } from "express";
import jwt, { SignOptions } from "jsonwebtoken";
import { UserModel } from "../user/user.model";
import bcrypt from "bcryptjs";

import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? "1h";

if (!JWT_SECRET) {
  throw new Error("Environment variable JWT_SECRET is not set");
}

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado!" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Senha incorreta" });
    }
    const token = jwt.sign(
      { id: user.id, role: user.role },
      JWT_SECRET as jwt.Secret,
      { expiresIn: JWT_EXPIRES_IN } as SignOptions
    );
    return res.cookie("authToken", token,{
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    }).json({
      message: "Login successful",
    })
  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};
