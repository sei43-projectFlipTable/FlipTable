const express = require("express");

const { getCafes, putCafes, postCafes, getAverageRating } = require("../controllers/cafes");
const { seedCafes } = require("../controllers/seed");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.get("/seed", auth, seedCafes);
router.get("/cafes", auth, getCafes);
router.put("/cafes", auth, putCafes);
router.post("/cafes/:cafeId", auth, postCafes);

router.post("/cafes/rate/:cafeId", getAverageRating);

module.exports = router;
