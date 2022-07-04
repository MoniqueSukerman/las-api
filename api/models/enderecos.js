"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Enderecos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuarios, { foreignKey: "usuario_id" });
    }
  }
  Enderecos.init(
    {
      cep: DataTypes.STRING,
      endereco: DataTypes.STRING,
      numero: DataTypes.STRING,
      complemento: DataTypes.STRING,
      bairro: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Enderecos",
    }
  );
  return Enderecos;
};
