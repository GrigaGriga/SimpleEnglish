'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Word, Stat, Solve }) {
      // this.hasMany(Word, { foreignKey: 'wordUserId' });
      // this.hasMany(Stat, { foreignKey: 'statUserId' });
      // this.hasMany(Solve, { foreignKey: 'solveUserId' });
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
