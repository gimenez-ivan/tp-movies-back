import { Router } from "express";
import RoleController from "../controllers/RoleController.js";
import { isAdmin } from "../midlewares/isAdmin.js";
import { ErrorMessages } from "../error/errorMessages.js";

const rolesRouter = Router();
const roleController = new RoleController();

// Obtener la lista de roles
rolesRouter.get("/list", roleController.getRoles); // Ruta para obtener la lista de roles

// Obtener un rol por su ID
rolesRouter.get("/:id", roleController.getRoleById); // Ruta para obtener un rol por su ID

// Crear un nuevo rol (Solo admin puede crear roles)
rolesRouter.post("/", roleController.createRole); // Ruta para crear un nuevo rol (solo accesible para admin)

// Inhabilitar la edición de roles, una vez creado no se puede editar
// rolesRouter.put("/:id", roleController.updateRole); // Ruta para actualizar un rol por su ID

// Eliminar un rol por su ID
rolesRouter.delete("/:id", roleController.deleteRole); // Ruta para eliminar un rol por su ID

// Manejo de rutas no encontradas
rolesRouter.use((req, res) => {
  res.status(404).send({ success: false, message: ErrorMessages.RutaNoEncontrada });
});

export default rolesRouter;
