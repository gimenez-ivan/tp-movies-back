
import { Pelicula } from "../models/index.js";

class PeliculaController {
  constructor() {}

  getAllPeliculas = async (req, res) => {
    try {
      const peliculas = await Pelicula.findAll();
      res.status(200).send({ success: true, message: "Todas las películas", data: peliculas });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getPeliculaById = async (req, res) => {
    try {
      const { id } = req.params;
      const pelicula = await Pelicula.findOne({ where: { id } });
      if (!pelicula) throw new Error("No se encontró la película");
      res.status(200).send({ success: true, message: "Película encontrada", data: pelicula });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createPelicula = async (req, res) => {
    try {
      const { titulo, añoLanzamiento, género, director, creador, descripción } = req.body;
      const pelicula = await Pelicula.create({ titulo, añoLanzamiento, género, director, creador, descripción });
      res.status(200).send({ success: true, message: "Película creada", data: pelicula });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updatePelicula = async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, añoLanzamiento, género, director, creador, descripción } = req.body;
      const pelicula = await Pelicula.update(
        { titulo, añoLanzamiento, género, director, creador, descripción },
        { where: { id } }
      );
      res.status(200).send({ success: true, message: "Película modificada", data: pelicula });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deletePelicula = async (req, res) => {
    try {
      const { id } = req.params;
      const pelicula = await Pelicula.destroy({ where: { id } });
      res.status(200).send({ success: true, message: "Película eliminada", data: pelicula });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default PeliculaController;
