const express = require('express');
const productApi = require('../controllers/product');

const router = express.Router();
// router.post('/products', productApi.insertProductInDB);
router.get('/feature-product', productApi.findFeatureProduct);

module.exports = router;