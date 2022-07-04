/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "Usuarios",
      [
        {
          nome: "Joaquina",
          urlFotoPerfil: "https://randomuser.me/api/portraits/women/50.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Fernandina",
          urlFotoPerfil: "https://randomuser.me/api/portraits/women/32.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Clara",
          urlFotoPerfil: "https://randomuser.me/api/portraits/women/31.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "João",
          urlFotoPerfil: "https://randomuser.me/api/portraits/men/50.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Luan",
          urlFotoPerfil: "https://randomuser.me/api/portraits/men/32.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Jeferson",
          urlFotoPerfil: "https://randomuser.me/api/portraits/men/31.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("Usuarios", null, {});
  },
};
