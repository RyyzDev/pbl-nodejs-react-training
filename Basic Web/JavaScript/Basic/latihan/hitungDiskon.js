// Harga makanan
let nasiGoreng = 25000;
let mieGoreng = 22000;
let capcay = 32000;

console.log("Harga Nasi Goreng: Rp.", nasiGoreng);
console.log("Harga Mie Goreng: Rp.", mieGoreng);
console.log("Harga Capcay: Rp.", capcay);


// total harga makanan sebelum diskon
let total = nasiGoreng + mieGoreng + capcay;
console.log("Total Harga Sebelum Diskon: ", total)

// besaran potongan diskon sebesar 10%
diskon = 0.1;
console.log("Diskon: ", diskon*100, "%");

// harga yang harus dibayar setelah diskon
potongan = total  * diskon;
total = total - potongan;
console.log("Harga Setelah Diskon: ", total);

// deklarasi uang bayar
let bayar = 100000;
console.log("Uang Bayar : ", bayar);

// hitung kembalian
let kembalian = bayar - total;
console.log("Kembalian: ", kembalian);


