import { DataTypes as DT, Model, Sequelize } from "sequelize";
import connection from "../database/index.js";

class OwnCatalogo extends Model {}

OwnCatalogo.init(
  {
    idUsuario: {
      type: DT.INTEGER,
      allowNull: false
    },
    idPelicula: {
      type: DT.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: "OwnCatalogo",
    timestamps: false
  }
);

export default OwnCatalogo;
