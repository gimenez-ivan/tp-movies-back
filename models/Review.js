import { DataTypes, Model, Sequelize } from "sequelize";
import connection from "../database/index.js";

class Review extends Model { }

Review.init(
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
                min: 1,
                max: 10,
            },
        },
        comment: DataTypes.TEXT,
    },
    {
        sequelize: connection,
        modelName: "Review",
        timestamps: false,
    }
);

export default Review;
