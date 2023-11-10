import { DataTypes, Model } from "sequelize";
import connection from "../database/index.js";
import bcrypt from "bcrypt";

class User extends Model { }

User.init(
  {
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: "userName",
        msg: "El nombre de usuario ingresado ya existe, elige otro.",
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
    contrasenia: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La clave no puede estar vacía.",
        },
        len: {
          args: [8, 255],
          msg: "La clave debe tener al menos 8 caracteres.",
        },
      },
    }
  },
  {
    sequelize: connection,
    modelName: "User",
    timestamps: false,
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.salt = salt;

  const hashPassword = await bcrypt.hash(user.password, salt);
  user.password = hashPassword;
});

export default User;
