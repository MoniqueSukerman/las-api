"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Eventos extends Model {}
  Eventos.init(
    {
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      urlFoto: DataTypes.STRING,
      dataInicio: DataTypes.DATEONLY,
      dataFim: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Eventos",
    }
  );
  return Eventos;
};
