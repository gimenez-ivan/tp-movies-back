import express from "express";
import connection from "./database/index.js";
import router from "./routes/index.js";
import { SERVER_PORT } from "./config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

await connection.sync({ force: true }).then(() => {
  app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost:${SERVER_PORT}`);
  });
});
