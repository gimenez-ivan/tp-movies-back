import { DataTypes, Model } from "sequelize";
import connection from "../database/index.js";

class catalogoUsuario extends Model {}

catalogoUsuario.init(
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idPelicula: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "catalogoUsuario",
    timestamps: false,
  }
);

export default catalogoUsuario;
