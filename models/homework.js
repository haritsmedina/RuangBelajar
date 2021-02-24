'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeWork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HomeWork.belongsTo(models.User)
      HomeWork.belongsTo(models.Subject)
    }
  };
  HomeWork.init({
    subjectsId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HomeWork',
  });
  return HomeWork;
};