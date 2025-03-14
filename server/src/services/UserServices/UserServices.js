const { Word, Sequelize } = require('../../../db/models');

class UserService {
  static async getUserWords(userId) {
    try {
      const wordsOfUser = await Word.findAll({
        where: { wordUserId: userId },
      });
      return wordsOfUser.map((el) => el.get());
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteWord(wordId) {
    try {
      const word = await Word.findByPk(wordId);
      if (!word) throw new Error('Слово не найдено');
      return word.destroy();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserService;
