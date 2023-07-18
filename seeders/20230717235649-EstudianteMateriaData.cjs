'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();
    let data = [];
    data.push({
      createdAt: date,
      updatedAt: date,
      estudianteId: 1,
      materiaId: 1,
    });
    data.push({
      createdAt: date,
      updatedAt: date,
      estudianteId: 1,
      materiaId: 2,
    });
    data.push({
      createdAt: date,
      updatedAt: date,
      estudianteId: 1,
      materiaId: 3,
    });
    data.push({
      createdAt: date,
      updatedAt: date,
      estudianteId: 1,
      materiaId: 4,
    });
    data.push({
      createdAt: date,
      updatedAt: date,
      estudianteId: 2,
      materiaId: 5,
    });
    data.push({
      createdAt: date,
      updatedAt: date,
      estudianteId: 2,
      materiaId: 6,
    });
    data.push({
      createdAt: date,
      updatedAt: date,
      estudianteId: 2,
      materiaId: 7,
    });
    data.push({
      createdAt: date,
      updatedAt: date,
      estudianteId: 2,
      materiaId: 8,
    });
    data.push({
      createdAt: date,
      updatedAt: date,
      estudianteId: 2,
      materiaId: 4,
    });
    await queryInterface.bulkInsert("estudiante_materia", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("estudiante_materia", null, {});
  },
};
