import { Router } from 'express';
import MovieController from '../controllers/MovieController.js';

const movieController = new MovieController();

const peliculasRouter = Router();

peliculasRouter.get('/list', movieController.getMovies);
peliculasRouter.get('/list/top', movieController.getTopMovies);
peliculasRouter.get('/list/:rating', movieController.getMovieByRating);
peliculasRouter.post('/', movieController.createMovie);
peliculasRouter.get('/:id', movieController.getMovieById);
peliculasRouter.put('/:id', movieController.udpateMovie);
peliculasRouter.delete('/:id', movieController.deletePelicula);


export default peliculasRouter;

