"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let date = new Date();
    let datos = [["Alfredo Valverde Aranibar","1689804958829.jpg"], ["Jhonny Aguilera Farfan","1689815604910.jpg"]];
    let data = [];
    datos.forEach(function (elemento, indice, array) {
      data.push({
        nombre: elemento[0],
        nacimiento: "2000-01-24",
        carnet: 5802817,
        foto: elemento[1],
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
