const express = require("express");
// const { validateRegistrationData, validateLoginData } = require("../validators/auth");
// const checkValid = require("../middleware/checkValid");
const { auth } = require("../middleware/auth");
const {
  register,
  login,
  seedUsers,
  getUsers,
  refresh,
} = require("../controllers/user");
const router = express.Router();

router.put("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);

router.get("/seed", seedUsers);
router.get("/users", getUsers);

module.exports = router;
