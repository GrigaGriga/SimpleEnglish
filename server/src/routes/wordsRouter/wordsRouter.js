const wordsRouter = require('express').Router();
const WordsService = require('../../services/WordsServices/WordsServices');
// const { Word, Card } = require('../../../db/models');
// const checkId = require('../../middlewares/checkId');
// const { verifyAccessToken } = require('../../middlewares/verifyTokens');

wordsRouter.route('/:id').get(async (req, res) => {
  const id = Number(req.params.id);
  try {
    const wordsArr = await WordsService.getAllWordsByCard(id);
    // console.log(wordsArr.map(el=>el.get()));
    res.json(wordsArr.map(el=>el.get()));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = wordsRouter;
