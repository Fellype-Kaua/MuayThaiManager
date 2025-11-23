import { Express } from "express";
import { getMeController } from "./meController.controller";
import authenticate from "../auth/auth.middleware";

export const meControllerRoute = (app: Express) => {
    app.get("/me", authenticate, getMeController);
};