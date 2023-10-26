import { DataTypes as DT, Model, Sequelize } from "sequelize";
import connection from "../database/index.js";

class Review extends Model {}

Review.init(
  {
    userId: {
      type: DT.INTEGER,
      allowNull: false,
    },
    movieId: {
      type: DT.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DT.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10,
      },
    },
    comment: DT.TEXT,
  },
  {
    sequelize: connection,
    modelName: "Review",
    timestamps: false,
  }
);

export default Review;
