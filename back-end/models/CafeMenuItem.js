const mongoose = require("mongoose");

const CafeMenuItemSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true, match: /\.\d\d$/ },
    image: { type: String, default: "" },
    cafe: { type: mongoose.Schema.Types.ObjectId, ref: "Cafes" },
  },
  { collection: "cafemenuitem" }
);

module.exports = mongoose.model("CafeMenuItem", CafeMenuItemSchema);
