const CafesModel = require("../models/Cafes");

async function getCafes(req, res) {
  try {
    const allCafes = await CafesModel.find().select("-__v");
    res.json(allCafes);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error getting cafes" });
  }
}

async function putCafes(req, res) {
  try {
    const targetCafe = await CafesModel.findOne({ address: req.body.address });

    if (targetCafe) {
      return res.status(400).json({
        status: "error",
        message: "another cafe already exists at this address",
      });
    }

    await CafesModel.create({
      name: req.body.name,
      address: req.body.address,
      image: req.body.image,
      website: req.body.website,
      priceRating: req.body.priceRating,
      openingHours: req.body.openingHours,
      description: req.body.description,
      tags: req.body.tags,
    });

    res.json({ status: "ok", message: "cafe added" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error adding cafes" });
  }
}

async function postCafes(req, res) {
  try {
    const targetCafe = await CafesModel.findById(req.params.cafeId);
    // targetCafe.image = targetCafe.image.toString("base64");
    res.json(targetCafe);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error getting cafe" });
  }
}

async function getAverageRating(req, res) {
  try {
    const targetCafe = await CafesModel.findById(req.params.cafeId);
    let avgRating = 0;
    if (targetCafe.reviewRating.reviewCount > 0) {
      avgRating =
        targetCafe.reviewRating.ratingTotal /
        targetCafe.reviewRating.reviewCount /
        2;
    }
    res.json(avgRating);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error getting rating" });
  }
}

module.exports = { getCafes, putCafes, postCafes, getAverageRating };
