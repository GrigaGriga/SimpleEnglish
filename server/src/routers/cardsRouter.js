const cardsRouter = require('express').Router();
const CardsServices = require('../services/CardsServices/CardsServices');

cardsRouter.route('/').get(async (req, res) => {
    const id = Number(req.params.id);
    try {
        const cardsArr = await CardsServices.getAllCards(id);
        console.log(cardsArr)
    } catch (error) {
        console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
    }
})