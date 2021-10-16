const sql = require("./db.js");

const Product = function (product) {
    this.nama_produk = product.nama_produk;
    this.harga_produk = product.harga_produk;
};

Product.findById = (id_produk, result) => {
    sql.query(`SELECT * FROM produk WHERE id_produk = ${id_produk}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found produk: ", res[ 0 ]);
            result(null, res[ 0 ]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};

Product.getAll = result => {
    sql.query("SELECT count(harga_produk) as total FROM produk where harga_produk > 80000", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        let total = JSON.stringify(res);

        console.log(total);
        result(null, res);
    });
};

module.exports = Product;