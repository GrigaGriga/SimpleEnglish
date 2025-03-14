const { Word, Sequelize } = require('../../../db/models');

class UserService {

  static async getUserWords( userId) {
    const wordsOfUser = await Word.findAll({
      where: {wordUserId: userId}
    });
    // console.log(wordsOfUser.map(el=>el.get()))
    return wordsOfUser.map(el=>el.get());
  }

  static async deleteWord(wordId) {
    const word = await Word.findByPk(wordId);
    if (!word) throw new Error('Слово не найдено');
    return word.destroy();
  }

}

module.exports = UserService;
