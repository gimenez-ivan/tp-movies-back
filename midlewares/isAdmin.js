import ErrorMessages from "../error/errorMessages.js";

export const isAdmin = async (req, res, next) => {
  try {
    const {user} = req;
    if(user.role !== "admin") throw new Error(ErrorMessages.SoloPropietario);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};