const { body } = require("express-validator");

const validateLogin = [
  body("email", "Email is required").not().isEmpty(),
  body("email", "Please input a valid email").isEmail(),
  body("password", "Password must be minimum 8 characters").isLength({ min: 8 }),
];

module.exports = validateLogin;
