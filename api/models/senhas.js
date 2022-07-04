"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Senhas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuarios, { foreignKey: "usuario_id" });
    }
  }
  Senhas.init(
    {
      senha: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Senhas",
    }
  );
  return Senhas;
};
