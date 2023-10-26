import { DataTypes, Model, Sequelize } from "sequelize";
import connection from "../database/index.js";

class CatalogoUsuario extends Model {

  static associate(models) {
    //permite que un usuario tenga múltiples entradas en su catálogo, y cada entrada en el catálogo está asociada tanto a un usuario como a una película específica. 
    //FATAL TESTEAR
    CatalogoUsuario.belongsTo(models.Usuario, { foreignKey: "idUsuario" });
    CatalogoUsuario.belongsTo(models.Pelicula, { foreignKey: "idPelicula" });
  }
}

CatalogoUsuario.init(
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
    modelName: "CatalogoUsuario",
    timestamps: false,
  }
);

export default CatalogoUsuario;
