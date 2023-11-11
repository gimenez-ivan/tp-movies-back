import { Router } from "express";
import ProfileController from "../controllers/ProfileController.js";

const profilesRouter = Router();
const profileController = new ProfileController()

// profilesRouter.get("/list", profileController.getProfiles); // Inhabilito por no verle sentido

profilesRouter.get("/:id", profileController.getProfileById); 
profilesRouter.get("/:id", profileController.getProfileByUserId); // -> Evaluar si es necesario. Seguramente si

profilesRouter.post("/", profileController.createProfile);
profilesRouter.put("/:id", profileController.updateProfile) // -> Que pueda editarlo el admin o el owner? se puede?

profilesRouter.delete("/:id", profileController.deleteProfile);// -> Solo el admin puede eliminar perfiles

export default profilesRouter;