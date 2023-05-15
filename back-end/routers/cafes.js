const express = require("express");
const {
  getCafes,
  putCafes,
  postCafes,
  getAverageRating,
} = require("../controllers/cafes");
const router = express.Router();

router.get("/cafes", getCafes);
router.put("/cafes", putCafes);
router.post("/cafes/:cafeId", postCafes);
router.post("/cafes/rate/:cafeId", getAverageRating);

module.exports = router;
