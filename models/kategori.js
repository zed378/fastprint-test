"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      kategori.belongsTo(models.produk, {
        as: "produk",
        foreignKey: {
          name: "id_produk",
        },
      });

      // kategori.hasMany(models.produk, {
      //   foreignKey: "id_produk",
      // });
    }
  }

  kategori.init(
    {
      id_kategori: DataTypes.INTEGER,
      nama_kategori: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "kategori",
    }
  );
  return kategori;
};
