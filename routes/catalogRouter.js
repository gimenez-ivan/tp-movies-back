import { Router } from 'express';
import { isOwner } from '../midlewares/isOwner.js';
import CatalogController from '../controllers/CatalogController.js';
import ErrorMessages from '../error/errorMessages.js';

const catalogRouter = Router();
const catalogController = new CatalogController();

// Obtener películas del catálogo
catalogRouter.get('/:catalogId/movies', async (req, res) => {
  try {
    const movies = await catalogController.getCatalogMovies(req, res);
    res.status(200).send({ success: true, message: "Películas en el catálogo", data: movies });
  } catch (error) {
    // Manejar errores al obtener películas del catálogo
    res.status(400).send({ success: false, message: ErrorMessages.ErrorObtenerPeliculas });
  }
});

// Agregar película al catálogo
catalogRouter.post('/:catalogId/movies/:movieId', isOwner, async (req, res) => {
  try {
    await catalogController.addMovieToCatalog(req, res);
  } catch (error) {
    // Manejar errores al agregar película al catálogo
    if (error.message === ErrorMessages.CatalogoNoEncontrado) {
      res.status(400).send({ success: false, message: ErrorMessages.CatalogoNoEncontrado });
    } else if (error.message === ErrorMessages.PeliculaNoExiste) {
      res.status(400).send({ success: false, message: ErrorMessages.PeliculaNoExiste });
    } else {
      res.status(400).send({ success: false, message: ErrorMessages.ErrorAgregarPeliculaCatalogo });
    }
  }
});

// Eliminar película del catálogo
catalogRouter.delete('/:catalogId/movies/:movieId', isOwner, async (req, res) => {
  try {
    await catalogController.removeMovieToCatalog(req, res);
  } catch (error) {
    // Manejar errores al eliminar película del catálogo
    if (error.message === ErrorMessages.CatalogoNoEncontrado) {
      res.status(400).send({ success: false, message: ErrorMessages.CatalogoNoEncontrado });
    } else if (error.message === ErrorMessages.PeliculaNoExiste) {
      res.status(400).send({ success: false, message: ErrorMessages.PeliculaNoExiste });
    } else {
      res.status(400).send({ success: false, message: ErrorMessages.ErrorEliminarPeliculaCatalogo });
    }
  }
});

export default catalogRouter;
