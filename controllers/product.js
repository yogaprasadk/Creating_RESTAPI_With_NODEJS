const getAllProducts = (req, res) => {
  // Logic to get all products 
  res.send("Returning all products");
};

const getAllProductsTesting = (req, res) => {
  // Logic for testing
  res.send("Testing endpoint");
};

module.exports = {
  getAllProducts,
  getAllProductsTesting,
};
