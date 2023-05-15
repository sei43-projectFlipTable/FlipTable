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

async function seedMenu(req, res) {
  try {
    await MenuModel.deleteMany();

    const menuItems = [
      {
        name: "Fries",
        price: 3.33,
        image:
          "https://media.istockphoto.com/id/531189325/photo/fast-food.jpg?s=612x612&w=0&k=20&c=_Yfg3zTNL5lMW0peerXBXYYIGWu0m1Marmh4UH34wmU=",
      },
      {
        name: "Potato",
        price: 55.55,
        image:
          "https://www.allrecipes.com/thmb/yZXg4JBuCszkSx2y1og-pvjt0Pk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Are-Potatoes-Vegetables-3x2-1-e1743111587b4ff799c84944070945fe.png",
      },
      {
        name: "Fried Chicken",
        price: 123.21,
        image:
          "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg",
      },
      {
        name: "Coffee",
        price: 98989898.98,
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?resize=768,574",
      },
      {
        name: "Grape",
        price: 1.01,
        image:
          "https://atlas-content1-cdn.pixelsquid.com/assets/924865886370666249/jpeg-600/G05.jpg",
      },
      {
        name: "Whale",
        price: 29.99,
        image:
          "https://alljapantours.com/php17/interfaceMaster/blogMaster/img17/photo/blog/src/BGEH172774438.jpg",
      },
      {
        name: "Pizza",
        price: 222.22,
        image:
          "https://www.asiaone.com/sites/default/files/original_images/Jul2017/20171807_Durian%20King_Pezzo.jpg",
      },
    ];

    const allCafes = await CafesModel.find().select("_id").limit(7);
    for (const cafe of allCafes) {
      for (const item of menuItems) {
        const cafeItem = { ...item };
        cafeItem.cafe = cafe._id;
        await MenuModel.create(cafeItem);
      }
    }
    res.json({ status: "ok", message: "menu item seeded" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error seeding menu" });
  }
}

async function seedReviews(req, res) {
  try {
    await ReviewModel.deleteMany();

    const reviews = [
      "Cozy ambiance, friendly staff, and delicious coffee. Perfect spot for a relaxed morning.",
      "Great selection of specialty teas and unique blends. The staff is knowledgeable and the pastries are delightful.",
      "A hidden gem with a sunny patio. Their breakfast menu is diverse and the pancakes are fluffy and delicious.",
      "Excellent coffee and a comfortable atmosphere for getting work done. The menu has a great selection of both sweet and savory options. Their pancakes are fluffy, and the avocado toast is simply delicious. The staff is attentive, making it a pleasant dining experience.",
      "A charming little cafe with delectable pastries and a wide range of tea options. Perfect for a sweet indulgence.",
      "This cafe has a rustic vibe and serves a mean latte. The sandwiches are fresh and flavorful.",
      "A beautiful outdoor seating area with a tranquil ambiance. Their salads are fresh and packed with flavor.",
      "A bustling cafe with a vibrant energy. The baristas are skilled and the espresso drinks are top-notch.",
      "Quaint decor, friendly service, and an impressive selection of loose-leaf teas. Don't miss their homemade scones.",
      "A coffee lover's paradise. The aroma of freshly roasted beans fills the air, and their pour-over coffee is a treat for the senses.",
    ];

    const reviewItem = [
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
        image:
          "https://www.sussex.ac.uk/wcm/assets/media/271/content/74901.950x631.jpg",
        tags: ["wifi", "power"],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
        tags: ["aircon", "workspace", "lighting", "wifi"],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
        image:
          "https://media.femalemag.com.sg/public/2022/01/cafe-east-coast-commune-1.jpg",
        tags: ["power"],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
        image: "https://media.timeout.com/images/105944239/750/562/image.jpg",
        tags: ["wifi", "power"],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg",
        tags: ["wifi", "lighting"],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
        tags: ["workspace", "power"],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
        image: "https://media.timeout.com/images/105909866/750/422/image.jpg",
        tags: ["aircon", "lighting"],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
        tags: ["aircon", "power"],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
        tags: ["wifi", "workspace", "aircon"],
      },
    ];

    const allCafes = await CafesModel.find().select("_id").limit(10);
    for (const cafe of allCafes) {
      for (const item of reviewItem) {
        const cafeItem = { ...item };
        cafeItem.cafe = cafe._id;
        await ReviewModel.create(cafeItem);
      }
    }
    res.json({ status: "ok", message: "review item seeded" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", message: "error seeding reviews" });
  }
}

module.exports = { seedCafes, seedMenu, seedReviews };
