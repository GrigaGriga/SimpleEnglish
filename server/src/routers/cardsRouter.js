const cardsRouter = require('express').Router();
const CardsServices = require('../services/CardsServices/CardsServices');

cardsRouter.route('/').get(async (req, res) => {
    try {
        const cardsArr = await CardsServices.getAllCards();
        res.json(cardsArr)
    } catch (error) {
        console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
    }
})

module.exports = cardsRouter;