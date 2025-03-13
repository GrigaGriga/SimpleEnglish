const wordsRouter = require('express').Router();
const WordsService = require('../../services/WordsServices/WordsServices');
// const { Word, Card } = require('../../../db/models');
// const checkId = require('../../middlewares/checkId');
// const { verifyAccessToken } = require('../../middlewares/verifyTokens');

wordsRouter.route('/:cardId').get(async (req, res) => {
  const cardId = Number(req.params.cardId);
  console.log(req.params)
  try {
    const wordsArr = await WordsService.getAllWordsByCard(cardId);
    // console.log(wordsArr.map(el=>el.get()));
    res.json(wordsArr.map(el=>el.get()));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = wordsRouter;
