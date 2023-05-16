require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const collectionImg = require("./routers/collectionImg");
const cafe = require("./routers/cafes");
const cafeMenu = require("./routers/cafemenuitem");
const reviews = require("./routers/cafereview");
const seed = require("./routers/seed");
const auth = require("./routers/auth");
const users = require("./routers/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use("/scan", collectionImg);
app.use("/seed", seed);
app.use("/api", cafe);
app.use("/api/menu", cafeMenu);
app.use("/api/review", reviews);
app.use("/", auth);


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
