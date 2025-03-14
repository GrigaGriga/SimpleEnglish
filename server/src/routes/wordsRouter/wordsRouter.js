const wordsRouter = require('express').Router();
const { verifyAccessToken } = require('../../middlewares/verifyTokens');
const WordsService = require('../../services/WordsServices/WordsServices');

wordsRouter.route('/:cardId').get(verifyAccessToken, async (req, res) => {
  const { id: userId } = res.locals.user;
  const cardId = Number(req.params.cardId);
  try {
    const wordsArr = await WordsService.getAllWordsByCard(cardId, userId);
    res.json(wordsArr);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

wordsRouter.route('/').post(verifyAccessToken, async (req, res) => {
  const { id: userId } = res.locals.user;
  const {cardTitle, url, eng, rus} = req.body
  try {
    const card = await WordsService.getOrCreateCard(cardTitle, url);
    const cardId = card.get().id
    const newWord = await WordsService.addWord(cardId, eng, rus,userId );
    console.log(newWord)
    res.sendStatus(201)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = wordsRouter;
