import { DataTypes, Model } from "sequelize";
import connection from "../database/index.js";

class Catalog extends Model { }

Catalog.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El nombre del catalogo no puede estar vacío.",
        },
        len: {
          args: [3, 50],
          msg: "El nombre debe tener entre 3 y 50 caracteres.",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize: connection,
    modelName: "catalog",
    timestamps: false,
  }
);

export default Catalog;
