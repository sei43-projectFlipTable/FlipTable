const express = require("express");
const { getMenu, putMenu } = require("../controllers/cafemenuitem");
const router = express.Router();

router.post("/:cafeId", getMenu);
router.put("/:cafeId", putMenu);

module.exports = router;
