const express = require("express");
const Product = require("../models/productsModels"); 
const router = express.Router();

router.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
