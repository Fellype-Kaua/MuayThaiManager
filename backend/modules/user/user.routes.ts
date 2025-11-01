import express from "express";
import { createUser, getUsers, updateUser, deleteUser } from "./user.controller";
const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
