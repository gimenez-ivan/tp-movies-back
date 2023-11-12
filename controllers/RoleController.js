import { Role } from "../models/index.js";
import _ from "lodash";

class RoleController {
  constructor() {
    this.role = Role;
  }

  getRoles = async (req, res) => {
    try {

      const roles = await this.role.findAll({
        attributes: ["id", "scope"],
      });
      res.status(200).send({ success: true, message: "Roles", data: roles });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };


  getRoleById = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await this.role.findOne({
        where: { id },
        attributes: ["id", "scope"],
      });
      if (!role) throw new Error(`No se encontró ningún rol con el id ${id}.`);
      res.status(200).send({ success: true, message: "Rol encontrado", data: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createRole = async (req, res) => {
    // Meter filtro isAdmin
    try {
      const { scope } = req.body;

      if (scope.length < 1) throw new Error("No fue posible crear el rol, el scope ingresado es inválido");

      const role = await Role.create({ scope });
      if (!role) throw new Error("Ocurrió un error al crear el rol");

      res.status(200).send({ success: true, message: "Role creado exitosamente", role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteRole = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await this.role.destroy({
        where: { id },
      });
      if (!role) throw new Error(`No se encontró ningún rol con el id ${id}.`);
      res.status(200).send({ success: true, message: `Rol (${id}) eliminado exitosamen`, data: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
};

// No está permitido editar roles.

// updateRole = async (req, res) => {
//   try {
//   } catch (error) { }
// };


export default RoleController;