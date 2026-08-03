// Simpan harga di variable
let headset = 225000;
let mouse = 150000;
let keyboard = 350000;


console.log("===== Rincian Pembelian =====");
console.log("Headset: ", headset);
console.log("Mouse: ", mouse);
console.log("Keyboard :", keyboard);
console.log("");
console.log("");

// Total belanja
let total = headset + mouse + keyboard;
console.log("Total Belanja: ", total);

// Deklarasi Diskon
let diskon = 0.1;
console.log("Diskon: ", diskon*100, "%");


// Harga setelah potongan diskon
let potongan = total * 0.1;
total = total - potongan;
console.log("Total Setelah Diskon: Rp.", total);

// Tampilkan Uang Bayar
let bayar = 800000;
console.log("Pembayaran: ", bayar);

// Tampilkan kembalian
let kembalian = bayar - total;
console.log("Kembalian: ", kembalian);