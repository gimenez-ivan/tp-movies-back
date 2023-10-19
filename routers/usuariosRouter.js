const { Router } = require('express');

const usuariosRouter = Router();

usuariosRouter.get('/list', (req, res) => {
    res.send('Lista de usuarios');
})

usuariosRouter.get('/:id', (req, res) => {
    res.send(`GET usuario por id`);
})

usuariosRouter.put('/:id', (req, res) => {
    res.send(`PUT usuario por id`);
})

usuariosRouter.post('/', (req, res) => {
    res.send(`POST usuario`);
})

usuariosRouter.delete('/:id', (req, res) => {
    res.send(`DELETE usuario por id`);
})

module.exports = usuariosRouter;
