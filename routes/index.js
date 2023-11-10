import { Router } from "express";
import usuariosRouter from "./usuariosRouter.js";
import peliculasRouter from "./peliculasRouter.js";
import catalogoRouter from "./catalogoRouter.js";

const router = Router();

router.use("/usuarios", usuariosRouter);
router.use("/peliculas", peliculasRouter);
router.use("/catalogo", catalogoRouter);

export default router;

