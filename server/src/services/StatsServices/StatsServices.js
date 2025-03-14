const { Stat, Card, Word } = require('../../../db/models');
class StatsService {
  static async getStats(userId) {
    try {
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
      return stats;
    } catch (error) {
      console.log(error);
    }
  }

  static async addStat(cardId, userId) {
    try {
      const stat = await Stat.findOne({
        where: { statCardId: cardId, statUserId: userId },
      });
      if (stat) {
        const editStat = await Stat.update(
          { countWords: stat.countWords + 1 },
          { where: { id: stat.id } },
        );
        return editStat;
      }
      const newStat = await Stat.create({
        statCardId: cardId,
        statUserId: userId,
        countWords: 1,
      });
      return newStat;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = StatsService;
