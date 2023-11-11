import { Router } from "express";
import userRouter from "./userRouter.js";
import moviesRouter from "./moviesRouter.js";
import catalogRouter from "./catalogRouter.js";
import rolesRouter from "./rolesRouter.js";
import reviewsRouter from "./reviewsRouter.js";
import profilesRouter from "./profilesRouter.js";

const router = Router();

router.use("/users", userRouter);
router.use("/profiles", profilesRouter);
router.use("/users/catalog", catalogRouter);
router.use("/users/reviews", catalogRouter);
router.use("/movies", moviesRouter);
router.use("/roles", rolesRouter);

export default router;

