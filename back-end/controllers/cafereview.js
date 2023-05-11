const ReviewModel = require("../models/CafeReview");

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
    });
    res.json({ status: "ok", message: "review added" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error adding review" });
  }
}

async function getAverageRating(req, res) {
  try {
    const allReviews = await ReviewModel.find({ cafe: req.params.cafeId });
    const reviewCount = allReviews.length;
    const avgRating =
      allReviews.reduce((accum, item) => {
        return accum + item.rating;
      }, 0) / reviewCount;
    res.json(avgRating);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error getting rating" });
  }
}

module.exports = { getReviews, putReview, getAverageRating };
