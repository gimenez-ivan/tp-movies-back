// models/Pelicula.js
import { DataTypes, Model, Sequelize } from "sequelize";
import connection from "../database/index.js";

class Pelicula extends Model {

}

Pelicula.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    añoLanzamiento: DataTypes.INTEGER,
    género: DataTypes.STRING,
    director: DataTypes.STRING,
    creador: DataTypes.STRING,
    descripción: DataTypes.TEXT,
  },
  {
    sequelize: connection,
    modelName: "Pelicula",
    timestamps: false,
  }
);

export default Pelicula;
