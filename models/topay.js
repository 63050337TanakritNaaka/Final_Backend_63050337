const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    title: { type: String, required: true },
    isChecked: { type: Boolean, default: false },
  },
  {
    collection: "topays",
    timestamps: true,
  }
);

const model = mongoose.model("Topay", schema);

module.exports = model;
