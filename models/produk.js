"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      produk.hasOne(models.kategori, {
        as: "kategori",
        foreignKey: {
          name: "id_kategori",
        },
      });

      produk.hasOne(models.status, {
        as: "status",
        foreignKey: {
          name: "id_status",
        },
      });
    }
  }
  produk.init(
    {
      id_produk: DataTypes.INTEGER,
      nama_produk: DataTypes.STRING,
      harga: DataTypes.INTEGER,
      kategori_id: DataTypes.INTEGER,
      status_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "produk",
    }
  );
  return produk;
};
