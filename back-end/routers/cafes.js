const express = require("express");
const { getCafes } = require("../controllers/cafes");
const router = express.Router();

router.get("/cafes", getCafes);

module.exports = router;
