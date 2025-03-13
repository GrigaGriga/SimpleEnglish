const {Solve, Word, Sequelize } = require('../../../db/models');
class WordsService {
  // static getAllCrafts() {
  //   return Craft.findAll({ order: [['updatedAt', 'DESC']] });
  // }

  // static async addCraft({ title, desc, url, authorName, isSale }) {
  //   if (!title || !desc || !url) throw new Error('Не все поля переданы');
  //   const newCraft = await Craft.create({ title, desc, url, authorName, isSale });
  //   return newCraft;
  // }

  static async getAllWordsByCard(cardId) {
  //   const words = await Word.findAll({ where: { wordCardId: cardId ,[Sequelize.Op.or]: [
  //     { wordUserId: null },
  //     { wordUserId: 1 },
  //   ], },
  // include: {
  //       model: Solve,
  //       [Sequelize.Op.or]: [
  //         { solveUserId: 1 },
  //         { isDone: false },
  //       ]
  //     },
  //    });
  const words = await Word.findAll({
    where: {
      wordCardId: cardId,
      [Sequelize.Op.or]: [{ wordUserId: null }, { wordUserId: 1 }],
    },
    include: [
      {
        model: Solve,
        required: false, // Используем LEFT JOIN
        where: {
          id: { [Sequelize.Op.is]: null }, // Проверяем, что Solve не существует
        },
      },
    ],
  });
    return words
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
