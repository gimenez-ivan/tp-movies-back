import { DataTypes, Model } from "sequelize";
import connection from "../database/index.js";

class Catalogo extends Model {}

Catalogo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idPelicula: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "catalogo",
    timestamps: false,
  }
);

export default Catalogo;
