const express = require("express");
const router = express.Router();
const { saveImg } = require("../controllers/collectionImg");

router.put("/img", saveImg);

module.exports = router;
