const express = require("express");
const { getCafes, putCafes, postCafes } = require("../controllers/cafes");
const router = express.Router();

router.get("/cafes", getCafes);
router.put("/cafes", putCafes);
router.post("/cafes/:cafeId", postCafes);

module.exports = router;
