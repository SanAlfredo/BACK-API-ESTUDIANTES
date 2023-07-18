"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let date = new Date();
    const datos = ["FIS", "MAT", "QMC"];
    let data = [];
    datos.forEach(function (elemento, indice, array) {
      data.push({
        nombre: elemento,
        createdAt: date,
        updatedAt: date,
      });
    });

    await queryInterface.bulkInsert("codigos", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("codigos", null, {});
  },
};
