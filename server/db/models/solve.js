'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solve extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Word}) {
      this.belongsTo(User, { foreingKey: 'userId' });
      this.belongsTo(Word, { foreingKey: 'wordId' });
    }
  }
  Solve.init({
    userId: DataTypes.INTEGER,
    wordId: DataTypes.INTEGER,
    isDone: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Solve',
  });
  return Solve;
};