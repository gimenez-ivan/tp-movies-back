import { Router } from 'express';

import UserController from '../controllers/UserController.js';
import { validateUser } from '../midlewares/validateUser.js';
import { isAdmin } from '../midlewares/isAdmin.js';

const usuariosRouter = Router();
const userController = new UserController();


usuariosRouter.post('/', userController.createUser);
usuariosRouter.get('/login', userController.login);
usuariosRouter.get('/list', isAdmin, userController.getUsers); // Solo admin puede ver todos los usuarios
usuariosRouter.get('/me', validateUser, userController.me);// esto ???
usuariosRouter.get('/:id', validateUser, userController.getUserById);
usuariosRouter.put('/:id', validateUser, userController.updateUser);
usuariosRouter.delete('/:id', validateUser, userController.deleteUser);

export default usuariosRouter;


