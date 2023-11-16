import Catalog from '../models/Catalog';
import { verifyToken } from '../utils/jwt.js';

export const checkOwnership = async (req, res, next) => {
  try {
    const catalogId = req.params.catalogId;
    const { token } = req.cookies;

    const user = verifyToken(token); // use el token de jwt de isAdmin.js

    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    // agarro de la bd el catálogo y la película asociada
    const catalog = await Catalog.findOne({
      where: { id: catalogId, userId: user.id },
      include: [{ model: Movie, as: 'movie' }],
    });

    if (!catalog) {
      return res.status(404).json({ error: 'Catálogo no encontrado.' });
    }

    // Verifica si el usuario es el propietario
    if (catalog.userId === user.id) {

      req.user = user; // Agrega el usuario al objeto de solicitud para que esté disponible en rutas posteriores
      req.catalog = catalog; // Agrega el catálogo al objeto de solicitud para que esté disponible en rutas posteriores
      next();
    } else {
      // El usuario no tiene permisos para realizar la acción
      return res.status(403).json({ error: 'No tienes permisos para realizar esta acción.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: error.message || 'Error de autenticación.' });
  }
};
