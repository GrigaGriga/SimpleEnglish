const solveRouter = require('express').Router();
const SolveServices = require('../../services/SolveServices/SolveServices');
const StatsService = require('../../services/StatsServices/StatsServices');

solveRouter.route('/').post(async (req, res) => {
  console.log(req.body)
  const {wordId, userId, cardId} = req.body
  // const cardId = Number(req.params.id);
  try {
    const solve = await SolveServices.addSolve(wordId, userId,cardId);
    const stat = await StatsService.addStat(cardId, userId,cardId);
    res.status(201).json(solve);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = solveRouter;