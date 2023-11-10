import Catalog from "./Catalog.js";
import Movie from "./Movie.js";
import Review from "./Review.js";
import Role from "./Role.js";
import User from "./User.js";

User.belongsToMany(Movie, { through: Catalog, foreignKey: "userId" });
Movie.belongsToMany(User, { through: Catalog, foreignKey: "movieId" });

User.belongsToMany(Movie, { through: Review, foreignKey: "userId" });
Movie.belongsToMany(User, { through: Review, foreignKey: "movieId" });

Role.hasMany(User, { foreignKey: 'roleId', })
User.belongsTo(Role, { foreignKey: "roleId" })

export { User, Movie, Review, Catalog };
