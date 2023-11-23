import { Router } from 'express';
import CatalogController from '../controllers/CatalogController.js';

const catalogRouter = Router();
const catalogController = new CatalogController();

catalogRouter.get('/:catalogId/movies', catalogController.getCatalogMovies);
catalogRouter.post('/:catalogId/movies/:movieId', catalogController.addMovieToCatalog);
catalogRouter.delete('/:catalogId/movies/:movieId', catalogController.removeMovieFromCatalog);

export default catalogRouter;
