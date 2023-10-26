// models/Usuario.js
import { DataTypes, Model, Sequelize } from "sequelize";
import connection from "../database/index.js";

class Usuario extends Model {
    // Definimos las relaciones entre modelos
    static associate(models) {
        // Un usuario puede tener muchas entradas en la tabla CatalogoUsuario
        Usuario.hasMany(models.CatalogoUsuario, { foreignKey: "idUsuario" });
        // Establecemos una relación de "pertenencia a muchos" entre Usuario y Pelicula,
        // utilizando la tabla de unión CatalogoUsuario como intermediario.
        Usuario.belongsToMany(models.Pelicula, {
            through: models.CatalogoUsuario,
            foreignKey: "idUsuario",
            as: "peliculas",
        });
    }
}

Usuario.init(
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
            unique: true,
        },
        contraseña: {
            type: DataTypes.STRING,
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
