const { kategori } = require("../../models");

exports.getAllCategories = async (req, res) => {
  try {
    const data = await kategori.findAll({
      attributes: {
        exclude: ["id", "id_produk", "createdAt", "updatedAt"],
      },
    });

    res.status(200).send({ status: "Success", data });
  } catch (error) {
    res.status(400).send({ status: "Error", message: error });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await kategori.findOne({
      where: { id_kategori: id },
      attributes: {
        exclude: ["id", "id_produk", "createdAt", "updatedAt"],
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

exports.createCategory = async (req, res) => {
  try {
    const { nama_kategori } = req.body;

    const data = await kategori.create(
      { nama_kategori },
      {
        fields: ["nama_kategori"],
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

exports.updateCategory = async (req, res) => {
  try {
    const { id_kategori, nama_kategori } = req.body;

    await kategori.update(
      {
        nama_kategori,
      },
      {
        where: {
          id_kategori,
        },
      }
    );

    res.status(200).send({
      status: "Success",
      data: {
        nama_kategori,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "Error", message: error });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id_kategori } = req.body;

    await kategori.destroy({
      where: {
        id_kategori,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "The data successfully delete",
    });
  } catch (error) {
    res.status(400).send({ status: "Error", message: error });
  }
};
