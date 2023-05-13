const CafesModel = require("../models/Cafes");
const ReviewModel = require("../models/CafeReview");
const MenuModel = require("../models/CafeMenuItem");

async function seedCafes(req, res) {
  try {
    await CafesModel.deleteMany();
    await ReviewModel.deleteMany();
    await MenuModel.deleteMany();

    for (let i = 0; i < 9; i++) {
      await CafesModel.create({
        name: "Amber Ember " + i,
        address: "730 Upper Serangoon Rd, #01-01\nSingapore 53461" + i,
        image:
          "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_456_ash_1.png",
        website: "https://www.random.org",
        priceRating: i % 3 === 0 ? 3 : i % 3,
        reviewRating: { ratingTotal: i, reviewCount: (i % 3) + 1 },
        openingHours: "10am - 5pm daily\nClosed on mondays",
        description:
          "Delicious specialty coffee and all-day brunch classics. Tucked away on the ground floor of a nondescript residential building between Serangoon and Kovan.",
        tags: ["wifi", "power"],
      });
    }

    res.json({ status: "ok", message: "cafes seeded" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error seeding cafes" });
  }
}

module.exports = { seedCafes };
