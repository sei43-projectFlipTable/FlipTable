const UserModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const register = async (req, res) => {
  try {
    const auth = await UserModel.findOne({ email: req.body.email });
    if (auth) {
      return res.status(400).json({ status: "error", msg: "duplicate email" });
    }
    const hash = await bcrypt.hash(req.body.password, 12);

    await UserModel.create({
      email: req.body.email,
      hash,
      role: req.body.role || "user",
    });

    res.json({ status: "ok", msg: "user registered" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "registration failed" });
  }
};

const login = async (req, res) => {
  try {
    const auth = await UserModel.findOne({ email: req.body.email });
    if (!auth) {
      return res.status(400).json({
        status: "error",
        msg: "cannot find email or password incorrect",
      });
    }

    const result = await bcrypt.compare(req.body.password, auth.hash);
    if (!result) {
      return res.status(401).json({
        status: "error",
        msg: "cannot find email or password incorrect",
      });
    }

    const payload = {
      name: auth.name,
      email: auth.email,
      role: auth.role,
      savedPlaces: auth.savedPlaces,
      points: auth.points,
      referredCount: auth.referredCount,
      referralCode: auth.referralCode,
      wasReferred: auth.wasReferred,
    };
    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });

    const refresh = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });

    res.json({ access, refresh });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ status: "error", msg: "login failed" });
  }
};

async function seedUsers(req, res) {
  try {
    await UserModel.deleteMany();
    await UserModel.create([
      {
        name: "Mary",
        email: "Mary@email.com",
        hash: "1234",
        role: "",
        savedPlace: "",
        points: 495,
        referredCount: 10,
        referralCode: "",
        wasReferred: true,
      },
    ]);
    res.json({ status: "ok", message: "cafes seeded" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error seeding users" });
  }
}

async function getUser(req, res) {
  try {
    const getUsers = await UserModel.find();
    res.json(getUsers);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error getting points" });
  }
}

module.exports = { register, login, seedUsers, getUser };
