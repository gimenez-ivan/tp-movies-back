import { DataTypes as DT, Model, Sequelize } from "sequelize";
import connection from "../database/index.js";

class Usuario extends Model {}

Usuario.init(
  {
    id: {
      type: DT.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombreUsuario: {
      type: DT.STRING,
      allowNull: false,
      unique: true,
    },
    contraseña: {
      type: DT.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Usuario",
    timestamps: false,
  }
);

export default Usuario;
