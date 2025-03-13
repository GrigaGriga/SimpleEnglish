const statsRouter = require('express').Router();
const { verifyAccessToken } = require('../../middlewares/verifyTokens');
const StatsService = require('../../services/StatsServices/StatsServices');

statsRouter.route('/').get(verifyAccessToken, async (req, res) => {
  const { id: userId } = res.locals.user;
  console.log(userId);
  try {
    const stats = await StatsService.getStats(userId);
    // console.log(stats);
    res.json(stats);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = statsRouter;
