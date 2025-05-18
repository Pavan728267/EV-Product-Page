const RequestedProduct = require('../models/requestedProduct.model');

// Add a requested product
exports.addRequestProduct = async (req, res) => {
  try {
    const { name, desc } = req.body;
    if (!name || !desc) return res.status(400).json({ error: 'Name and description are required' });

    const requestedProduct = new RequestedProduct({ name, desc });
    await requestedProduct.save();

    res.status(201).json({ message: 'Requested product saved' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

// Get all requested products
exports.getRequestedProducts = async (req, res) => {
  try {
    const requests = await RequestedProduct.find();
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};
