import { usuario } from "../models/index.js";
import  Error from "../error/ErrorMessage.js";

class UsuarioService {
  async getAllUsuarios() {
    try {
      const users = await usuario.findAll({
        attributes: ["id", "nombreUsuario"],
      });
      return { success: true, data: users };
    } catch (error) {
      return { success: false, error: Error};
    }
  }

  async getUserById(id) {
    try {
      const user = await usuario.findOne({
        where: { id },
        attributes: ["id", "nombreUsuario"],
      });
      if (!user) {
        return { success: false, error: Error.usuarioNoEncontrado };
      }
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error: Error.errorObtenerUsuario };
    }
  }

  async createUser(nombreUsuario, contraseña) {
    try {
      const user = await usuario.create({ nombreUsuario, contraseña });
      if (!user) {
        return { success: false, error: Error.errorCrearUsuario };
      }
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error: Error.errorCrearUsuario };
    }
  }

  async updateUser(id, nombreUsuario, contraseña) {
    try {
      const [updatedRows] = await usuario.update(
        { nombreUsuario, contraseña },
        {
          where: {
            id,
          },
        }
      );
      if (updatedRows === 0) {
        return { success: false, error: Error.errorActualizarUsuario };
      }
      return { success: true, message: "Usuario modificado" };
    } catch (error) {
      return { success: false, error: Error.errorActualizarUsuario };
    }
  }

  async deleteUser(id) {
    try {
      const deletedRows = await usuario.destroy({
        where: { id },
      });
      if (deletedRows === 0) {
        return { success: false, error: Error.errorEliminarUsuario };
      }
      return { success: true, message: "Usuario eliminado" };
    } catch (error) {
      return { success: false, error: Error.errorEliminarUsuario };
    }
  }
}

export default UsuarioService;
