import Usuario from "./Usuario.js";
import CatalogoUsuario from "./CatalogoUsuario.js";
import Pelicula from "./Pelicula.js";
import Review from "./Review.js";


Usuario.hasOne(CatalogoUsuario, { foreignKey: "idUsuario" });
Pelicula.belongsToMany(CatalogoUsuario, { through: "CatalogoPelicula", foreignKey: "idPelicula" });
CatalogoUsuario.belongsTo(Usuario, { foreignKey: "idUsuario" });
CatalogoUsuario.belongsToMany(Pelicula, { through: "CatalogoPelicula", foreignKey: "idCatalogoUsuario" });
Review.belongsTo(Usuario, { foreignKey: "userId" });
Review.belongsTo(Pelicula, { foreignKey: "movieId" });


export { Usuario, Pelicula, Review, CatalogoUsuario };
