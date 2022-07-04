/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "TiposVendas",
      [
        {
          id: 1,
          descricao: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          descricao: "Alimentação",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          descricao: "Abadá/Ingressos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("TiposVendas", null, {});
  },
};
