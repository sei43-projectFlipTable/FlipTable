const express = require("express");
const { getReviews, putReview } = require("../controllers/cafereview");
const router = express.Router();

router.post("/:cafeId", getReviews);
router.put("/:cafeId", putReview);

module.exports = router;
