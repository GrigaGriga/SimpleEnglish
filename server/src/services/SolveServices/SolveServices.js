const { Solve, Sequelize } = require('../../../db/models');
class SolveServices {

  static async addSolve(wordId, userId) {
    try {
      const solve = await Solve.create({ solveWordId: wordId, solveUserId: userId, isDone: true });
      return solve;
    } catch (error) {
      console.log(error)
  }
}
}

module.exports = SolveServices;