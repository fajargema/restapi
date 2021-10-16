module.exports = app => {
    const products = require("../controllers/productController.js");

    app.get("/products", products.findAll);

    app.get("/products/:id_produk", products.findOne);

    app.get("/products/harga/:harga_produk", products.findHarga);
};