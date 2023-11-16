import { Movie, Catalog } from "../models/index.js";

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
        throw new Error("Catálogo no encontrado");
      }

      const movies = catalog.Movies; // Asegúrate de que la relación esté definida correctamente
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
        throw new Error("Catálogo no encontrado");
      }

      
      const existingMovie = await Movie.findByPk(movieId);
      if (!existingMovie) {
        throw new Error("La película no existe");
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

  removeMovieToCatalog = async (req, res) => {
    try {
      const { movieId } = req.body;
      const catalogId = req.params.catalogId;
      const catalog = await this.catalog.findByPk(catalogId);

      if (!catalog) {
        throw new Error("Catálogo no encontrado");
      }
      const existingMovie = await Movie.findByPk(movieId);
      if (!existingMovie) {
        throw new Error("La película no existe");
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
