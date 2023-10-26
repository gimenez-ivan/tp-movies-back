import { DataTypes as DT, Model, Sequelize } from "sequelize";
import connection from "../database/index.js";

class Pelicula extends Model {}

Pelicula.init(
  {
    id: {
      type: DT.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titulo: {
      type: DT.STRING,
      allowNull: false
    },
    añoLanzamiento: DT.INTEGER,
    género: DT.STRING,
    director: DT.STRING,
    creador: DT.STRING,
    descripción: DT.TEXT
  },
  {
    sequelize: connection,
    modelName: "Pelicula",
    timestamps: false
  }
);

export default Pelicula;
