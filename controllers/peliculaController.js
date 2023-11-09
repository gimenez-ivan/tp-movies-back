import { Pelicula } from "./models/index.js";

class PeliculaController {
  constructor() {}

  getAllPeliculas = async (req, res) => {
    try {
      const peliculas = await pelicula.findAll();
      res.status(200).send({ success: true, message: "Todas las películas", data: peliculas });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getPeliculaById = async (req, res) => {
    try {
      const { id } = req.params;
      const pelicula = await pelicula.findOne({ where: { id } });
      if (!pelicula) throw new Error("No se encontró la película");
      res.status(200).send({ success: true, message: "Película encontrada", data: pelicula });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createPelicula = async (req, res) => {
    try {
      const { titulo, añoLanzamiento, género, director, creador, descripción } = req.body;
      const nuevaPelicula = await pelicula.create({ titulo, añoLanzamiento, género, director, creador, descripción });
      res.status(200).send({ success: true, message: "Película creada", data: nuevaPelicula });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updatePelicula = async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, añoLanzamiento, género, director, creador, descripción } = req.body;
      const peliculaActualizada = await pelicula.update(
        { titulo, añoLanzamiento, género, director, creador, descripción },
        { where: { id } }
      );
      res.status(200).send({ success: true, message: "Película modificada", data: peliculaActualizada });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deletePelicula = async (req, res) => {
    try {
      const { id } = req.params;
      const peliculaEliminada = await pelicula.destroy({ where: { id } });
      res.status(200).send({ success: true, message: "Película eliminada", data: peliculaEliminada });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default PeliculaController;
