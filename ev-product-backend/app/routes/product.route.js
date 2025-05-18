const express = require('express');
const router = express.Router();
const upload = require('../middelware/upload');
const productController = require('../controllers/product.controller');
const requestController = require('../controllers/requestedproduct.controller');

// Core Product APIs
router.post('/insertProduct',  upload.single('image'), productController.insertProduct);        // API #1
router.get('/getProductinfo', productController.getProductInfo);                                   // API #2
router.get('/getAllProducts', productController.getAllProducts);                                   // API #3

// Requested Product APIs
router.post('/requestProduct', requestController.addRequestProduct);                            // API #4
router.get('/getRequestedProduct', requestController.getRequestedProducts);                         // API #5

module.exports = router;


