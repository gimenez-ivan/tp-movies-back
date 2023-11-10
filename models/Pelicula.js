import { DataTypes, Model } from "sequelize";
import connection from "../database/index.js";

class Pelicula extends Model {}

Pelicula.init(
  {
    idPelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El título de la película no puede estar vacío.",
        },
      },
    },
    anioLanzamiento: {
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
    genero: {
      type: DataTypes.STRING,
    },
    director: {
      type: DataTypes.STRING,
    },
    creador: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize: connection,
    modelName: "pelicula",
    timestamps: false,
  }
);

export default Pelicula;
