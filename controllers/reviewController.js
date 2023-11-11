import { Review } from "../models/index.js";

class ReviewController {
  constructor() {
    this.review = Review;
  }

  getReviews = async (req, res) => {

    // Si es admin trae todas, sino trae las del user (hay que hacerlo)
    try {
      const reviews = await review.findAll();
      res
        .status(200)
        .send({ success: true, message: "Todas las reseñas", data: reviews });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUserReviews = async (req, res) => {
    // Trae todas las reviews de un usuario.
  }

  getReviewById = async (req, res) => {
    try {
      const { id } = req.params;
      const review = await review.findOne({
        where: { id },
      });
      if (!review) throw new Error("No se encontró la reseña");
      res
        .status(200)
        .send({ success: true, message: "Reseña encontrada", data: review });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createReview = async (req, res) => {
    try {
      const { userId, movieId, rating, comment } = req.body;
      const review = await review.create({ userId, movieId, rating, comment });
      if (!review) throw new Error("No se pudo crear la reseña");
      res
        .status(200)
        .send({ success: true, message: "Reseña creada", data: review });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateReview = async (req, res) => {
    try {
      const { id } = req.params;
      const { userId, movieId, rating, comment } = req.body;
      const review = await review.update(
        { userId, movieId, rating, comment },
        {
          where: {
            id,
          },
        }
      );
      res
        .status(200)
        .send({ success: true, message: "Reseña modificada", data: review });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteReview = async (req, res) => {
    try {
      const { id } = req.params;
      const review = await review.destroy({
        where: { id },
      });
      res
        .status(200)
        .send({ success: true, message: "Reseña eliminada", data: review });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ReviewController;
