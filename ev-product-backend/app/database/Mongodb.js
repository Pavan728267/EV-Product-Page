
// 'use strict';

// const mongoose = require('mongoose');

// // MongoDB connection options
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };
// exports.connectDB = async () => {
// try {
// await mongoose.connect(process.env.MONGO_URI, options);
// console.log('MongoDB Connected');
// } catch (err) {
// console.error(err);
// process.exit(1);
// }
// };
const mongoose = require('mongoose');
require('dotenv').config();

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connected to MongoDB Atlas');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// module.exports = connectDB;




