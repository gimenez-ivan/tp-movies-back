import { Movie, Review } from "../models/index.js"
import { Op } from 'sequelize';

class MovieController {
  constructor() {
    this.movie = Movie;
  }

  getMovies = async (req, res) => {
    try {
      // Obtener todas las películas
      const movies = await Movie.findAll();

      if (movies.length === 0) {
        // Si no hay películas te avisa
        res.status(200).send({
          success: true,
          message: "No hay películas disponibles actualmente.",
          data: [],
        });
      } else {
      
        res.status(200).send({
          success: true,
          message: "Todas las películas",
          data: movies,
        });
      }
    } catch (error) {
      
      res.status(400).send({
        success: false,
        message: `Error al obtener películas: ${error.message}`,
      });
    }
  };

  getMovieByRating = async (req, res) => {
    try {
      // Obtiene la calificación del cuerpo de la solicitud (asumo que la trae desde el frontend VER!
      const { rating } = req.body;
      
      // Valida que la calificación sea un número válido
      const parsedRating = parseInt(rating, 10);
      if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 10) {
        return res.status(400).send({ success: false, message: "La calificación proporcionada no es válida." });
      }
  
      // Busca las revisiones con una calificación mayor o igual a la proporcionada
      const reviews = await Review.findAll({
        where: {
          rating: {
            [Op.gte]: parsedRating,
          },
        },
      });
  
      // Obtiene los IDs de las películas desde las revisiones
      const movieIds = reviews.map(review => review.movieId);
  
      // Busca las películas correspondientes a los IDs obtenidos
      const movies = await Movie.findAll({
        where: {
          id: {
            [Op.in]: movieIds,
          },
        },
      });
  
      res.status(200).send({ success: true, message: "Películas con calificación mayor o igual", data: movies });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getTopMovies = async (req, res) => {
    try {
      // Obtener todas las películas con calificación 10
      const topMovies = await Movie.findAll({
        where: {
          rating: 10, // Filtrar por calificación 10
        },
      });
  
      if (topMovies.length === 0) {
        // Si no hay películas con calificación 10, envía un mensaje indicando que no las hay
        res.status(200).send({
          success: true,
          message: "No hay películas con calificación 10 disponibles actualmente.",
          data: [],
        });
      } else {
        // Si hay películas con calificación 10, envía la lista
        res.status(200).send({
          success: true,
          message: "Películas con calificación 10",
          data: topMovies,
        });
      }
    } catch (error) {
      // En caso de error, envía un mensaje de error
      res.status(400).send({
        success: false,
        message: `Error al obtener películas con calificación 10: ${error.message}`,
      });
    }
  };
  

  getMovieById = async (req, res) => {
    try {
      const { id } = req.params;
      console.log("Received ID:", id);
      const movieId = parseInt(id, 10);
      
      if (isNaN(movieId)) {
        throw new Error("El ID de la película no es válido.");
      }

      const movie = await Movie.findOne({ where: { id: movieId } });

      if (!movie) {
        throw new Error("No se encontró la película");
      }
  
      res.status(200).send({ success: true, message: "Película encontrada", data: movie });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

createMovie = async (req, res) => {
  try {
    const { title, year, category, director, description } = req.body;
    const nuevaPelicula = await Movie.create({ title, year, category, director, description });
    res.status(200).send({ success: true, message: "Película creada", data: nuevaPelicula });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};


updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, year, category, director, description } = req.body;
    const movieActualizada = await Movie.update(
      { title, year, category, director, description },
      { where: { id } }
    );
    res.status(200).send({ success: true, message: "Película modificada", data: movieActualizada });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};


deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id) || parseInt(id) <= 0) {
      return res.status(400).send({ success: false, message: "El ID de la película no es válido." });
    }

    const existingMovie = await Movie.findByPk(id);
    if (!existingMovie) {
      return res.status(404).send({ success: false, message: "No se encontró la película con el ID proporcionado." });
    }

    const peliculaEliminada = await Movie.destroy({ where: { id } });

  
    if (peliculaEliminada > 0) {
      res.status(200).send({ success: true, message: "Película eliminada", data: peliculaEliminada });
    } else {
      res.status(404).send({ success: false, message: "No se encontró la película con el ID proporcionado." });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: `Error al eliminar la película: ${error.message}` });
  }
};

}

export default MovieController;
