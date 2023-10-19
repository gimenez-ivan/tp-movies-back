const { Router } = require('express');

const reviewRouter = Router(); 

reviewRouter.get('/list', (req, res) => {
    res.send('Lista de reseñas');
})

reviewRouter.get('/:id', (req, res) => {
    res.send(`GET reseña por id`);
})

reviewRouter.put('/:id', (req, res) => {
    res.send(`PUT reseña por id`);
})

reviewRouter.post('/', (req, res) => {
    res.send(`POST reseña`);
})

reviewRouter.delete('/:id', (req, res) => {
    res.send(`DELETE reseña por id`);
})

module.exports = reviewRouter;






