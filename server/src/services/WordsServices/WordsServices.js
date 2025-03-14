const { Card, Solve, Word, Sequelize } = require('../../../db/models');
class WordsService {

  static getOrCreateCard(cardTitle, url) {
    return Card.findOrCreate({
      where: { title: cardTitle},
      defaults: { url }
    });
  }

  static async addWord(cardId, eng, rus,userId ) {
    if (!cardId || !eng || !rus) throw new Error('Не все поля переданы');
    const newWord = await Word.create({ eng,rus,wordCardId: cardId, wordUserId: userId});
    return newWord;
  }

  static async getAllWordsByCard(cardId, userId) {
    const words = await Word.findAll({
      where: {
        wordCardId: cardId,
        [Sequelize.Op.or]: [{ wordUserId: null }, { wordUserId: userId }],
      },
    });

    const solves = await Solve.findAll({
      where: {
        solveUserId: userId,
      },
    });

    const newWords = words.map((el) => el.get());
    const newSolves = solves.map((el) => el.get());
    // console.log('words', newWords);
    // console.log('solves', newSolves);

      let newArr=[...newWords]
    for (let i = 0; i < newSolves.length; i++) {
      newArr = newArr.filter((word) => word.id !== newSolves[i].solveWordId);
    }
    // console.log(3333333, newArr);
    // console.log(4444444, words);
    return newArr;
  }

  // static async deleteCraft(id) {
  //   const craft = await Craft.findByPk(id);
  //   if (!craft) throw new Error('Крафт не найден');
  //   return craft.destroy();
  // }

  // static async editCraft(id, userId) {
  //   const updatedCraft = await Craft.findByPk(id);
  //   if (!updatedCraft) throw new Error('Крафт не найден');
  //   updatedCraft.isSale = false;
  //   updatedCraft.userId = userId;
  //   updatedCraft.save();
  //   return updatedCraft;
  // }
}

module.exports = WordsService;
