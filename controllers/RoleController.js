import { Role } from "../models/index.js";
import ErrorMessages from "../error/errorMessages.js";

class RoleController {
  constructor() {
    this.role = Role;
  }

  // Obtener todos los roles disponibles
  getRoles = async (req, res) => {
    try {
      const roles = await this.role.findAll({
        attributes: ["id", "scope"],
      });
      res.status(200).send({ success: true, message: "Roles", data: roles });
    } catch (error) {
      res.status(400).send({ success: false, message: ErrorMessages.errorObtenerRoles });
    }
  };

  // Obtener un rol por su ID
  getRoleById = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await this.role.findOne({
        where: { id },
        attributes: ["id", "scope"],
      });

      if (!role) throw new Error(`${ErrorMessages.RolNoEncontrado} (${id}).`);

      res.status(200).send({ success: true, message: `${ErrorMessages.RolEncontrado}`, data: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Crear un nuevo rol

  //agregar filtro
  createRole = async (req, res) => {
    try {
      const { scope } = req.body;

      if (scope.length < 1) throw new Error(ErrorMessages.RolNoCrear);

      const rol = await Role.create({ scope });

      if (!rol) throw new Error(ErrorMessages.RolErrorCrear);

      res.status(200).send({ success: true, message: ErrorMessages.RolCreado, data: rol });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Eliminar un rol por su ID
  deleteRole = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await this.role.destroy({
        where: { id },
      });
  
      if (role === 0) {
        throw new Error(`El rol con ID ${id} no fue encontrado o ya ha sido eliminado.`);
      }
  
      res.status(200).send({ success: true, message: `El rol con ID ${id} ha sido eliminado exitosamente.`, data: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

// No está permitido editar roles.
// updateRole = async (req, res) => {
//   try {
//   } catch (error) { }
// };


export default RoleController;
