const Product = require('../models/product.modla'); // Short product info
const ProductDetails = require('../models/productDetails.model');
const fs = require('fs');


// POST /insertProduct
exports.insertProduct = async (req, res) => {
  try {
    // 1. Uploaded file
    const imageFile = req.file; // multer middleware stores file here
    if (!imageFile) return res.status(400).json({ error: 'Image file is required' });

    // 2. Parse product JSON from form field 'productData'
    let productData;
    try {
      productData = JSON.parse(req.body.productData);
    } catch {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ error: 'Invalid product data format' });
    }
    // 3. Check if product with id exists in either collection
    const existing = await Product.findOne({ id: productData.id });
    if (existing) {
      // Delete uploaded image because we won't use it
      fs.unlinkSync(imageFile.path);
      return res.status(409).json({ error: 'Product ID already exists' });
    }

    // 4. Prepare basic product info for Product collection
    const basicProduct = {
      id: productData.id,
      name: productData.title,
      price: productData.price,
      image: imageFile.path,  // or '/uploads/filename.ext' depending on your setup
    };

    // 5. Insert to Product
    await Product.create(basicProduct);

    // 6. Add image path to productData for details collection (override image field)
    productData.image = imageFile.path;

    // 7. Insert full details to ProductDetails collection
    await ProductDetails.create(productData);

    res.status(201).json({ message: 'Product inserted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};


// Get a single product detail by ID
exports.getProductInfo = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'Product ID is required' });

    const product = await ProductDetails.findOne({ id });
    if (!product) return res.status(404).json({ error: 'Product not found' });

    // Build full image URL
    const fullUrl = `${req.protocol}://${req.get('host')}/${product.image.replace(/\\/g, '/')}`;
    const productWithImageUrl = { ...product._doc, image: fullUrl };

    res.status(200).json(productWithImageUrl);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

// Get all short products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithFullUrls = products.map(p => {
      const fullUrl = `${req.protocol}://${req.get('host')}/${p.image.replace(/\\/g, '/')}`;
      return { ...p._doc, image: fullUrl };
    });

    res.status(200).json(productsWithFullUrls);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};


