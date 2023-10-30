const Topay = require("../models/topay");

exports.index = async (req, res) => {
  const topays = await Topay.find();

  res.status(200).json({
    data: topays,
    message: "Successfully get data",
  });
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;

    const topay = await Topay.findById(id);

    res.status(200).json({
      data: topay,
      message: "Successfully get data",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.insert = async (req, res) => {
  const { title, isChecked } = req.body;

  const topay = new Topay({
    title,
    isChecked,
  });

  await topay.save();

  res.status(201).json({
    message: "Successfully add data",
    data: topay,
  });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, isChecked } = req.body;

  const topay = await Topay.findByIdAndUpdate(id, {
    title,
    isChecked,
  });

  res.status(200).json({
    message: "Successfully updated data",
  });
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const isExisted = await Topay.findOne({ _id: id });

    if (!isExisted) {
      res.status(404).json({
        message: "No list founded",
      });
    }

    await Topay.findByIdAndDelete(id);

    res.status(200).json({
      message: "Successfully deleted data",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
