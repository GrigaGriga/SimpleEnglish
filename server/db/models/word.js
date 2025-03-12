'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Card, Solve }) {
      this.hasMany(Solve, { foreingKey: 'wordId' });
      this.belongsTo(User, { foreingKey: 'wordId' });
      this.belongsTo(Card, { foreingKey: 'cardId' });
    }
  }
  Word.init(
    {
      eng: DataTypes.STRING,
      rus: DataTypes.STRING,
      cardId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Word',
    },
  );
  return Word;
};
