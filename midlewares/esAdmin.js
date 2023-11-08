export const esAdmin = async (req, res, next) => {
    try {
      const { usuario } = req;
      if (usuario.role !== "Admin") throw new Error("No tiene permiso para ingresar");
      req.usuario = usuario;
      next();
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  };