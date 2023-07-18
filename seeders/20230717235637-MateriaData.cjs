"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let date = new Date();

    let datos = [
      [100, "física básica I", 1, 1],
      [101, "laboratorio de física básica I", 1, 1],
      [132, "cálculo I", 2, 1],
      [100, "química general", 3, 1],
      [130, "algebra I", 2, 1],
      [102, "física básica II", 1, 2],
      [103, "laboratorio de física básica I", 1, 2],
      [134, "cálculo II", 2, 2],
      [136, "algebra lineal", 2, 2],
    ];
    let data = [];
    datos.forEach(function (elemento, indice, array) {
      data.push({
        cod: elemento[0],
        nombre: elemento[1],
        createdAt: date,
        updatedAt: date,
        codigoId: elemento[2],
        semestreId: elemento[3],
      });
    });

    await queryInterface.bulkInsert("materias", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("materias", null, {});
  },
};
