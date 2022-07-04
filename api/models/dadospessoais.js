"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DadosPessoais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuarios, { foreignKey: "usuario_id" });
    }
  }
  DadosPessoais.init(
    {
      nomeCompleto: DataTypes.STRING,
      dataNascimento: DataTypes.STRING,
      rg: DataTypes.STRING,
      cpf: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DadosPessoais",
    }
  );
  return DadosPessoais;
};
