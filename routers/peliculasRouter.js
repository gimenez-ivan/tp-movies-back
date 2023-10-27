import { Router } from 'express';
import PeliculaController from '../controller/PeliculaController.js';

const peliculaController = new PeliculaController();

const peliculasRouter = Router();

peliculasRouter.get('/list', peliculaController.getAllPeliculas);
peliculasRouter.get('/:id', peliculaController.getPeliculaById);
peliculasRouter.put('/:id', peliculaController.updatePelicula);
peliculasRouter.post('/', peliculaController.createPelicula);
peliculasRouter.delete('/:id', peliculaController.deletePelicula);

export default peliculasRouter;

