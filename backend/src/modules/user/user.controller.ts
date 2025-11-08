import { request, response } from "express";
import { UserModel } from "./user.model";
import { v4 as uuidv4 } from "uuid";

export const createUser = async (req = request, res = response) => {
  try {
    const {
      name,
      email,
      telephone,
      password,
      role,
      subscriptionType,
      monthlyFee,
    } = req.body;

    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Usuário já cadastrado" });
    }
    const newUser = await UserModel.create({
      id: uuidv4(),
      name,
      email,
      telephone,
      password,
      role,
      subscriptionType,
      monthlyFee,
    });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ message: "Erro interno do servidor!" });
  }
};

export const getUsers = async (req = request, res = response) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ message: "Erro interno do servidor!" });
  }
};

export const updateUser = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "usuário não encontrado" });
    }
    res.status(200).json({
      message: "Usuário atualizado com sucesso",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    response.status(500).json({ message: "Erro interno do servidor!" });
  }
};

export const deleteUser = async (req = request, res = response) => {
  try {
    const {id} = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if(!deletedUser){
      return res.status(404).json({message: "Usuário não encontrado"});
    }
    res.status(200).json({message: "Usuário deletado com sucesso"});
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ message: "Erro interno do servidor!" });
  }
};
