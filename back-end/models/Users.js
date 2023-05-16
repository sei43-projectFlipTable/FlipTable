const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, require: true },
    hash: { type: String, require: true },
    role: { type: String, default: "user" },
    savedPlaces: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Cafes",
      default: [],
    },
    points: { type: Number, default: 0 },
    referredCount: { type: Number, default: 0 },
    //returns a random string of 8 characters
    referralCode: {
      type: String,
      default: Math.random().toString(36).substring(2, 12).toLocaleUpperCase(),
      immutable: true,
    },
    wasReferred: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now, immutable: true },
  },
  { collection: "users" }
);

module.exports = mongoose.model("Users", UsersSchema);
