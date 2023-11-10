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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

await connection.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});
