const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    hash: { type: String, require: true },
    role: { type: String },
    savedPlaces: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Cafes",
      default: [],
    },
    points: { type: Number, default: 0 },
    referredCount: { type: Number },
    //returns a random string of 8 characters
    referralCode: {
      type: String,
      default: Math.random().toString(36).substring(2, 9),
    },
    wasReferred: { type: Boolean },
  },
  { collection: "users" }
);

module.exports = mongoose.model("Users", UsersSchema);
