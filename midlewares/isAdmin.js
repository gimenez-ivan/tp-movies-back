export const isAdmin = async (req, res, next) => {
  try {
    const { user } = req;
    if (user.roleName !== "admin") throw new Error("No tiene permiso para utilizar este recurso");
    next();
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};