import { DataTypes, Model } from "sequelize";
import connection from "../database/index.js";

class review extends Model {}

review.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "La calificación debe ser un número entero.",
        },
        min: {
          args: [1],
          msg: "La calificación debe ser igual o superior a 1.",
        },
        max: {
          args: [10],
          msg: "La calificación debe ser igual o inferior a 10.",
        },
      },
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize: connection,
    modelName: "review",
    timestamps: false,
  }
);

export default review;
