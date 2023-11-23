// CatalogController.js
import { Movie, Catalog } from "../models/index.js";
import ErrorMessages from "../error/errorMessages.js";

class CatalogController {
  constructor() {
    this.catalog = Catalog;
  }

  getCatalogMovies = async (req, res) => {
    try {
      const catalogId = req.params.catalogId;
      const catalog = await this.catalog.findByPk(catalogId, {
        include: [{ model: Movie, attributes: ["id", "title", "director"] }],
      });

      if (!catalog) {
        throw new Error(ErrorMessages.CatalogoNoEncontrado);
      }

      const movies = catalog.Movies;
      res.status(200).send({ success: true, message: "Películas en el catálogo", data: movies });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  addMovieToCatalog = async (req, res) => {
    try {
      const { movieId } = req.body;
      const catalogId = req.params.catalogId;
      const catalog = await this.catalog.findByPk(catalogId);

      if (!catalog) {
        throw new Error(ErrorMessages.CatalogoNoEncontrado);
      }

      const existingMovie = await Movie.findByPk(movieId);
      if (!existingMovie) {
        throw new Error(ErrorMessages.PeliculaNoExiste);
      }

      await catalog.addMovie(existingMovie);

      const updatedCatalog = await this.catalog.findByPk(catalogId, {
        include: [{ model: Movie, attributes: ["id", "title", "director"] }],
      });

      res.status(200).send({ success: true, message: "Película agregada al catálogo", data: updatedCatalog.Movies });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  removeMovieFromCatalog = async (req, res) => { // Renombrado el método para reflejar la acción correcta
    try {
      const { movieId } = req.body;
      const catalogId = req.params.catalogId;
      const catalog = await this.catalog.findByPk(catalogId);

      if (!catalog) {
        throw new Error(ErrorMessages.CatalogoNoEncontrado);
      }

      const existingMovie = await Movie.findByPk(movieId);
      if (!existingMovie) {
        throw new Error(ErrorMessages.PeliculaNoExiste);
      }

      await catalog.removeMovie(existingMovie);

      const updatedCatalog = await this.catalog.findByPk(catalogId, {
        include: [{ model: Movie, attributes: ["id", "title", "director"] }],
      });

      res.status(200).send({ success: true, message: "Película eliminada del catálogo", data: updatedCatalog.Movies });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default CatalogController;