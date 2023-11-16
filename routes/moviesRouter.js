import { Router } from 'express';
import MovieController from '../controllers/MovieController.js';

const movieController = new MovieController();

const peliculasRouter = Router();

peliculasRouter.get('/list', movieController.getMovies); // testeado OK
peliculasRouter.get('/list/top', movieController.getTopMovies);
peliculasRouter.get('/list/:rating', movieController.getMovieByRating); // testeado FIXEAR
peliculasRouter.post('/', movieController.createMovie); // testeado OK, che solo el admin deberia create, update y delete una pelicula?
peliculasRouter.get('/:id', movieController.getMovieById); // testeado OK
peliculasRouter.put('/:id', movieController.updateMovie); // testeado OK
peliculasRouter.delete('/:id', movieController.deleteMovie); // testeado OK


export default peliculasRouter;

