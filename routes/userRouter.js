import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import { isAdmin } from '../midlewares/isAdmin.js';
import ErrorMessages from '../error/errorMessages.js';

const usuariosRouter = Router();
const userController = new UserController();

// Iniciar sesión
usuariosRouter.post('/login', userController.login); // Ruta para iniciar sesión

// Obtener la lista de usuarios (Solo admin puede ver todos los usuarios)
usuariosRouter.get('/list', isAdmin, userController.getUsers); // Ruta para obtener la lista de usuarios (solo accesible para admin)

// Obtener un usuario por su ID
usuariosRouter.get('/:id', userController.getUserById); // Ruta para obtener un usuario por su ID

// Crear un nuevo usuario
usuariosRouter.post('/create', userController.createUser); // Ruta para crear un nuevo usuario

// Obtener los datos del usuario logueado (requiere autenticación)
usuariosRouter.get('/me', userController.me); // Ruta para obtener los datos del usuario logueado

// Actualizar un usuario por su ID (requiere autenticación)
usuariosRouter.put('/:id', userController.updateUser); // Ruta para actualizar un usuario por su ID

// Eliminar un usuario por su ID (requiere autenticación)
usuariosRouter.delete('/:id', userController.deleteUser); // Ruta para eliminar un usuario por su ID

// Manejo de rutas no encontradas
usuariosRouter.use((req, res) => {
  res.status(404).send({ success: false, message: ErrorMessages.RutaNoEncontrada });
});

export default usuariosRouter;
