import Usuario from "./usuario.js";
import CatalogoUsuario from "../catalogoUsuario.js";
import Pelicula from "../pelicula.js";
import Review from "../review.js";


Usuario.hasOne(CatalogoUsuario, { foreignKey: "idUsuario" });
Pelicula.belongsToMany(CatalogoUsuario, { through: "CatalogoPelicula", foreignKey: "idPelicula" });
CatalogoUsuario.belongsTo(Usuario, { foreignKey: "idUsuario" });
CatalogoUsuario.belongsToMany(pelicula, { through: "CatalogoPelicula", foreignKey: "idCatalogoUsuario" });
Review.belongsTo(usuario, { foreignKey: "userId" });
Review.belongsTo(pelicula, { foreignKey: "movieId" });


export { Usuario, Pelicula, Review, CatalogoUsuario };
