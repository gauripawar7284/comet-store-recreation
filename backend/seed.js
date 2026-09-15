require("dotenv").config();
const connectDB = require("./config/db");
const Product = require("./models/Product");
const User = require("./models/User");

const products = [
  // Hoodies
  {
    name: "Nimbus Essential Hoodie",
    description: "Heavyweight cotton-fleece hoodie with a relaxed fit.",
    price: 68,
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    images: ["/placeholder/hoodie-1.jpg"],
    stock: 40,
    featured: true,
  },
  {
    name: "Nimbus Zip Hoodie",
    description:
      "Full-zip hoodie in brushed-back fleece with a kangaroo pocket.",
    price: 74,
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    images: ["/placeholder/hoodie-2.jpg"],
    stock: 30,
    featured: false,
  },
  {
    name: "Nimbus Cropped Hoodie",
    description: "Boxy cropped hoodie with dropped shoulders.",
    price: 66,
    category: "Hoodies",
    sizes: ["XS", "S", "M", "L"],
    images: ["/placeholder/hoodie-3.jpg"],
    stock: 22,
    featured: false,
  },

  // T-Shirts
  {
    name: "Nimbus Core Tee",
    description: "Everyday crewneck tee in midweight cotton jersey.",
    price: 32,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL"],
    images: ["/placeholder/tee-1.jpg"],
    stock: 60,
    featured: true,
  },
  {
    name: "Nimbus Long Sleeve Tee",
    description: "Long sleeve crewneck in soft-washed cotton.",
    price: 38,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL"],
    images: ["/placeholder/tee-2.jpg"],
    stock: 45,
    featured: false,
  },
  {
    name: "Nimbus Pocket Tee",
    description: "Garment-dyed tee with a chest pocket and relaxed fit.",
    price: 36,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/placeholder/tee-3.jpg"],
    stock: 50,
    featured: true,
  },

  // Pants
  {
    name: "Nimbus Cargo Pants",
    description: "Relaxed-fit cargo pants with articulated knees.",
    price: 84,
    category: "Pants",
    sizes: ["28", "30", "32", "34", "36"],
    images: ["/placeholder/pants-1.jpg"],
    stock: 25,
    featured: false,
  },
  {
    name: "Nimbus Track Pants",
    description: "Tapered track pants with side stripe detailing.",
    price: 58,
    category: "Pants",
    sizes: ["S", "M", "L", "XL"],
    images: ["/placeholder/pants-2.jpg"],
    stock: 35,
    featured: true,
  },
  {
    name: "Nimbus Wide Denim",
    description: "Wide-leg denim in a rigid, non-stretch wash.",
    price: 92,
    category: "Pants",
    sizes: ["28", "30", "32", "34", "36"],
    images: ["/placeholder/pants-3.jpg"],
    stock: 20,
    featured: false,
  },

  // Jackets
  {
    name: "Nimbus Coach Jacket",
    description: "Water-resistant coach jacket with snap closure.",
    price: 96,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    images: ["/placeholder/jacket-1.jpg"],
    stock: 18,
    featured: true,
  },
  {
    name: "Nimbus Puffer Vest",
    description: "Lightweight quilted puffer vest with a packable hood.",
    price: 88,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    images: ["/placeholder/jacket-2.jpg"],
    stock: 15,
    featured: false,
  },
  {
    name: "Nimbus Denim Jacket",
    description: "Classic trucker jacket in rigid selvedge denim.",
    price: 104,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    images: ["/placeholder/jacket-3.jpg"],
    stock: 12,
    featured: false,
  },
];

async function run() {
  await connectDB();

  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log(`Seeded ${products.length} products`);

  const adminEmail = "admin@nimbus.example.com";
  const existingAdmin = await User.findOne({ email: adminEmail });
  if (!existingAdmin) {
    await User.create({
      name: "Nimbus Admin",
      email: adminEmail,
      password: "ChangeMe123!",
      role: "admin",
    });
    console.log(
      `Seeded admin user: ${adminEmail} / ChangeMe123! (change this immediately)`,
    );
  }

  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
