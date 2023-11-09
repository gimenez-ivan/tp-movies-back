import { DataTypes, Model } from "sequelize";
import connection from "../database/index.js";

class usuario extends Model {}

usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombreUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: "nombreUsuario",
        msg: "El nombre de usuario ya existe, elige otro.",
      },
      validate: {
        notEmpty: {
          msg: "El nombre de usuario no puede estar vacío.",
        },
        len: {
          args: [3, 255],
          msg: "El nombre de usuario debe tener entre 3 y 255 caracteres.",
        },
      },
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La contraseña no puede estar vacía.",
        },
        len: {
          args: [8, 255],
          msg: "La contraseña debe tener al menos 8 caracteres.",
        },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "usuario",
    timestamps: false,
  }
);

export default usuario;
