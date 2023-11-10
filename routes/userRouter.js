import { Router } from 'express';

import UserController from '../controllers/UserController.js';

const usuariosRouter = Router();
const userController = new UserController();


usuariosRouter.get('/list', userController.getUsers);
usuariosRouter.get('/:id', userController.getUserById);
usuariosRouter.put('/:id', userController.createUser);
usuariosRouter.post('/', userController.updateUser);
usuariosRouter.delete('/:id', userController.deleteUser);




export default usuariosRouter;


