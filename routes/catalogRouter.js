import { Router } from 'express';

import CatalogController from '../controllers/CatalogController.js';

const catalogRouter = Router();
const catalogController = new CatalogController();

catalogRouter.get('/list', catalogController.getCatalogMovies);
catalogRouter.get('/:id', catalogController.addMovieToCatalog);
catalogRouter.delete('/:id', catalogController.removeMovieToCatalog);

export default catalogRouter;


