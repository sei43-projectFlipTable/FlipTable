const express = require("express");
const { getMenu, putMenu } = require("../controllers/cafemenuitem");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/:cafeId", auth, getMenu);
router.put("/:cafeId", auth, putMenu);

module.exports = router;
