import { Router } from "express";
import userRouter from "./userRouter.js";
import moviesRouter from "./moviesRouter.js";
import catalogRouter from "./catalogRouter.js";
import rolesRouter from "./rolesRouter.js";

const router = Router();

router.use("/users", userRouter);
router.use("/movies", moviesRouter);
router.use("/catalog", catalogRouter);
router.use("/roles", rolesRouter);

export default router;

