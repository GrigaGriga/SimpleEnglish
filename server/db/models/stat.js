'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Card }) {
      this.belongsTo(User, { foreingKey: 'userId' });
      this.belongsTo(Card, { foreingKey: 'cardId' });
    }
  }
  Stat.init(
    {
      userId: DataTypes.INTEGER,
      cardId: DataTypes.INTEGER,
      countWords: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Stat',
    },
  );
  return Stat;
};
