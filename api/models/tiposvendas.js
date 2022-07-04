/* eslint-disable no-unused-vars */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tiposVendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tiposVendas.init(
    {
      descricao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tiposVendas",
    }
  );
  return tiposVendas;
};
