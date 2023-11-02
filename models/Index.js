import Usuario from "./Usuario.js";
import CatalogoUsuario from "./CatalogoUsuario.js";
import Pelicula from "./Pelicula.js";
import Review from "./Review.js";

// Define las relaciones entre los modelos aquí
Usuario.hasOne(CatalogoUsuario, { foreignKey: "idUsuario" });
CatalogoUsuario.belongsTo(Usuario, { foreignKey: "idUsuario" });
CatalogoUsuario.belongsToMany(Pelicula, { through: "CatalogoPelicula", foreignKey: "idCatalogoUsuario" });
Pelicula.belongsToMany(CatalogoUsuario, { through: "CatalogoPelicula", foreignKey: "idPelicula" });
Review.belongsTo(Usuario, { foreignKey: "userId" });
Review.belongsTo(Pelicula, { foreignKey: "movieId" });


export { Usuario, CatalogoUsuario, Pelicula, Review };
//borrar este comentario