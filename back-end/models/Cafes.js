const mongoose = require("mongoose");

const CafesSchema = new mongoose.Schema({}, { collection: "cafes" });

module.exports = CafesSchema;
