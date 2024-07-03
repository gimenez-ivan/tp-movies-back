import { User, Role } from "../models/index.js";
import ErrorMessages from "../error/errorMessages.js";
import { isAdmin } from "../midlewares/isAdmin.js";
import { generateToken, verifyToken } from "../utils/jwt.js";

class UserController {
  constructor() {
    this.user = User;
  }

  // Obtener todos los usuarios
  getUsers = async (req, res) => {
    try {
      const users = await this.user.findAll({
        attributes: ["id", "userName", "email"],
      });
      res.status(200).send({ success: true, message: 'Se obtuvieron los usuarios', data: users });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Iniciar sesión del usuario
  login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email },
        include: [{ model: Role }],
      });
      if (!user) throw new Error(ErrorMessages.CredencialesInvalidas);

      const validate = await user.validatePassword(password);
      if (!validate) throw new Error(ErrorMessages.CredencialesInvalidas);

      const payload = {
        id: user.id,
        roleName: user.dataValues.Role.dataValues.scope,
      };

      const token = generateToken(payload);
      res.cookie("token", token);

      res.status(200).send({ success: true, message: ErrorMessages.IngresoExitoso });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Obtener un usuario por su ID
  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.user.findOne({
        where: { id },
        attributes: ["id", "nombreUsuario"],
      });
      if (!user) throw new Error(ErrorMessages.usuarioNoEncontrado);
      res.status(200).send({ success: true, message: ErrorMessages.usuarioEncontrado, data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Crear un nuevo usuario
  createUser = async (req, res) => {
    try {
      const { userName, email, password, roleId } = req.body;
      const user = await this.user.create({ userName, email, password, roleId });

      if (!user) throw new Error(ErrorMessages.ErrorCrearUsuario);

      res.status(200).send({ success: true, message: ErrorMessages.UsuarioCreado});
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Actualizar información de usuario
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
      res.status(200).send({ success: true, message: ErrorMessages.usuarioModificado, data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Eliminar un usuario por su ID
  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.user.destroy({
        where: { id },
      });
      if (!user) throw new Error(ErrorMessages.usuarioNoEncontrado);
      res.status(200).send({ success: true, message: ErrorMessages.usuarioEliminado, data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Middleware de usuario autenticado (revisar qué hace esta función)
  me = async (req, res) => {
    try {
      const { user } = req;
      res.status(200).send({ success: true, message: ErrorMessages.errorObtenerUsuarios, data: "ok" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
