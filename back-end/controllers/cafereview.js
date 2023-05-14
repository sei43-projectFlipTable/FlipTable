const ReviewModel = require("../models/CafeReview");
const CafesModel = require("../models/Cafes");

async function getReviews(req, res) {
  try {
    const allReviews = await ReviewModel.find({ cafe: req.params.cafeId });
    res.json(allReviews);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error getting reviews" });
  }
}

async function putReview(req, res) {
  try {
    await ReviewModel.create({
      rating: req.body.rating,
      review: req.body.review,
      ...(req.body.image && { image: req.body.image }),
      cafe: req.params.cafeId,
      tags: req.body.tags,
    });

    const targetCafe = await CafesModel.findById(req.params.cafeId);
    targetCafe.reviewRating.reviewCount += 1;
    targetCafe.reviewRating.ratingTotal += req.body.rating;
    await targetCafe.save();

    res.json({ status: "ok", message: "review added" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error adding review" });
  }
}

module.exports = { getReviews, putReview };
