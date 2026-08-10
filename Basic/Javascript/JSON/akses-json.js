const fs = require('fs');
// fungsi fs = membaca, menulis, dan mengelola file

// Membuka & membaca file json
// utf-8 membaca file sebagai teks biasa
const teks = fs.readFileSync("data.json", "utf-8");

// mengubah teks json menjadi array
const data = JSON.parse(teks);
console.log("Data awal: ", data)

// Menambah data baru ke array data
data.push({"id": 2, "name": "singer", "age": 18})
console.log("Data yang ditambah: ", data);

// Menulis ulang array ke data.json
// Stringify: mengubah array menjadi teks JSON
// null, 2 : mengubah format 2 spasi/indentasi
fs.writeFileSync("data.json", JSON.stringify(data, null, 2));