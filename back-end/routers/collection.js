const express = require("express");
const router = express.Router();
const { saveImg } = require("../controllers/collectionImg");
const { auth } = require("../middleware/auth");

router.put("/img", saveImg);

module.exports = router;
