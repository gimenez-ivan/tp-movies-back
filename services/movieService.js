import { pelicula } from "../models/index.js";
import { Error } from "../error/ErrorMessage.js";

class PeliculaService {
  async getAllPeliculas() {
    try {
      const peliculas = await pelicula.findAll();
      return peliculas;
    } catch (error) {
      throw new Error(Error.errorObtenerPeliculas);
    }
  }

  async getPeliculaById(id) {
    try {
      const peliculaEncontrada = await pelicula.findOne({ where: { id } });
      if (!peliculaEncontrada) {
        throw new Error(Error.peliculaNoEncontrada);
      }
      return peliculaEncontrada;
    } catch (error) {
      throw new Error(Error.errorObtenerPelicula);
    }
  }

  async createPelicula(data) {
    try {
      const nuevaPelicula = await pelicula.create(data);
      return nuevaPelicula;
    } catch (error) {
      throw new Error(Error.errorCrearPelicula);
    }
  }

  async updatePelicula(id, data) {
    try {
      const [rowsUpdated, updatedPelicula] = await pelicula.update(data, { where: { id } });
      if (rowsUpdated === 0) {
        throw new Error(Error.errorActualizarPelicula);
      }
      return updatedPelicula;
    } catch (error) {
      throw new Error(Error.errorActualizarPelicula);
    }
  }

  async deletePelicula(id) {
    try {
      const deletedCount = await pelicula.destroy({ where: { id } });
      if (deletedCount === 0) {
        throw new Error(Error.errorEliminarPelicula);
      }
    } catch (error) {
      throw new Error(Error.errorEliminarPelicula);
    }
  }
}

export default PeliculaService;
