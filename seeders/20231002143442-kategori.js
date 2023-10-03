"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("kategoris", [
      {
        id_kategori: 1,
        nama_kategori: "L QUEENLY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_kategori: 2,
        nama_kategori: "L MTH AKSESORIS (IM)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_kategori: 3,
        nama_kategori: "L MTH TABUNG (LK)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_kategori: 4,
        nama_kategori: "SP MTH SPAREPART (LK)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_kategori: 5,
        nama_kategori: "CI MTH TINTA LAIN (IM)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_kategori: 6,
        nama_kategori: "S MTH STEMPEL (IM)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("kategoris", null, {});
  },
};
