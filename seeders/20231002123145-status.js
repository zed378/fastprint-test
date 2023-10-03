"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("statuses", [
      {
        id_status: 1,
        nama_status: "bisa dijual",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_status: 2,
        nama_status: "tidak bisa dijual",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("statuses", null, {});
  },
};
