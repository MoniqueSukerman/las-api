/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "Contatos",
      [
        {
          telefone: "71987658248",
          celular: "71965843548",
          email: "joaquina@email.com.br",
          usuario_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          telefone: "71987658248",
          celular: "71965843548",
          email: "fernandina@email.com.br",
          usuario_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          telefone: "71987658248",
          celular: "71965843548",
          email: "clara@email.com.br",
          usuario_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          telefone: "71987658248",
          celular: "71965843548",
          email: "joão@email.com.br",
          usuario_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          telefone: "71987658248",
          celular: "71965843548",
          email: "luan@email.com.br",
          usuario_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          telefone: "71987658248",
          celular: "71965843548",
          email: "jeferson@email.com.br",
          usuario_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("Contatos", null, {});
  },
};
