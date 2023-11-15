import { Router } from 'express';
import { isOwner } from '../midlewares/isOwner.js';

import CatalogController from '../controllers/CatalogController.js';

const catalogRouter = Router();
const catalogController = new CatalogController();


// Ver de meter algo para que solo el owner pueda hacerlo.
catalogRouter.use(isOwner);
catalogRouter.get('/:catalogId/movies', catalogController.getCatalogMovies);
catalogRouter.get('/:catalogId/:movieId', catalogController.addMovieToCatalog);
catalogRouter.delete('/:catalogId/:id', catalogController.removeMovieToCatalog);

export default catalogRouter;


