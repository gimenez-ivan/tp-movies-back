export const isAdmin = async (req, res, next) => {
  try {
    const { usuario } = req;
    if (usuario.role !== "admin") throw new Error("No tiene permiso para utilizar este recurso");
    req.usuario = usuario;
    next();
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};