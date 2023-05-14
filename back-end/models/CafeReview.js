const mongoose = require("mongoose");

const CafeReviewSchema = mongoose.Schema(
  {
    rating: { type: Number, required: true, min: 0, max: 10 },
    review: { type: String, required: true },
    image: { type: String, default: "" },
    cafe: { type: mongoose.Schema.Types.ObjectId, ref: "Cafes" },
    tags: {
      type: [String],
      enum: ["wifi", "power", "aircon", "workspace", "lighting"],
    },
  },
  { collection: "cafereview" }
);

module.exports = mongoose.model("CafeReview", CafeReviewSchema);
