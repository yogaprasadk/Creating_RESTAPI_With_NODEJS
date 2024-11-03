const express = require('express');
const router = express.Router();

// Import the controller functions
const { getAllProducts, getAllProductsTesting } = require("../controllers/product");

// Homepage route
router.route("/").get(getAllProducts);

// Testing route
router.route("/testing").get(getAllProductsTesting);

module.exports = router;
