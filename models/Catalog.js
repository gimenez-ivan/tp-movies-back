import { DataTypes, Model } from "sequelize";
import connection from "../database/index.js";

class Catalog extends Model { }

Catalog.init(
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
    modelName: "catalog",
    timestamps: false,
  }
);

export default Catalog;
