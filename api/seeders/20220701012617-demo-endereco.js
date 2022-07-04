/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "Enderecos",
      [
        {
          cep: "41280070",
          endereco: "rua de cima",
          numero: 280,
          complemento: "3º andar",
          bairro: "Americanas",
          usuario_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cep: "41280070",
          endereco: "rua de cima",
          numero: 280,
          complemento: "3º andar",
          bairro: "Americanas",
          usuario_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cep: "41280070",
          endereco: "rua de cima",
          numero: 280,
          complemento: "3º andar",
          bairro: "Americanas",
          usuario_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cep: "41280070",
          endereco: "rua de cima",
          numero: 280,
          complemento: "3º andar",
          bairro: "Americanas",
          usuario_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cep: "41280070",
          endereco: "rua de cima",
          numero: 280,
          complemento: "3º andar",
          bairro: "Americanas",
          usuario_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cep: "41280070",
          endereco: "rua de cima",
          numero: 280,
          complemento: "3º andar",
          bairro: "Americanas",
          usuario_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("Enderecos", null, {});
  },
};
