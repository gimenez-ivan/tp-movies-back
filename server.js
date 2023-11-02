import express from "express";
import connection from "./database/index.js";
import Usuario from "./models/Usuario.js";
import CatalogoUsuario from "./models/CatalogoUsuario.js";
import Pelicula from "./models/Pelicula.js";
import Review from "./models/Review.js";
import router from "./routes/index.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Pelicula.sync({ force: true })
  .then(() => {
    console.log("Tabla de Peliculas sincronizada con la base de datos");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla de Peliculas:", error);
  });

Usuario.sync({ force: true })
  .then(() => {
    console.log("Tabla de Usuarios sincronizada con la base de datos");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla de Usuarios:", error);
  });

Review.sync({ force: true })
  .then(() => {
    console.log("Tabla de Reviews sincronizada con la base de datos");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla de Reviews:", error);
  });

CatalogoUsuario.sync({ force: true })
  .then(() => {
    console.log("Tabla de Catalogo sincronizada con la base de datos");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla de Catalogo:", error);
  });

await connection.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});
