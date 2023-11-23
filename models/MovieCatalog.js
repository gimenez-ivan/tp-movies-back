import { DataTypes, Model } from "sequelize";
import connection from "../database/index.js";

class MovieCatalog extends Model { }

MovieCatalog.init(
  {
    catalogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: "moviecatalog",
    timestamps: false,
  }
);

export default MovieCatalog;
