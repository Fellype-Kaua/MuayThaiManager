import { Router } from "express";
import { createStudent, getStudents, updateStudent, deleteStudent } from "./student.controller";
import authenticate from "../auth/auth.middleware";

const router = Router();

router.use(authenticate);
router.post("/register", createStudent);
router.get("/", getStudents);
router.put("/:id", updateStudent);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;