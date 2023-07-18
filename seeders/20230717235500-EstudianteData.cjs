"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let date = new Date();
    let datos = ["Alfredo Valverde Aranibar", "Jhonny Aguilera Farfan"];
    let data = [];
    datos.forEach(function (elemento, indice, array) {
      data.push({
        nombre: elemento,
        nacimiento: "2000-01-24",
        carnet: 5802817,
        foto: "alguna direccion",
        createdAt: date,
        updatedAt: date,
      });
    });

    await queryInterface.bulkInsert("estudiantes", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("estudiantes", null, {});
  },
};
