const { Card, Solve, Word, Sequelize } = require('../../../db/models');
class WordsService {
  static async getOrCreateCard(cardTitle, url) {
    try {
      const [card, created] = await Card.findOrCreate({
        where: { title: cardTitle },
        defaults: { url },
      });
      if (!created) {
        if (url) {
          const editCard = await Card.update({ url }, { where: { id: card.id } });
        }
        return card;
      }
      
    } catch (error) {
      console.log(error)
    }
    return card;
  }

  static async addWord(cardId, eng, rus, userId) {
    try {
      if (!cardId || !eng || !rus) throw new Error('Не все поля переданы');
      const newWord = await Word.create({
        eng,
        rus,
        wordCardId: cardId,
        wordUserId: userId,
      });
      return newWord;
    } catch (error) {
      console.log(error)
    }
  }

  static async getAllWordsByCard(cardId, userId) {
    try {
      const words = await Word.findAll({
        where: {
          wordCardId: cardId,
          // [Sequelize.Op.or]: [{ wordUserId: null }, { wordUserId: userId }],
        },
      });
      const solves = await Solve.findAll({
        where: {
          solveUserId: userId,
        },
      });
      const newWords = words.map((el) => el.get());
      const newSolves = solves.map((el) => el.get());
      let newArr = [...newWords];
      for (let i = 0; i < newSolves.length; i++) {
        newArr = newArr.filter((word) => word.id !== newSolves[i].solveWordId);
      }
      return newArr;
    } catch (error) {
      return error
    }
  }
  
}

module.exports = WordsService;
