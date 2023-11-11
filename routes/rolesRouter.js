import { Router } from "express";
import RoleController from "../controllers/RoleController.js";

const rolesRouter = Router();
const roleController = new RoleController()

rolesRouter.get("/list", roleController.getRoles);
rolesRouter.get("/:id", roleController.getRoleById);
rolesRouter.post("/", roleController.createRole); // Solo admin puede crear roles
//rolesRouter.put("/:id", roleController.updateRole)  -> Inhabilito la edición de roles, una vez creado no se puede editar
rolesRouter.delete("/:id", roleController.deleteRole);

export default rolesRouter;