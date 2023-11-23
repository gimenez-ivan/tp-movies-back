import { Profile } from "../models/index.js";
import ErrorMessages from "../error/errorMessages.js";

class ProfileController {
  constructor() {
    this.profile = Profile;
  }

  // Obtener un perfil por su ID
  getProfileById = async (req, res) => {
    try {
      const { id } = req.params;
      const profile = await this.profile.findOne({
        where: { id },
      });

      // Si no se encuentra el perfil, se lanza un error
      if (!profile) throw new Error(ErrorMessages.NoPerfil);

      // Enviar el perfil encontrado
      res.status(200).send({ success: true, message: "Perfil encontrado", data: profile });
    } catch (error) {
      // En caso de error, enviar un mensaje de error
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Obtener un perfil por el ID de su usuario asociado
  getProfileByUserId = async (req, res) => {
    try {
      const { id } = req.params;
      const profile = await this.profile.findOne({
        where: { userId: id },
      });

      // Si no se encuentra el perfil, se lanza un error
      if (!profile) throw new Error(ErrorMessages.NoPerfil);

      // Enviar el perfil encontrado
      res.status(200).send({ success: true, message: "Perfil encontrado", data: profile });
    } catch (error) {
      // En caso de error, enviar un mensaje de error
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Crear un nuevo perfil
  createProfile = async (req, res) => {
    try {
      const { name, lastName, city, country, about, userId } = req.body;
      const profile = await this.profile.create({ name, lastName, city, country, about, userId });

      // Si no se puede crear el perfil, se lanza un error
      if (!profile) throw new Error(ErrorMessages.NoCrearPerfil);

      // Enviar el perfil creado
      res.status(200).send({ success: true, message: "Perfil creado con éxito", data: profile });
    } catch (error) {
      // En caso de error, enviar un mensaje de error
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Actualizar un perfil existente
  updateProfile = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, lastName, city, country, about } = req.body;

      // Actualizar el perfil por su ID
      const profile = await this.profile.update(
        { name, lastName, city, country, about },
        { where: { id } }
      );

      // Enviar mensaje de éxito después de actualizar
      res.status(200).send({ success: true, message: "El perfil fue modificado" });
    } catch (error) {
      // En caso de error, enviar un mensaje de error
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Eliminar un perfil por su ID
  deleteProfile = async (req, res) => {
    try {
      const { id } = req.params;
      const profile = await this.profile.destroy({
        where: { id },
      });

      // Si no se encuentra el perfil, se lanza un error
      if (!profile) throw new Error(ErrorMessages.NoPerfil);

      // Enviar mensaje de éxito después de eliminar
      res.status(200).send({ success: true, message: "El perfil fue eliminado" });
    } catch (error) {
      // En caso de error, enviar un mensaje de error
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ProfileController;
