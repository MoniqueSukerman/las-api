/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "Senhas",
      [
        {
          senha: "123456",
          usuario_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          senha: "123456",
          usuario_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          senha: "123456",
          usuario_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          senha: "123456",
          usuario_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          senha: "123456",
          usuario_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          senha: "123456",
          usuario_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("Senhas", null, {});
  },
};
