'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solve extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Word }) {
      // this.belongsTo(User, { foreignKey: 'solveUserId' });
      // this.belongsTo(Word, { foreignKey: 'solveWordId' });
    }
  }
  Solve.init(
    {
      solveUserId: DataTypes.INTEGER,
      solveWordId: DataTypes.INTEGER,
      isDone: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Solve',
    },
  );
  return Solve;
};
