import { DataTypes as DT, Model } from "sequelize";
import connection from "../database/index.js";

class Profile extends Model { }

Profile.init(
    {
        name: {
            type: DT.STRING,
            allowNull: false,
        },
        lastName: {
            type: DT.STRING,
            allowNull: false,
        },
        city: {
            type: DT.STRING,
            allowNull: false,
        },
        country: {
            type: DT.STRING,
            allowNull: false,
        },
        about: {
            type: DT.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 255],
                    msg: "La descripción debe tener entre 3 y 255 caracteres.",
                },
            }
        }
    },
    {
        sequelize: connection,
        modelName: "profile",
        timestamps: false
    }
);

export default Profile;
