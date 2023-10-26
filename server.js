import express from "express"
const app = express()
// require('dotenv').config()

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`)
// })


import connection from "./database/index.js";
import Usuario from "./models/Usuario.js";
import CatalogoUsuario from "./models/CatalogoUsuario.js";
import Pelicula from "./models/Pelicula.js";
import Review from "./models/Review.js";

Usuario.associate({ CatalogoUsuario, Pelicula }); // Asocia modelos
CatalogoUsuario.associate({ Usuario, Pelicula });

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

//const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

//app.use("/api", router);

await connection.sync({ force: false }).then(() => {
  app.listen(8080, () => {
    console.log("Server is running on port http://localhost:8080");
  });
});