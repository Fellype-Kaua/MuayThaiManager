import {Router} from "express";
import { createUser, getUsers, updateUser, deleteUser } from "./user.controller";
import authenticate from "../auth/auth.middleware";

const router = Router();

router.post("/", createUser);
router.use(authenticate);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

router.get("/private", authenticate, (req, res) => {
  const user = (req as any).user;
  res.json({ message: `Bem-vindo, ${user.role}!`, user });
});

export default router;