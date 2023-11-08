import { Pelicula } from "./models/index.js";
class PeliculaController {
  constructor() {}

  async getAllPeliculas(req, res) {
    try {
      const peliculas = await Pelicula.findAll();
      return res.status(200).json({ success: true, message: "Todas las películas", data: peliculas });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  async getPeliculaById(req, res) {
    try {
      const { id } = req.params;
      const pelicula = await Pelicula.findOne({ where: { id } });
      if (!pelicula) {
        return res.status(404).json({ success: false, message: "No se encontró la película" });
      }
      return res.status(200).json({ success: true, message: "Película encontrada", data: pelicula });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  async createPelicula(req, res) {
    try {
      const { titulo, añoLanzamiento, género, director, creador, descripción } = req.body;
      const pelicula = await Pelicula.create({ titulo, añoLanzamiento, género, director, creador, descripción });
      return res.status(201).json({ success: true, message: "Película creada", data: pelicula });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
  async updatePelicula(req, res) {
    try {
      const { id } = req.params;
      const { titulo, añoLanzamiento, género, director, creador, descripción } = req.body;
      const updatedPelicula = await Pelicula.update(
        { titulo, añoLanzamiento, género, director, creador, descripción },
        { where: { id } }
      );
      if (updatedPelicula[0] === 0) {
           return res.status(404).json({ success: false, message: "Película no encontrada" });
      }
      return res.status(200).json({ success: true, message: "Película modificada" });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  async deletePelicula(req, res) {
    try {
      const { id } = req.params;
      const deletedPelicula = await Pelicula.destroy({ where: { id } });
      if (deletedPelicula === 0) {
          return res.status(404).json({ success: false, message: "Película no encontrada" });
      }
      return res.status(200).json({ success: true, message: "Película eliminada" });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
}

export default PeliculaController;
