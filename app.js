// Importing required modules
const express = require('express');
const bodyParser = require('body-parser'); // Add this if you're using JSON bodies

const app = express();

// Middleware
app.use(bodyParser.json()); // To parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded bodies

// Root route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Routes
const product_routes = require("./routes/product");
app.use("/api/products", product_routes); // Make sure product_routes is set up correctly

// PORT
const port = process.env.PORT || 5000;

// Start the server
const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
