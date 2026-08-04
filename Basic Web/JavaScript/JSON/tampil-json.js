const fs = require('fs');
// fungsi fs = membaca, menulis, dan mengelola file

// baca isi file data.json
const isiFile = fs.readFileSync('data.json', 'utf-8');

// ubah data.json menjadi array
const data = JSON.parse(isiFile);

// tampilkan data.json ke console
console.log(data);

console.log("");
console.log("");

// tampilkan satu per satu
data.forEach(item => {
    console.log(`ID: ${item.id}, Nama: ${item.name}, Usia: ${item.age}`);    
});