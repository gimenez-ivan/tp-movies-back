import Usuario from "./Usuario.js";
import Catalogo from "./Catalogo.js";
import Pelicula from "./Pelicula.js";
import Review from "./Review.js";

Usuario.belongsToMany(Pelicula, { through: Catalogo, foreignKey: "idUsuario" });
Pelicula.belongsToMany(Usuario, { through: Catalogo, foreignKey: "idPelicula" });

Usuario.belongsToMany(Pelicula, { through: Review, foreignKey: "idUsuario" });
Pelicula.belongsToMany(Usuario, { through: Review, foreignKey: "idPelicula" });

export { Usuario, Pelicula, Review, Catalogo };
