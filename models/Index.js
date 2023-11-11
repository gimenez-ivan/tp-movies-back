import User from "./User.js";
import Role from "./Role.js";
import Profile from "./Profile.js";
import Catalog from "./Catalog.js";
import Movie from "./Movie.js";
import Review from "./Review.js";

User.belongsToMany(Movie, { through: Catalog, foreignKey: "userId" });
Movie.belongsToMany(User, { through: Catalog, foreignKey: "movieId" });

User.belongsToMany(Movie, { through: Review, foreignKey: "userId" });
Movie.belongsToMany(User, { through: Review, foreignKey: "movieId" });

Role.hasMany(User, { foreignKey: 'roleId', })
User.belongsTo(Role, { foreignKey: "roleId" })

User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User, { foreignKey: 'userId' });

//User.hasOne(Profile, { through: Profile, foreignKey: 'userId' });
// Esta bien que solo un profile tenga un userId? En nuestro modelo se crea el usuario y despues a este se le asocia 

export { User, Movie, Review, Catalog, Profile, Role };
