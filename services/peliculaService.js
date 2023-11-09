import { pelicula } from "./models/index.js";

class PeliculaService {
  async getAllPeliculas() {
    try {
      const peliculas = await pelicula.findAll();
      return peliculas;
    } catch (error) {
      throw new Error("No se pudieron obtener todas las películas.");
    }
  }
  async getPeliculaById(id) {
    try {
      const pelicula = await pelicula.findOne({ where: { id } });
      if (!pelicula) {
        throw new Error("No se encontró la película.");
      }
      return pelicula;
    } catch (error) {
      throw new Error("No se pudo obtener la película.");
    }
  }

  async createPelicula(data) {
    try {
      const pelicula = await pelicula.create(data);
      return pelicula;
    } catch (error) {
      throw new Error("No se pudo crear la película.");
    }
  }

  async updatePelicula(id, data) {
    try {
      const [rowsUpdated, updatedPelicula] = await pelicula.update(data, { where: { id } });
      if (rowsUpdated === 0) {
        throw new Error("No se encontró la película para actualizar.");
      }
      return updatedPelicula;
    } catch (error) {
      throw new Error("No se pudo actualizar la película.");
    }
  }

  async deletePelicula(id) {
    try {
      const deletedCount = await pelicula.destroy({ where: { id } });
      if (deletedCount === 0) {
        throw new Error("No se encontró la película para eliminar.");
      }
    } catch (error) {
      throw new Error("No se pudo eliminar la película.");
    }
  }
}

export default PeliculaService;
