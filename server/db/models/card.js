'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Word, Stat }) {
      this.hasMany(Word, { foreignKey: 'wordCardId' });
      this.hasMany(Stat, { foreignKey: 'statCardId' });
    }
  }
  Card.init(
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Card',
    },
  );
  return Card;
};
