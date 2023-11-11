import { Router } from 'express';

import CatalogController from '../controllers/CatalogController.js';

const catalogRouter = Router();
const catalogController = new CatalogController();


// Ver de meter algo para que solo el owner pueda hacerlo. 
catalogRouter.get('/:catalogId/movies', catalogController.getCatalogMovies);
catalogRouter.get('/:catalogId/:movieId', catalogController.addMovieToCatalog);
catalogRouter.delete('/:catalogId/:id', catalogController.removeMovieToCatalog);

export default catalogRouter;


