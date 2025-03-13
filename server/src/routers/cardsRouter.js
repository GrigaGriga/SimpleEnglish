const cardsRouter = require('express').Router();
const CardsServices = require('../services/CardsServices/CardsServices');

cardsRouter.route('/').get(async (req, res) => {
    console.log('11111')
    try {
        const cardsArr = await CardsServices.getAllCards();
        console.log('cardsArr', cardsArr);
        res.json(cardsArr)
    } catch (error) {
        console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
    }
})

module.exports = cardsRouter;