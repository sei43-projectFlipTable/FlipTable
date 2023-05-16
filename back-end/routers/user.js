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
  patchUser,
  postUser,
} = require("../controllers/user");

const router = express.Router();

// Login/Auth
router.put("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);

router.get("/seed", seedUsers);
router.get("/users", getUsers);
router.patch("/user", patchUser);
router.post("/user", postUser);

module.exports = router;
