const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    nama: {type: String, required: true, unique: true},
    id: {type: String, required: true, unique: true},
    gambar: {type: String, required: true},
    kategori: {type: Array},
    deskripsi: {type: String, required: true},
    warna: {type: String, required: true},
    harga: {type: Number, required: true},
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);
