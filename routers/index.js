const { Router } = require('express')

const router = Router();

const usuariosRouter = require('./usuarios.router');
const peliculasRouter = require('./peliculas.router');

router.use('/usuarios', usuariosRouter);
router.use('/peliculas', peliculasRouter);

module.exports = router;


