const { Router } = require('express');

const peliculasRouter = Router();

peliculasRouter.get('/list', (req, res) => {
    res.send('Lista de peliculas');
})

peliculasRouter.get('/:id', (req, res) => {
    res.send(`GET pelicula por id`);
})

peliculasRouter.put('/:id', (req, res) => {
    res.send(`PUT pelicula por id`);
})

peliculasRouter.post('/', (req, res) => {
    res.send(`POST pelicula`);
})

peliculasRouter.delete('/:id', (req, res) => {
    res.send(`DELETE pelicula por id`);
})

module.exports = peliculasRouter;


