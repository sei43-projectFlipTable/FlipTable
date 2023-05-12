const CollectionImg = require("../models/CollectionImg");
// const fs = require("fs");

const saveImg = async (req, res) => {
  try {
    const newReceipt = await CollectionImg.create({ receipt: req.body.receipt });
    newReceipt.save();
    res.json({ status: "ok", msg: "new receipt received" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "upload error" });
  }
};

module.exports = { saveImg };
