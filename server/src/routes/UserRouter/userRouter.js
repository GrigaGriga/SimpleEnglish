const userRouter = require('express').Router();
const { verifyAccessToken } = require('../../middlewares/verifyTokens');
const UserService = require('../../services/UserServices/UserServices');
const checkId = require('../../middlewares/checkId');

userRouter.route('/word').get(verifyAccessToken, async (req, res) => {
  const { id: userId } = res.locals.user;
  // console.log(userId);
  try {
    const wordsArr = await UserService.getUserWords(userId);
    console.log(wordsArr);
    res.json(wordsArr);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

userRouter.route('/word/:id').delete(verifyAccessToken, checkId, async (req, res) => {
  const { id: wordId } = res.locals;
  try {
    const word = await UserService.deleteWord(wordId);
    console.log(word);
    res.status(204).json(word);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = userRouter;
