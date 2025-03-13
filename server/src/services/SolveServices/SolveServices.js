const { Solve, Sequelize } = require('../../../db/models');
class SolveServices {
  // static getAllCrafts() {
  //   return Craft.findAll({ order: [['updatedAt', 'DESC']] });
  // }

  static async addSolve(wordId, userId) {
    const solve = await Solve.create({ solveWordId: wordId, solveUserId: userId, isDone: true });
    return solve;
  }

//   static async getAllWordsByCard(cardId) {
//     const words = await Word.findAll({ where: { wordCardId: cardId ,[Sequelize.Op.or]: [
//       { wordUserId: null },
//       { wordUserId: 1 }, // Замените anotherId на нужный ID
//     ], } });
//     return words
//   }

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

module.exports = SolveServices;