
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  price: { type: String, required: true },
  image: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);

