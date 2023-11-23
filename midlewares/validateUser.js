import { verifyToken } from "../utils/jwt.js";

export const validateUser = async (req, res, next) => {
  const currentPath = (req.baseUrl + req.path)
  const method = { req }
  try {
    const { token } = req.cookies;
    const user = verifyToken(token);

    if (!user && !isCreatePath(currentPath, method)) throw new Error("credenciales inválidas")

    req.user = user;
    next();

  } catch (error) {
    res.status(401).send({ message: `Error al validar el usuario: ${error.message}` });
  }
};

const isCreatePath = (path, method) => {
  return path === '/api/users/create' && req.method === 'POST';
}