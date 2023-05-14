const CafesModel = require("../models/Cafes");
const ReviewModel = require("../models/CafeReview");
const MenuModel = require("../models/CafeMenuItem");

async function seedCafes(req, res) {
  try {
    await CafesModel.deleteMany();
    await ReviewModel.deleteMany();
    await MenuModel.deleteMany();

    const addressArray = [
      "2 Bayfront Ave #01-73",
      "53 Ang Mo Kio Ave 3 #01-44",
      "2 Jurong East Central 1, #01-03 JCube",
      "Choa Chu Kang Street 51 #01-24",
      "10 Paya Lebar Road #B1-02, Paya Lebar Quarter",
      "1 Jurong West Central 2, #B1-36A",
      "10 Tampines Central 1, #01-59",
      "681 Punggol Drive #01-30",
      "23 Serangoon Central #B1-07, NEX Mall",
      "2 Orchard Turn #B4-29 ION Orchard",
    ];
    const coordinatesArray = [
      [1.2823274825909938, 103.8583201249735],
      [1.3693341806526982, 103.84750378888087],
      [1.3334652208574296, 103.7404416382165],
      [1.3922266215830152, 103.74309460938115],
      [1.3174067813824322, 103.89278708295022],
      [1.3398935209351406, 103.70628859588717],
      [1.3537584986277245, 103.94531076705172],
      [1.4025384275449047, 103.91295249668512],
      [1.3509550210698542, 103.87201426705182],
      [1.300591476059284, 103.83987061720183],
    ];

    for (let i = 0; i < 9; i++) {
      await CafesModel.create({
        name: "Amber Ember " + i,
        address: addressArray[i],
        image:
          "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_456_ash_1.png",
        website: "https://www.random.org",
        priceRating: i % 3 === 0 ? 3 : i % 3,
        reviewRating: { ratingTotal: i, reviewCount: (i % 3) + 1 },
        openingHours: "10am - 5pm daily\nClosed on mondays",
        description:
          "Delicious specialty coffee and all-day brunch classics. Tucked away on the ground floor of a nondescript residential building between Serangoon and Kovan.",
        tags: ["wifi", "power"],
        coordinates: [coordinatesArray[i][0], coordinatesArray[i][1]],
      });
    }

    res.json({ status: "ok", message: "cafes seeded" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error seeding cafes" });
  }
}

module.exports = { seedCafes };
