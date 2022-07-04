/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "Eventos",
      [
        {
          id: 1,
          nome: "São João",
          descricao: "Festa popular - junho",
          urlFoto:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bloco_da_capoeira_circuito_Campo_Grande_Salvador.jpg/1920px-Bloco_da_capoeira_circuito_Campo_Grande_Salvador.jpg",
          dataInicio: "2021-04-25",
          dataFim: "2025-06-24",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          nome: "Carnaval",
          descricao: "Festa popular - fevereiro",
          urlFoto:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bloco_da_capoeira_circuito_Campo_Grande_Salvador.jpg/1920px-Bloco_da_capoeira_circuito_Campo_Grande_Salvador.jpg",
          dataInicio: "2021-04-25",
          dataFim: "2025-06-24",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("Eventos", null, {});
  },
};
