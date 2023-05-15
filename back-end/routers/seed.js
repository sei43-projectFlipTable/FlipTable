const express = require("express");
const { seedCafes, seedMenu, seedReviews } = require("../controllers/seed");
const router = express.Router();

router.get("/cafes", seedCafes);
router.get("/menu", seedMenu);
router.get("/review", seedReviews);

module.exports = router;
