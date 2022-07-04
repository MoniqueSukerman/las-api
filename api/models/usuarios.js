"use strict";
const { Model } = require("sequelize");
const validacao = require("../infraestrutura/validators/validators");
const CustomError = require("../config/customError");
const database = require("../models");

module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static async validarUsuario(usuario) {
      let nomeEhValido = false;

      if (usuario?.nome?.length > 0) {
        const nomeJaUtilizado = await this.isUsuarioUtilizado(usuario.nome);
        if (!nomeJaUtilizado) {
          nomeEhValido = true;
        }
      }

      const urlEhValida = await this.validarURLFotoPerfil(
        usuario?.urlFotoPerfil
      );

      const validacoes = [
        {
          nome: "nome",
          valido: nomeEhValido,
          mensagem: "Nome deve ser informado e deve ser único",
        },
        {
          nome: "urlFotoPerfil",
          valido: urlEhValida,
          mensagem: "URL deve uma URL válida",
        },
      ];

      const erros = validacoes.filter((campo) => !campo.valido);
      const existemErros = erros.length;

      if (existemErros) {
        throw new CustomError("Ops", erros);
      } else {
        return true;
      }
    }

    static async validarURLFotoPerfil(url) {
      return validacao.validarURL(url);
    }

    static async isUsuarioUtilizado(nome) {
      const consulta = await database.Usuarios.findOne({
        where: { nome: nome },
      });
      return consulta.length > 0;
    }
  }
  Usuarios.init(
    {
      nome: DataTypes.STRING,
      urlFotoPerfil: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuarios",
    }
  );
  return Usuarios;
};
