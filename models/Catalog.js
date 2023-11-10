import { DataTypes, Model } from "sequelize";
import connection from "../database/index.js";

class Catalogo extends Model { }

Catalogo.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize: connection,
    modelName: "catalogo",
    timestamps: false,
  }
);

export default Catalogo;
