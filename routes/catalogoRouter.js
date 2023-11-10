import { Router } from 'express';

import CatalogoController from '../controllers/CatalogoController.js';

const catalogoRouter = Router();
const catalogoController = new CatalogoController();


catalogoRouter.get('/list', catalogoController.getAllcatalogo);
catalogoRouter.get('/:id', catalogoController.getUserById);
catalogoRouter.put('/:id', catalogoController.updateUser);
catalogoRouter.post('/', catalogoController.createUser);
catalogoRouter.delete('/:id', catalogoController.deleteUser);

export default catalogoRouter;


