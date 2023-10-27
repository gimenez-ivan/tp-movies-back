import { Router } from 'express';
import reviewController from '../controller/reviewController.js';

const reviewController = new ReviewController();

const reviewRouter = Router();

reviewRouter.get('/list', reviewController.getAllReviews);
reviewRouter.get('/:id', reviewController.getReviewById);
reviewRouter.put('/:id', reviewController.updateReview);
reviewRouter.post('/', reviewController.createReview);
reviewRouter.delete('/:id', reviewController.deleteReview);

module.exports = reviewRouter;





