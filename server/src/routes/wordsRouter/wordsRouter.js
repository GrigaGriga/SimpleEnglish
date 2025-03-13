const wordsRouter = require('express').Router();
const { verifyAccessToken } = require('../../middlewares/verifyTokens');
const WordsService = require('../../services/WordsServices/WordsServices');
// const { Word, Card } = require('../../../db/models');
// const checkId = require('../../middlewares/checkId');

wordsRouter.route('/:cardId').get(verifyAccessToken, async (req, res) => {
  const { id: userId } = res.locals.user;
  console.log(userId)
  const cardId = Number(req.params.cardId);
  console.log(req.params)
  try {
    const wordsArr = await WordsService.getAllWordsByCard(cardId, userId);
    // console.log(wordsArr.map(el=>el.get()));
    res.json(wordsArr.map(el=>el.get()));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = wordsRouter;
