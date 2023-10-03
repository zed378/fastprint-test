const { status } = require("../../models");

exports.getAllStatus = async (req, res) => {
  try {
    const data = await status.findAll({
      attributes: ["id_status", "nama_status"],
    });

    res.status(200).send({
      status: "Success",
      data,
    });
  } catch (error) {
    res.status(400).send({ status: "Error", message: error });
  }
};
