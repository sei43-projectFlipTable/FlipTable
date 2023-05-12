const mongoose = require("mongoose");

const CollectionImgSchema = new mongoose.Schema(
  {
    receipt: { type: Buffer, require: true },
  },
  { collection: "collection-img" }
);

module.exports = mongoose.model("CollectionImg", CollectionImgSchema);
