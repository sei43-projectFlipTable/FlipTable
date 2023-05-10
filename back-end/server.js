require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const router = require("./routers/cafes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use("/api", router);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
