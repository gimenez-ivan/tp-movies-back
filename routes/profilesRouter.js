import { Router } from "express";
import ProfileController from "../controllers/ProfileController.js";
import { isAdmin } from "../midlewares/isAdmin.js";
import { isOwner } from "../midlewares/isOwner.js";
import { validateUser } from "../midlewares/validateUser.js";

const profilesRouter = Router();
const profileController = new ProfileController()

// profilesRouter.get("/list", profileController.getProfiles); // Inhabilito por no verle sentido

profilesRouter.get("/:id", profileController.getProfileById); 
profilesRouter.get("/users/:id", profileController.getProfileByUserId); 
profilesRouter.post("/", profileController.createProfile);
profilesRouter.put("/:id" ,isAdmin, profileController.updateProfile) // -> Que pueda editarlo el admin o el owner? se puede?
profilesRouter.delete("/:id", isAdmin, profileController.deleteProfile);// -> Solo el admin puede eliminar perfiles

export default profilesRouter;