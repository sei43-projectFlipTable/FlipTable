const mongoose = require("mongoose");

const CafesSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, minLength: 1 },
    address: { type: String },
    image: { type: String },
    website: { type: String },
    priceRating: { type: Number, min: 1, max: 3 },
    openingHours: { type: Map, of: String },
    description: { type: String },
    tags: {
      type: [String],
      enums: ["wifi", "power", "aircon", "workspace", "lighting"],
    },
  },
  { collection: "cafes" }
);

module.exports = CafesSchema;
