import { Review } from "../models/index.js";

class ReviewService {
  async getAllReviews() {
    try {
      const reviews = await Review.findAll();
      return { success: true, data: reviews };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  async getReviewById(id) {
    try {
      const review = await Review.findOne({
        where: { id },
      });
      if (!review) {
        return { success: false, error: "No se encontró la reseña" };
      }
      return { success: true, data: review };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  async createReview(userId, movieId, rating, comment) {
    try {
      const review = await Review.create({ userId, movieId, rating, comment });
      if (!review) {
        return { success: false, error: "No se pudo crear la reseña" };
      }
      return { success: true, data: review };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  async updateReview(id, userId, movieId, rating, comment) {
    try {
      const [updatedRows] = await Review.update(
        { userId, movieId, rating, comment },
        {
          where: { id },
        }
      );
      if (updatedRows === 0) {
        return { success: false, error: "No se encontró la reseña para actualizar" };
      }
      return { success: true, message: "Reseña modificada" };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  async deleteReview(id) {
    try {
      const deletedRows = await Review.destroy({
        where: { id },
      });
      if (deletedRows === 0) {
        return { success: false, error: "No se encontró la reseña para eliminar" };
      }
      return { success: true, message: "Reseña eliminada" };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
export default ReviewService;
