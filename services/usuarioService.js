import { Usuario } from "./models/index.js";

class UsuarioService {
  async getAllUsuarios() {
    try {
      const users = await Usuario.findAll({
        attributes: ["id", "nombreUsuario"],
      });
      return { success: true, data: users };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getUserById(id) {
    try {
      const user = await Usuario.findOne({
        where: { id },
        attributes: ["id", "nombreUsuario"],
      });
      if (!user) {
        return { success: false, error: "No se encontró el usuario" };
      }
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async createUser(nombreUsuario, contraseña) {
    try {
      const user = await Usuario.create({ nombreUsuario, contraseña });
      if (!user) {
        return { success: false, error: "No se pudo crear el usuario" };
      }
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async updateUser(id, nombreUsuario, contraseña) {
    try {
      const [updatedRows] = await Usuario.update(
        { nombreUsuario, contraseña },
        {
          where: {
            id,
          },
        }
      );
      if (updatedRows === 0) {
        return { success: false, error: "No se encontró el usuario para actualizar" };
      }
      return { success: true, message: "Usuario modificado" };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async deleteUser(id) {
    try {
      const deletedRows = await Usuario.destroy({
        where: { id },
      });
      if (deletedRows === 0) {
        return { success: false, error: "No se encontró el usuario para eliminar" };
      }
      return { success: true, message: "Usuario eliminado" };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

export default UsuarioService;
