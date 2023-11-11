import { Router } from 'express';
import reviewController from '../controller/reviewController.js';

const reviewController = new reviewController();

const reviewRouter = Router();

reviewRouter.get('/lists', reviewController.getReviews); // Si es admin trae todas, sino trae las del user
reviewRouter.get('/movies/:movieId', reviewController.getMovieReviews);
reviewRouter.get('/:id', reviewController.getReviewById);
reviewRouter.put('/:id', reviewController.updateReview);
reviewRouter.post('/', reviewController.createReview);
reviewRouter.delete('/:id', reviewController.deleteReview);

module.exports = reviewRouter;





