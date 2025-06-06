'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Elbrus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Elbrus.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    rigthAns: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Elbrus',
  });
  return Elbrus;
};