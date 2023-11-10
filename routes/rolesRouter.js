import { Router } from "express";
import RoleController from "../controllers/RoleController.js";

const rolesRouter = Router();
const roleController = new RoleController()

rolesRouter.get("/list", roleController.getRoles);
rolesRouter.get("/:id", roleController.getRoleById);
rolesRouter.post("/", roleController.createRole);
rolesRouter.put("/:id", roleController.updateRole)
rolesRouter.delete("/:id", roleController.deleteRole);

export default rolesRouter;