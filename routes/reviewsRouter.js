import { Router } from 'express';
import ReviewController from '../controllers/ReviewController.js';

const reviewController = new ReviewController();

const reviewsRouter = Router();

reviewsRouter.get('/lists', reviewController.getReviews); // Si es admin trae todas, sino trae las del user
reviewsRouter.get('/movies/:movieId', reviewController.getMovieReviews);
reviewsRouter.get('/:id', reviewController.getReviewById);
reviewsRouter.put('/:id', reviewController.updateReview);
reviewsRouter.post('/', reviewController.createReview);
reviewsRouter.delete('/:id', reviewController.deleteReview);

export default reviewsRouter;





