import { verifyToken } from "../utils/jwt.js";

export const validateUser = async (req, res, next) => {
  const currentPath = req.baseUrl + req.path
  const { method } = req

  if (isCreatePath(currentPath, method) || isLoginPath(currentPath, method)) return next();

  try {
    const { token } = req.cookies;
    const user = verifyToken(token);

    if (!user) throw new Error("credenciales inválidas")

    req.user = user;
    next();

  } catch (error) {
    res.status(401).send({ message: `Error al validar el usuario: ${error.message}` });
  }
};

const isCreatePath = (path, method) => {
  return path === '/api/users/create' && method === 'POST';
}

const isLoginPath = (path, method) => {
  return path === '/api/users/login' && method === 'POST';
}