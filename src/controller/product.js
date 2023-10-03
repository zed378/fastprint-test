const { produk, status, kategori } = require("../../models");

exports.getAllProduct = async (req, res) => {
  try {
    const { isTradable } = req.query;

    if (isTradable === undefined) {
      const total = await produk.count();

      const data = await produk.findAll({
        order: [["id_produk", "DESC"]],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.status(200).send({
        status: "Success",
        total,
        data,
      });
    } else {
      const total = await produk.count({ where: { status_id: isTradable } });
      const data = await produk.findAll({
        where: { status_id: isTradable },

        order: [["id_produk", "DESC"]],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.status(200).send({
        status: "Success",
        total,
        data,
      });
    }
  } catch (error) {
    res.status(400).send({ status: "Error", message: error });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await produk.findOne({
      where: { id_produk: id },
      attributes: {
        exclude: ["id"],
      },
    });

    data === null &&
      res.status(200).send({
        status: "Failed",
        message: "The data you are looking for did not exist",
      });

    data &&
      res.status(200).send({
        status: "Success",
        data,
      });
  } catch (error) {
    res.status(400).send({ status: "Error", message: error });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { nama_produk, harga, kategori_id, status_id } = req.body;

    const data = await produk.create(
      {
        nama_produk,
        harga,
        kategori_id,
        status_id,
      },
      {
        fields: ["nama_produk", "harga", "kategori_id", "status_id"],
      }
    );

    res.status(200).send({
      status: "Success",
      data,
    });
  } catch (error) {
    res.status(400).send({ status: "Error", message: error });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id_produk, nama_produk, harga, kategori_id, status_id } = req.body;

    await produk.update(
      {
        nama_produk,
        harga,
        kategori_id,
        status_id,
      },
      {
        where: {
          id_produk,
        },
      }
    );

    res.status(200).send({
      status: "Success",
      message: "Success update data produk",
    });
  } catch (error) {
    res.status(400).send({ status: "Error", message: error });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id_produk } = req.body;

    await produk.destroy({ where: { id_produk } });

    res.status(200).send({
      status: "Success",
      message: "Success delete product",
    });
  } catch (error) {
    res.status(400).send({ status: "Error", message: error });
  }
};
