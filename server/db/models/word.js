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
      this.belongsTo(User, { foreignKey: 'wordUserId' });
      this.belongsTo(Card, { foreignKey: 'wordCardId' });
      this.hasMany(Solve, { foreignKey: 'solveWordId' });
    }
  }
  Word.init(
    {
      eng: DataTypes.STRING,
      rus: DataTypes.STRING,
      wordCardId: DataTypes.INTEGER,
      wordUserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Word',
    },
  );
  return Word;
};
