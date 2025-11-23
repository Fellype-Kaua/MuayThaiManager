import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest, JwtPayload } from "./auth.types";

const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.authToken;

  if (!token) return res.status(401).json({ message: "Token não fornecido." });


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido ou expirado." });
  }
};

export default authenticate;