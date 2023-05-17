const express = require("express");
// const { validateRegistrationData, validateLoginData } = require("../validators/auth");
// const checkValid = require("../middleware/checkValid");
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
router.put("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);

router.get("/user", auth, getUsers);
router.patch("/user", auth, patchUser);
router.post("/user", auth, postUser);
router.post("/user/cafes", auth, postSavedCafes);

module.exports = router;
