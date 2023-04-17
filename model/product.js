const mongoose = require("mongoose");

const productInfoSchema = new mongoose.Schema({
    id: Number,
    catagory: String,
    name: String,
    ratting: String,
    image: String,
    price: String,
    oPrice: String,
    featureProduct: String
});

const ProductInfo = mongoose.model("product", productInfoSchema, "product")

module.exports = {ProductInfo};