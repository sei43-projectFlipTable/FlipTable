const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    email: { type: String, require: true },
    //   hash: { type: String, require: true },
    savedPlaces: { type: [String] },
    points: { type: Number },
    referredCount: { type: Number },
    referralCode: { type: String },
    wasReferred: { type: Boolean },
  },
  { collection: "users" }
);

module.exports = mongoose.model("Users", UsersSchema);
