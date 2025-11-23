import mongoose from "mongoose";
import { StudentModel } from "./student.model";
import { request, response } from "express";
import { v4 as uuidv4 } from "uuid";

export const createStudent = async (req = request, res = response) => {
  try {
    const {
      name,
      email,
      telephone,
      startDate,
      status,
      subscriptionType,
      monthlyFee,
      paymentDueDate,
      gracePeriodEnd,
    } = req.body;
    if (await StudentModel.findOne({ email })) {
      return res.status(400).json({ message: "Estudante já cadastrado" });
    }
    const newStudent = await StudentModel.create({
      id: uuidv4(),
      name,
      email,
      telephone,
      startDate,
      status,
      subscriptionType,
      monthlyFee,
      paymentDueDate,
      gracePeriodEnd,
    });
    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Erro ao criar estudante:", error);
    res.status(500).json({ message: "Erro interno do servidor!" });
  }
};

export const getStudents = async (req = request, res = response) => {
  try {
    const students = await StudentModel.find();
    res.status(200).json(students);
  } catch (error) {
    console.error("Erro ao buscar estudantes:", error);
    res.status(500).json({ message: "Erro interno do servidor!" });
  }
};

export const updateStudent = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedStudent = await StudentModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: "Estudante não encontrado" });
    }
    res.status(200).json({
      message: "Estudante atualizado com sucesso",
      student: updatedStudent,
    });
  } catch (error) {
    console.error("Erro ao atualizar estudante:", error);
    res.status(500).json({ message: "Erro interno do servidor!" });
  }
};

export const deleteStudent = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const deletedStudent = await StudentModel.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Estudante não encontrado" });
    }
    res.status(200).json({ message: "Estudante deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar estudante:", error);
    res.status(500).json({ message: "Erro interno do servidor!" });
  }
};
