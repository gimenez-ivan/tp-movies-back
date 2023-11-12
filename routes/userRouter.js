import { Router } from 'express';

import UserController from '../controllers/UserController.js';

const usuariosRouter = Router();
const userController = new UserController();

usuariosRouter.get('/login', userController.login);
usuariosRouter.get('/list', userController.getUsers); // Solo admin puede ver todos los usuarios
usuariosRouter.get('/:id', userController.getUserById);
usuariosRouter.post('/', userController.createUser);
usuariosRouter.put('/:id', userController.updateUser);
usuariosRouter.delete('/:id', userController.deleteUser);

export default usuariosRouter;


