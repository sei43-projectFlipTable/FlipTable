const express = require("express");
const router = express.Router();
const { saveImg } = require("../controllers/collectionImg");
const { auth } = require("../middleware/auth");
const { collectPoints } = require("../controllers/user");

router.put("/img", saveImg);
router.patch("/collect", collectPoints);

module.exports = router;
