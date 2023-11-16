import { User, Role } from "../models/index.js";
import { isAdmin } from "../midlewares/isAdmin.js";
import { generateToken, verifyToken } from "../utils/jwt.js";

class UserController {

  constructor() {
    this.user = User;
  }

  getUsers = async (req, res) => {
    try {
      const users = await this.user.findAll({
        attributes: ["id", "userName", "email"],
      });
      res.status(200).send({ success: true, message: "Todos los usuarios", data: users });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  login = async (req, res) => {
    try {
      const { email, userName, password } = req.body;

      const user = await User.findOne({
        where: { email },
        include: [{ model: Role }],
      });

      if (!user) throw new Error("Credenciales inválidas");

      const validate = await user.validatePassword(password);
      if (!validate) throw new Error("Credenciales inválidas");

      const payload = {
        id: user.id,
        role: user.Role.dataValues.name,
      };

      const token = generateToken(payload);
      res.cookie("token", token);

      res.status(200).send({ success: true, message: "Ingreso exitoso" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.user.findOne({
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
      const { userName, email, password, roleId } = req.body;
      const user = await this.user.create({ userName, email, password, roleId });

      if (!user) throw new Error("No fue posible crear el usuario");

      res.status(200).send({ success: true, message: "Usuario creado correctamente", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombreUsuario, contraseña } = req.body;
      const user = await this.user.update(
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
      const user = await this.user.destroy({
        where: { id },
      });
      if (!user) throw new Error("No se encontró el usuario");
      res.status(200).send({ success: true, message: "Usuario eliminado", data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  me = async (req, res) => {
    try {
      const{user} = req;
      res.status(200).send({ success: true, message: "Todos los usuarios", data: "ok" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
