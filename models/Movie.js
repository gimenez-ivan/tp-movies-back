import { DataTypes, Model } from "sequelize";
import connection from "../database/index.js";

class Movie extends Model {}

Movie.init(
  {
    movieId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El título de la película no puede estar vacío.",
        },
      },
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "El año de lanzamiento debe ser un número entero.",
        },
        min: {
          args: [1800],
          msg: "El año de lanzamiento debe ser igual o superior a 1800.",
        },
      },
    },
    category: {
      type: DataTypes.STRING,
    },
    director: {
      type: DataTypes.STRING,
    },
    creator: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize: connection,
    modelName: "Movie",
    timestamps: false,
  }
);

export default Movie;
