const CafesModel = require("../models/Cafes");
const ReviewModel = require("../models/CafeReview");
const MenuModel = require("../models/CafeMenuItem");

async function seedCafes(req, res) {
  try {
    await CafesModel.deleteMany();
    await ReviewModel.deleteMany();
    await MenuModel.deleteMany();

    const cafeItems = [
      {
        name: "Da Paolo Gastronomia",
        address: "2 Bayfront Ave #01-73",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipN0peWRgYtxRizAUVjSEvduiz1iOxUYgJrMJVZw=w497-h240-k-no",
        openingHours: "8am - 10pm daily\nClosed on Tuesdays",
        description:
          "A cozy neighborhood spot offering artisanal coffees, freshly baked pastries, and a warm ambiance that invites you to unwind and savor every sip.",
        tags: ["wifi", "power"],
        coordinates: [1.2823274825909938, 103.8583201249735],
      },
      {
        name: "LiHO TEA @ Ang Mo Kio HUB",
        address: "53 Ang Mo Kio Ave 3 #01-44",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipMaKKkBKN-MiIg284cEZlQ2cg16oVz5XEUQqeb-=w408-h306-k-no",
        openingHours: "11am - 10pm daily",
        description:
          "A vibrant café known for its bold espresso blends, friendly baristas, and an eclectic menu featuring hearty breakfast options and signature sandwiches. The perfect place to start your day.",
        tags: ["lighting"],
        coordinates: [1.3693341806526982, 103.84750378888087],
      },
      {
        name: "The Zen Garden Café",
        address: "Choa Chu Kang Street 51 #01-24",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipN0peWRgYtxRizAUVjSEvduiz1iOxUYgJrMJVZw=w497-h240-k-no",
        openingHours: "9.30am - 9.15pm daily\nClosed on weekends",
        description:
          "Discover tranquility in this serene café adorned with lush greenery and soothing music. Enjoy organic teas, healthy smoothies, and vegetarian-friendly dishes that nourish both body and soul.",
        tags: ["wifi", "power"],
        coordinates: [1.3922266215830152, 103.74309460938115],
      },
      {
        name: "Café Caramel",
        address: "2 Jurong East Central 1, #01-03 JCube",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipN0peWRgYtxRizAUVjSEvduiz1iOxUYgJrMJVZw=w497-h240-k-no",
        openingHours:
          "10am - 10pm weekdays\n11am - 10pm weekends\nClosed on Mondays and Tuesdays",
        description:
          "Breathe in the ocean breeze as you sip your favorite brew at Café Caramel. This coastal-inspired café offers a refreshing escape from the everyday hustle. The soothing colors and nautical accents create a beachside ambiance that complements our signature cold brews and tropical-inspired pastries. With its relaxed atmosphere and panoramic views, The Coastal Bean is the perfect spot to unwind and enjoy a taste of coastal living.",
        tags: ["lighting", "aircon"],
        coordinates: [1.3334652208574296, 103.7404416382165],
      },
      {
        name: "The Providore",
        address: "10 Paya Lebar Road #B1-02, Paya Lebar Quarter",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipNbkOunYHV385SnJFprrgV9tqPekQljaa5U9ylr=w408-h317-k-no",
        openingHours: "8am - 10.30pm weekdays\n9am - 10.30pm weekends",
        description:
          "A haven for coffee aficionados, this café boasts a carefully curated selection of single-origin beans and brewing methods. Immerse yourself in the world of specialty coffee and experience true craftsmanship.",
        tags: [],
        coordinates: [1.3174067813824322, 103.89278708295022],
      },
      {
        name: "Brio",
        address: "1 Jurong West Central 2, #B1-36A",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipNwfkuJ0no_4MI_W240awNbjE4ScOBgwHgcBGp6=w426-h240-k-no",
        openingHours: "10am - 5pm daily\nClosed on mondays",
        description:
          "Step into a bohemian oasis where creativity and community come together. Sip on fair-trade coffee, admire local artwork on the walls, and engage in lively conversations with fellow free spirits.",
        tags: ["aircon", "workspace", "lighting"],
        coordinates: [1.3398935209351406, 103.70628859588717],
      },
      {
        name: "Serene Brews",
        address: "10 Tampines Central 1, #01-59",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipNEWPl20fXPHYhY9rCPBw7erT9_jQuBDKlw_26E=w408-h306-k-no",
        openingHours: "11am - 10pm daily",
        description:
          "Seek serenity in a cup at Serene Brews, a tranquil oasis where peace and flavor harmoniously blend. Our dedication to ethically sourced beans and meticulous brewing techniques ensures each sip transports you to a state of serenity. The serene ambiance, adorned with gentle greenery and natural elements, enhances your experience, making it an ideal hideaway to escape the noise and reconnect with your inner calm.",
        tags: ["workspace"],
        coordinates: [1.3537584986277245, 103.94531076705172],
      },
      {
        name: "Anna's",
        address: "681 Punggol Drive #01-30",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipO0y3Bw8yTYi3wN_KTVlaA1Rr8Qtw-GRqasbjsQ=w408-h272-k-no",
        openingHours: "8.30am - 9.30pm daily",
        description:
          "A book lover's paradise, this café invites you to curl up with a good read while sipping on aromatic coffees and nibbling on delectable treats. A haven of literary delights.",
        tags: ["wifi", "power", "workspace"],
        coordinates: [1.4025384275449047, 103.91295249668512],
      },
      {
        name: "Ya Kun Kaya Toast",
        address: "23 Serangoon Central #B1-07, NEX Mall",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipMadGA0NNS5YFG5W5s1PVlyHzNvKrEFCPDhbi_z=w408-h306-k-no",
        openingHours: "10am - 8pm daily",
        description:
          "Treat your taste buds to a symphony of flavors at this elegant café, renowned for its exquisite pastries and delicate French-inspired desserts. Pair them with a perfectly brewed cup of coffee for a divine indulgence.",
        tags: ["workspace"],
        coordinates: [1.3509550210698542, 103.87201426705182],
      },
      {
        name: "The Marmalade Pantry",
        address: "2 Orchard Turn #B4-29 ION Orchard",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipN0peWRgYtxRizAUVjSEvduiz1iOxUYgJrMJVZw=w497-h240-k-no",
        openingHours: "10am - 10pm daily",
        description:
          "Start your day on a mellow note at the Marmalade Pantry, where the aroma of freshly roasted coffee greets you at the door. Our cozy and laid-back atmosphere invites you to enjoy slow mornings, accompanied by creamy lattes and buttery croissants. From the warm hues of the décor to the soft music playing in the background, every element is designed to set the tone for a relaxing and rejuvenating day.",
        tags: ["wifi", "power"],
        coordinates: [1.300591476059284, 103.83987061720183],
      },
    ];

    for (let i = 0; i < 9; i++) {
      const newCafe = cafeItems[i];
      newCafe.priceRating = i % 3 === 0 ? 3 : i % 3;
      newCafe.reviewRating = { ratingTotal: i + 1, reviewCount: (i % 2) + 1 };
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
        tags: ["wifi", "power", "withmedia"],
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
        tags: ["power", "withmedia"],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
        image: "https://media.timeout.com/images/105944239/750/562/image.jpg",
        tags: ["wifi", "power", "withmedia"],
      },
      {
        rating: Math.round(Math.random() * 10),
        review: reviews[Math.ceil(Math.random() * 10) - 1],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg",
        tags: ["wifi", "lighting", "withmedia"],
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
        tags: ["aircon", "lighting", "withmedia"],
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
