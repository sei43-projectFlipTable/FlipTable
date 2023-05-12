const express = require("express");
const {
  getReviews,
  putReview,
  getAverageRating,
} = require("../controllers/cafereview");
const router = express.Router();

router.post("/:cafeId", getReviews);
router.put("/:cafeId", putReview);
router.post("/rate/:cafeId", getAverageRating);

module.exports = router;
