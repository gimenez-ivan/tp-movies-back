import { Review } from "../models/index.js";
import { ErrorMessages } from "../error/errorMessages.js";

class ReviewController {
  constructor() {
    this.review = Review;
  }

  // Obtener todas las reseñas (admin obtiene todas, usuario solo las suyas)
  getReviews = async (req, res) => {
    try {
      const { usuario } = req;

      if (usuario.role === "admin") {
        // Si es admin, traer todas las reseñas
        const reviews = await this.review.findAll();
        res.status(200).send({ success: true, message: "Todas las reseñas", data: reviews });
      } else {
        // Si es usuario normal, traer solo sus reseñas
        const reviews = await this.review.findAll({ where: { userId: usuario.id } });
        res.status(200).send({ success: true, message: "Tus reseñas", data: reviews });
      }
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Buscar las reseñas de una película específica
  getMovieReviews = async (req, res) => {
    try {
      const { movieId } = req.params;
      const movieReviews = await this.review.findAll({ where: { movieId } });
      res.status(200).send({ success: true, message: `Reseñas de la película con ID ${movieId}`, data: movieReviews });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Obtener todas las reseñas de un usuario
  getUserReviews = async (req, res) => {
    try {
      const { usuario } = req;
      const userReviews = await this.review.findAll({ where: { userId: usuario.id } });
      res.status(200).send({ success: true, message: "Tus reseñas", data: userReviews });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Obtener una reseña por su ID
  getReviewById = async (req, res) => {
    try {
      const { id } = req.params;
      const review = await this.review.findOne({
        where: { id },
      });

      if (!review) throw new Error(ErrorMessages.NoReseña);

      res.status(200).send({ success: true, message: "Reseña encontrada", data: review });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Crear una nueva reseña
  createReview = async (req, res) => {
    try {
      const { userId, movieId, rating, comment } = req.body;
      const review = await this.review.create({ userId, movieId, rating, comment });

      if (!review) throw new Error(ErrorMessages.NoCrearReseña);

      res.status(200).send({ success: true, message: "Reseña creada", data: review });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Actualizar una reseña existente
  updateReview = async (req, res) => {
    try {
      const { id } = req.params;
      const { userId, movieId, rating, comment } = req.body;
      const review = await this.review.update(
        { userId, movieId, rating, comment },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).send({ success: true, message: "Reseña modificada", data: review });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Eliminar una reseña por su ID
  deleteReview = async (req, res) => {
    try {
      const { id } = req.params;
      const review = await this.review.destroy({
        where: { id },
      });

      res.status(200).send({ success: true, message: "Reseña eliminada", data: review });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ReviewController;
