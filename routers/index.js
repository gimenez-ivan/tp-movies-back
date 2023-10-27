import { Router } from "express";
import usuariosRouter from "./usuarios.router";
import peliculasRouter from "./peliculas.router";

const router = Router();

router.use("/usuarios", usuariosRouter);
router.use("/peliculas", peliculasRouter);

export default router;

