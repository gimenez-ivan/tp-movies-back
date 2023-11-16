import { Profile } from "../models/index.js"


class ProfileController {
  constructor() {
    this.profile = Profile;
  }
  getProfileById = async (req, res) => {
    try {
      const{id} = req.params;
      const profile = await this.profile.findOne({
        where: {id},
      });
      if(!profile) throw new Error("No se encontró el perfil");
      
      res
      .status(200)
      .send({succes: true, message: "Perfil encontrado ", data: profile});

    } catch (error) {
      res.status(400).send({succes: false, message: error.message});
    }
  };

  getProfileByUserId = async (req, res) => {
    try {
      const{id} = req.params;
      const profile = await this.profile.findOne({
        where:{userId: id},
      });

      if(!profile) throw new Error("No se encontró el perfil");

      res
      .status(200)
      .send({succes: true, message: "Perfil encontrado", data: profile});

    } catch (error) {
      res.status(400).send({succes: false, message: error.message});
    }
  };

  createProfile = async (req, res) => {
    try {
      const{name, lastName, city, country, about, userId } = req.body;
      const profile = await this.profile.create({name, lastName, city, country, about, userId});
      if(!profile) throw new Error("No se pudo crear el perfil");

      res
      .status(200)
      .send({succes: true, message: "Perfil creado con éxito", data: profile});

    } catch (error) {
      res
      .status(400)
      .send({succes: false, message: error.message});
    }
  };

  updateProfile = async (req, res) => {
    try {
      const {id} = req.params;
      const{name, lastName, city, country, about} = req.body;

      const profile = await this.profile.update(
        {name, lastName, city, country, about},
        {
          where: { id },
        }
        );
        res
        .status(200)
        .send({succes: true, message: "El perfil fue modificado"});
    } catch (error) {
      res
      .status(400)
      .send({succes: false, message: error.message});
    }
  }

  deleteProfile = async (req, res) => {
    try {
      const{id} = req.params;
      const profile = await this.profile.destroy({ 
        where:{ id },
      });
      if(!profile) throw new Error("No se encontró el perfil");

      res
      .status(200)
      .send({succes: true, message: "El perfil fue eliminado"});

    } catch (error) {
      res.status(400).send({succes: false, message: error.message});
    }
  }

}

export default ProfileController;
