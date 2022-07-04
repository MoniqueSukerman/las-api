/* eslint-disable no-unused-vars */
"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DadosPessoais", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nomeCompleto: {
        type: Sequelize.STRING,
      },
      dataNascimento: {
        type: Sequelize.STRING,
      },
      rg: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.STRING,
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Usuarios", key: "id" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("DadosPessoais");
  },
};
