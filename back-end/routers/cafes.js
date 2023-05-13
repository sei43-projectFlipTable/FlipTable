const express = require("express");
const {
  getCafes,
  putCafes,
  postCafes,
  getAverageRating,
} = require("../controllers/cafes");
const { seedCafes } = require("../controllers/seed");
const router = express.Router();

router.get("/seed", seedCafes);
router.get("/cafes", getCafes);
router.put("/cafes", putCafes);
router.post("/cafes/:cafeId", postCafes);
router.post("/cafes/rate/:cafeId", getAverageRating);

module.exports = router;
