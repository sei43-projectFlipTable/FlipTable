const mongoose = require("mongoose");

const CafesSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, minLength: 1 },
    address: { type: String },
    website: { type: String },
    priceRating: { type: Number, min: 1, max: 3 },
  },
  { collection: "cafes" }
);

module.exports = CafesSchema;
