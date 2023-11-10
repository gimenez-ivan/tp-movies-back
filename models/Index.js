import Usuario from "./Usuario.js";
import CatalogoUsuario from "./CatalogoUsuario.js";
import Pelicula from "./Pelicula.js";
import Review from "./Review.js";

Usuario.belongsToMany(Pelicula, { through: CatalogoUsuario, foreignKey: "idUsuario" });
Pelicula.belongsToMany(Usuario, { through: CatalogoUsuario, foreignKey: "idPelicula" });

Usuario.belongsToMany(Pelicula, { through: Review, foreignKey: "idUsuario" });
Pelicula.belongsToMany(Usuario, { through: Review, foreignKey: "idPelicula" });

export { Usuario, Pelicula, Review, CatalogoUsuario };
