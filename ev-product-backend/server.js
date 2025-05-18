'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');
const https = require('https');
const fs = require('fs');
const errorHandler = require('errorhandler');
const cookieParser = require('cookie-parser');

const {connectDB}= require('./app/database/Mongodb');
 
const productRoutes = require('./app/routes/product.route');

// Load environment variables
dotenv.config({ path: process.env.DOTENV_PATH || '.env' });

// Create express app
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS and cache headers
app.use((req, res, next) => {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === "OPTIONS") {
        return res.status(204).send();
    }
    next();
});

// Routes
app.use('/uploads', express.static('uploads'));
app.use('/api/products', productRoutes);
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Test route
app.get('/api/test', (req, res) => res.send('Test page'));

// Error handler
if (process.env.MODE === 'development') {
    app.use(errorHandler());
} else {
    app.use((err, req, res, next) => {
        res.status(err.status || 500).send({ error: err.message || 'Unknown error' });
    });
}
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});



const PORT = process.env.HTTP_PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

