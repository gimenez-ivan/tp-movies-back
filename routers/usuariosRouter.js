import { Router } from 'express';
import usuarioController from '../controller/usuarioController.js';

const usuarioController = new UsuarioController();

const usuariosRouter = Router();

usuariosRouter.get('/list', usuarioController.getAllUsuarios);
usuariosRouter.get('/:id', usuarioController.getUsuarioById);
usuariosRouter.put('/:id', usuarioController.updateUsuario);
usuariosRouter.post('/', usuarioController.createUsuario);
usuariosRouter.delete('/:id', usuarioController.deleteUsuario);

export default usuariosRouter;

