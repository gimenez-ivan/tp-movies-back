import { Router } from 'express';

import UsuarioController from '../controllers/usuarioController.js';

const usuariosRouter = Router();
const userController = new UsuarioController();


usuariosRouter.get('/list', userController.getAllUsuarios);
usuariosRouter.get('/:id', userController.getUserById);
usuariosRouter.put('/:id', userController.updateUser);
usuariosRouter.post('/', userController.createUser);
usuariosRouter.delete('/:id', userController.deleteUser);

export default usuariosRouter;


