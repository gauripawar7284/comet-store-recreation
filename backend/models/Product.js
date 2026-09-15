const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    sizes: { type: [String], default: ["S", "M", "L", "XL"] },
    images: { type: [String], default: [] },
    stock: { type: Number, required: true, default: 0 },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Comet-Product", productSchema);
