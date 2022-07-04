/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "DadosPessoais",
      [
        {
          nomeCompleto: "Ana Joaquina",
          dataNascimento: "2002-05-02",
          rg: "123456789",
          cpf: "12345678912",
          usuario_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCompleto: "Fernandina Souza",
          dataNascimento: "2002-05-02",
          rg: "123456789",
          cpf: "12345678912",
          usuario_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCompleto: "Clara Lobo",
          dataNascimento: "2002-05-02",
          rg: "123456789",
          cpf: "12345678912",
          usuario_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCompleto: "João Paulo",
          dataNascimento: "2002-05-02",
          rg: "123456789",
          cpf: "12345678912",
          usuario_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCompleto: "Luan Cobra",
          dataNascimento: "2002-05-02",
          rg: "123456789",
          cpf: "12345678912",
          usuario_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCompleto: "Jeferson Portela",
          dataNascimento: "2002-05-02",
          rg: "123456789",
          cpf: "12345678912",
          usuario_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("DadosPessoais", null, {});
  },
};
