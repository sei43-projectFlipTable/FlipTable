const express = require("express");
const { getReviews, putReview } = require("../controllers/cafereview");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/:cafeId", auth, getReviews);
router.put("/:cafeId", auth, putReview);

module.exports = router;
