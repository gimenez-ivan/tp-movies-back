export const isOwner = async (req, res, next) =>{
try {
    const {usuario} = req;
    if(usuario !== "owner") throw new Error("Error de acceso: Solo el propietario tiene permisos para esta función.");
    req.usuario = usuario;
    next();
} catch (error) {
    res.status(401).send({message: error.message});
}
}