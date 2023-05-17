const express = require("express");
const validateLogin = require("../validator/login");
const checkValid = require("../middleware/checkValid");
const { auth } = require("../middleware/auth");
const {
  register,
  login,
  getUsers,
  refresh,
  patchUser,
  postUser,
  postSavedCafes,
} = require("../controllers/user");

const router = express.Router();

// Login/Auth
router.put("/register", validateLogin, checkValid, register);
router.post("/login", validateLogin, checkValid, login);
router.post("/refresh", refresh);

router.get("/user", auth, getUsers);
router.patch("/user", auth, patchUser);
router.post("/user", auth, postUser);
router.post("/user/cafes", auth, postSavedCafes);

module.exports = router;
