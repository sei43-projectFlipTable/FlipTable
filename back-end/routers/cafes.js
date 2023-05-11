const express = require("express");
const { getCafes, putCafes } = require("../controllers/cafes");
const router = express.Router();

router.get("/cafes", getCafes);
router.put("/cafes", putCafes);

module.exports = router;
