import { Router } from 'express';
import UserController from '../controllers/usuarioController.js';

const usuarioController = new UserController();

const usuariosRouter = Router();

usuariosRouter.get('/list', usuarioController.getAllUsuarios);
usuariosRouter.get('/:id', usuarioController.getUserById);
usuariosRouter.put('/:id', usuarioController.updateUser);
usuariosRouter.post('/', usuarioController.createUser);
usuariosRouter.delete('/:id', usuarioController.deleteUser);

export default usuariosRouter;


