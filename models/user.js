'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Book, {
        foreingKey: 'BorrowerId'
      });

      User.hasMany(models.Book, {
        foreingKey: 'ReserverId'
      });
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    sessionId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
