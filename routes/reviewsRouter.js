import { Router } from 'express';
import ReviewController from '../controllers/reviewController.js';
import { ErrorMessages } from '../error/errorMessages.js';

const reviewController = new ReviewController();

const reviewsRouter = Router();

// Obtener todas las reseñas (si es admin trae todas, sino trae las del usuario)
reviewsRouter.get('/lists', reviewController.getReviews); // Ruta para obtener todas las reseñas

// Obtener reseñas de una película por su ID
reviewsRouter.get('/movies/:movieId', reviewController.getMovieReviews); // Ruta para obtener reseñas de una película por su ID

// Obtener una reseña por su ID
reviewsRouter.get('/:id', reviewController.getReviewById); // Ruta para obtener una reseña por su ID

// Actualizar una reseña por su ID
reviewsRouter.put('/:id', reviewController.updateReview); // Ruta para actualizar una reseña por su ID

// Crear una nueva reseña
reviewsRouter.post('/', reviewController.createReview); // Ruta para crear una nueva reseña

// Eliminar una reseña por su ID
reviewsRouter.delete('/:id', reviewController.deleteReview); // Ruta para eliminar una reseña por su ID

// Manejo de rutas no encontradas
reviewsRouter.use((req, res) => {
  res.status(404).send({ success: false, message: ErrorMessages.RutaNoEncontrada });
});

export default reviewsRouter;
