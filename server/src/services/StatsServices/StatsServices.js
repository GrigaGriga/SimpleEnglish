const { Stat,Card,Word } = require('../../../db/models');
class StatsService {
  static async getStats(userId) {
    const stats = await Stat.findAll({
      where: {
        statUserId: userId,
      },
      include: {
        model: Card,
        include: {
          model: Word,
        },
      },
    });
    // console.log(111, stats);
    return stats;
  }

  static async addStat(cardId, userId) {
    const stat = await Stat.findOne({
      where: { statCardId: cardId, statUserId: userId },
    });
    // console.log(123, stat);
    if (stat) {
      const editStat = await Stat.update({ countWords: stat.countWords+1 }, { where: { id: stat.id } });
      // console.log('editStat', editStat);
      return editStat;
    }
    const newStat = await Stat.create({
      statCardId: cardId,
      statUserId: userId,
      countWords: 1,
    });
    // console.log('newStat', newStat);
    return newStat;
  }
}

module.exports = StatsService;
