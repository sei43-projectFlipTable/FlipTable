const MenuModel = require("../models/CafeMenuItem");

async function getMenu(req, res) {
  try {
    const allMenu = await MenuModel.find({ cafe: req.params.cafeId });
    res.json(allMenu);
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", message: "error getting menu items" });
  }
}

async function putMenu(req, res) {
  try {
    const targetName = await MenuModel.findOne({
      name: req.body.name,
      cafe: req.params.cafeId,
    });

    if (targetName) {
      return res
        .status(400)
        .json({
          status: "error",
          message: "an item with this name already exists",
        });
    }

    await MenuModel.create({
      name: req.body.name,
      price: req.body.price,
      ...(req.body.image && { image: req.body.image }),
      cafe: req.params.cafeId,
    });
    res.json({ status: "ok", message: "menu item added" });
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", message: "error adding menu items" });
  }
}

module.exports = { getMenu, putMenu };
