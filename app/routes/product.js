module.exports = app => {
    const products = require("../controllers/productController.js");

    // Retrieve all Customers
    app.get("/products", products.findAll);

    // Retrieve a single Customer with customerId
    app.get("/products/:id_produk", products.findOne);
};