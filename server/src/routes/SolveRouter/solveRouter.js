const solveRouter = require('express').Router();
const SolveServices = require('../../services/SolveServices/SolveServices');
// const checkId = require('../../middlewares/checkId');
// const { verifyAccessToken } = require('../../middlewares/verifyTokens');

solveRouter.route('/').post(async (req, res) => {
  // console.log(req.body)
  const {wordId, userId} = req.body
  // const cardId = Number(req.params.id);
  try {
    const solve = await SolveServices.addSolve(wordId, userId);
    console.log(solve);
    res.status(201).json(solve);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = solveRouter;