const solveRouter = require('express').Router();
const SolveService = require('../../services/WordsServices/WordsServices');
// const checkId = require('../../middlewares/checkId');
// const { verifyAccessToken } = require('../../middlewares/verifyTokens');

solveRouter.route('/').post(async (req, res) => {
  console.log(req.body)
  // const cardId = Number(req.params.id);
  try {
    const wordsArr = await SolveService.addSolve();
    // console.log(wordsArr.map(el=>el.get()));
    // res.json(wordsArr.map(el=>el.get()));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = solveRouter;