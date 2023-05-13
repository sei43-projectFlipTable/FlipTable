const mongoose = require("mongoose");

// Review rating should not be allowed manual entry from front end, calculate n update only when review added
const CafesSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, minLength: 1 },
    address: { type: String, require: true },
    image: { type: String },
    website: { type: String },
    priceRating: { type: Number, min: 1, max: 3 },
    reviewRating: {
      ratingTotal: { type: Number, min: 0, default: 0 },
      reviewCount: { type: Number, min: 0, default: 0 },
    },
    openingHours: { type: String },
    description: { type: String },
    tags: {
      type: [String],
      enum: ["wifi", "power", "aircon", "workspace", "lighting"],
    },
  },
  { collection: "cafes" }
);

module.exports = mongoose.model("Cafes", CafesSchema);
