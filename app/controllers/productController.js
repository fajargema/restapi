const Product = require("../models/Product.js");

exports.findAll = (req, res) => {
    Product.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving product."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Product.findById(req.params.id_produk, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id_produk ${req.params.id_produk}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id_produk " + req.params.id_produk
                });
            }
        } else res.send(data);
    });
};

exports.findHarga = (req, res) => {
    Product.findByHarga(req.params.harga_produk, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving product."
            });
        else res.send(data);
    });
};