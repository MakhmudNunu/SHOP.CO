const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, trim: true },
    rate: { type: Number, required: true, min: 1, max: 5, default: 5 },
    text: { type: String, required: true, trim: true },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);


const productSchema = new mongoose.Schema(
  {
    image: { type: [String], required: true, default: [] },
    title: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    rate: { type: Number, required: true, min: 0, max: 5, default: 0 },
    description: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    colors: { type: [String], required: true, default: [] },
    sizes: { type: [String], required: true, default: [] },
    stock: { type: Number, required: true, min: 0 },
    isNew: { type: Boolean, default: false },
    reviews: { type: [reviewSchema], default: [] },
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true } 
  }
);

productSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
