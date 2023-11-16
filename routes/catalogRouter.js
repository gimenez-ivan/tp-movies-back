
import { Router } from 'express';
import { isOwner } from '../midlewares/isOwner.js'; 
import CatalogController from '../controllers/CatalogController.js';

const catalogRouter = Router();
const catalogController = new CatalogController();

catalogRouter.get('/:catalogId/movies', catalogController.getCatalogMovies);
catalogRouter.post('/:catalogId/movies/:movieId', isOwner, catalogController.addMovieToCatalog);
catalogRouter.delete('/:catalogId/movies/:movieId', isOwner, catalogController.removeMovieToCatalog);

export default catalogRouter;
