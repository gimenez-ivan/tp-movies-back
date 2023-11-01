import { Router } from "express";
import usuariosRouter from "./usuariosRouter.js";
import peliculasRouter from "./peliculasRouter.js";

const router = Router();

router.use("/usuarios", usuariosRouter);
router.use("/peliculas", peliculasRouter);

export default router;

