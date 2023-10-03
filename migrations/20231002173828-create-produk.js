"use strict";
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("produks", {
      id: {
        type: Sequelize.UUID,
        defaultValue: uuidv4(),
      },
      id_produk: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      nama_produk: {
        type: Sequelize.STRING,
      },
      harga: {
        type: Sequelize.INTEGER,
      },
      kategori_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "kategoris",
          key: "id_kategori",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "statuses",
          key: "id_status",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
        onUpdate: Sequelize.fn("NOW"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("produks");
  },
};
