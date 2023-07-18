'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();
    const datos = ["primer semestre", "segundo semestre", "tercer semestre","cuarto semestre","quinto semestre","sexto semestre","septimo semestre","octavo semestre","noveno semestre","decimo semestre",];
    let data = [];
    datos.forEach(function (elemento, indice, array) {
      data.push({
        nombre: elemento,
        createdAt: date,
        updatedAt: date,
      });
    });

    await queryInterface.bulkInsert("semestres", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("semestres", null, {});
  },
};
