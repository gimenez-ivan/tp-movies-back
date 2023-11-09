<<<<<<< Updated upstream
import usuario from "./usuario.js";
import catalogoUsuario from "./catalogoUsuario.js";
import pelicula from "./pelicula.js";
import review from "./review.js";

// Define las relaciones entre los modelos 
usuario.hasOne(catalogoUsuario, { foreignKey: "idUsuario" });
pelicula.belongsToMany(catalogoUsuario, { through: "CatalogoPelicula", foreignKey: "idPelicula" });
catalogoUsuario.belongsTo(usuario, { foreignKey: "idUsuario" });
catalogoUsuario.belongsToMany(pelicula, { through: "CatalogoPelicula", foreignKey: "idCatalogoUsuario" });
=======
import usuario from "../usuario.js";
import catalogoUsuario from "../catalogoUsuario.js";
import pelicula from "../pelicula.js";
import review from "../review.js";

// Define las relaciones entre los modelos 
usuario.hasOne(catalogoUsuario, { foreignKey: "idUsuario" });
pelicula.belongsToMany(catalogoUsuario, { through: "catalogoPelicula", foreignKey: "idPelicula" });
catalogoUsuario.belongsTo(usuario, { foreignKey: "idUsuario" });
catalogoUsuario.belongsToMany(pelicula, { through: "catalogoPelicula", foreignKey: "idCatalogoUsuario" });
>>>>>>> Stashed changes
review.belongsTo(usuario, { foreignKey: "userId" });
review.belongsTo(pelicula, { foreignKey: "movieId" });


export { usuario, pelicula, review, catalogoUsuario };
//borrar este comentario