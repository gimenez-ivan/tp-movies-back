import { Review } from "../models/index.js";
import { Error } from "../error/ErrorMessage.js";

class ReviewService {
  async getAllReviews() {
    try {
      const reviews = await Review.findAll();
      return { success: true, data: reviews };
    } catch (error) {
      return { success: false, error: Error.errorObtenerReviews };
    }
  }

  async getReviewById(id) {
    try {
      const review = await Review.findOne({ where: { id } });
      if (!review) {
        return { success: false, error: Error.reviewNoEncontrada };
      }
      return { success: true, data: review };
    } catch (error) {
      return { success: false, error: Error.errorObtenerReview };
    }
  }

  async createReview(userId, movieId, rating, comment) {
    try {
      const review = await Review.create({ userId, movieId, rating, comment });
      if (!review) {
        return { success: false, error: Error.errorCrearReview };
      }
      return { success: true, data: review };
    } catch (error) {
      return { success: false, error: Error.errorCrearReview };
    }
  }

  async updateReview(id, userId, movieId, rating, comment) {
    try {
      const [updatedRows] = await Review.update(
        { userId, movieId, rating, comment },
        { where: { id } }
      );
      if (updatedRows === 0) {
        return { success: false, error: Error.errorActualizarReview };
      }
      return { success: true, message: "Reseña modificada" };
    } catch (error) {
      return { success: false, error: Error.errorActualizarReview };
    }
  }

  async deleteReview(id) {
    try {
      const deletedRows = await Review.destroy({ where: { id } });
      if (deletedRows === 0) {
        return { success: false, error: Error.errorEliminarReview };
      }
      return { success: true, message: "Reseña eliminada" };
    } catch (error) {
      return { success: false, error: Error.errorEliminarReview };
    }
  }
}

export default ReviewService;
