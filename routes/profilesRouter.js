import { Router } from "express";
import ProfileController from "../controllers/ProfileController.js";
import { isAdmin } from "../midlewares/isAdmin.js";
import ErrorMessages from '../error/errorMessages.js';

const profilesRouter = Router();
const profileController = new ProfileController();

// Obtener un perfil por su ID
profilesRouter.get("/:id", profileController.getProfileById); // Ruta para obtener un perfil por su ID

// Obtener un perfil por el ID del usuario
profilesRouter.get("/users/:id", profileController.getProfileByUserId); // Ruta para obtener un perfil por el ID del usuario

// Crear un nuevo perfil
profilesRouter.post("/", profileController.createProfile); // Ruta para crear un nuevo perfil

// Actualizar un perfil por su ID (permitido para administradores y propietarios)
profilesRouter.put("/:id", isAdmin, profileController.updateProfile); // Ruta para actualizar un perfil por su ID (permiso para admin o propietario)

// Eliminar un perfil por su ID (permitido solo para administradores)
profilesRouter.delete("/:id", isAdmin, profileController.deleteProfile); // Ruta para eliminar un perfil por su ID (permiso solo para admin)

// Manejo de rutas no encontradas
profilesRouter.use((req, res) => {
  res.status(404).send({ success: false, message: ErrorMessages.RutaNoEncontrada });
});

export default profilesRouter;
