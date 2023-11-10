import { DataTypes as DT, Model } from "sequelize";
import connection from "../database/index.js";

class Role extends Model { }

Role.init(
  {
    scope: {
      type: DT.STRING,
      allowNull: false,
      unique: {
        name: 'unique_scope',
        msg: 'El valor del campo "scope" debe ser único.'
      },
      set(value) {
        this.setDataValue('scope', value.toLowerCase());
      },
      validate: {
        isLowercase: true,
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Role",
    timestamps: false
  }
);

export default Role;
