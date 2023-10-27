import { Usuario } from "../models/Index.js";

class UserController {
  constructor() {}

  getAllUsers = async (req, res) => {
    try {
      const users = await Usuario.findAll({
        attributes: ["id", "nombreUsuario"],
      });
      res.status(200).send({ success: true, message: "Todos los usuarios", data: users });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Usuario.findOne({
        where: { id },
        attributes: ["id", "nombreUsuario"],
      });
      if (!user) throw new Error("No se encontró el usuario");
      res.status(200).send({ success: true, message: "Usuario encontrado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUser = async (req, res) => {
    try {
      const { nombreUsuario, contraseña } = req.body;

      const user = await Usuario.create({ nombreUsuario, contraseña });
      if (!user) throw new Error("No se pudo crear el usuario");
      res.status(200).send({ success: true, message: "Usuario creado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombreUsuario, contraseña } = req.body;
      const user = await Usuario.update(
        { nombreUsuario, contraseña },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).send({ success: true, message: "Usuario modificado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Usuario.destroy({
        where: { id },
      });
      res.status(200).send({ success: true, message: "Usuario eliminado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
