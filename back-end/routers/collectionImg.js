const express = require("express");
const router = express.Router();
const { saveImg } = require("../controllers/CollectionImg");

router.put("/img", saveImg);

module.exports = router;
