import { Review } from "../models/Index.js";

class ReviewController {
  constructor() {}

  getAllReviews = async (req, res) => {
    try {
      const reviews = await Review.findAll();
      res
        .status(200)
        .send({ success: true, message: "Todas las reseñas", data: reviews });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getReviewById = async (req, res) => {
    try {
      const { id } = req.params;
      const review = await Review.findOne({
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
      const review = await Review.create({ userId, movieId, rating, comment });
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
      const review = await Review.update(
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
      const review = await Review.destroy({
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
