// Simpan harga di variable
let headset = 225000;
let mouse = 150000;
let keyboard = 350000;
let bayar = 800000;

let total = headset + mouse + keyboard;

console.log("===== Rincian Pembelian =====");
console.log("Headset: ", headset);
console.log("Mouse: ", mouse);
console.log("Keyboard :", keyboard);
console.log("");
console.log("");
console.log("Total Belanja: ", total);


let diskon;
if (total >= 800000){
    diskon = 0.15;
}else if (total >= 500000){
    diskon = 0.10;
}else if (total >= 250000){
    diskon = 0.05;
}

let potongan = total * diskon;
total = total - potongan;
let kembalian = bayar - total;

console.log("Diskon: ", diskon*100, "%");
console.log("Total Setelah Diskon: Rp.", total);
console.log("Pembayaran: ", bayar);
console.log("Kembalian: ", kembalian);