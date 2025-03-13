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
      // this.belongsTo(User, { foreignKey: 'statUserId' });
      // this.hasMany(Card, { foreignKey: 'statCardId' });
    }
  }
  Stat.init(
    {
      statUserId: DataTypes.INTEGER,
      statCardId: DataTypes.INTEGER,
      countWords: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Stat',
    },
  );
  return Stat;
};
