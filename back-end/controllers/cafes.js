const CafesModel = require("../modesl/Cafes");

async function getCafes(req, res) {
  try {
    const allCafes = await CafesModel.find().select("-__v");
    res.json(allCafes);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error getting cafes" });
  }
}

module.exports = { getCafes };
