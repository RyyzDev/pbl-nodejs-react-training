// Bentuk umum prosedur fungsi dalam JavaScript
function tampilkanPesan() {
    console.log("Halo, ini adalah pesan dari prosedur!");
}

tampilkanPesan(); // Memanggil prosedur untuk menampilkan pesan

// Prosedur dengan parameter
function sapaPengguna(nama) {
    console.log("Halo, " + nama + "! Selamat datang!");
}

sapaPengguna("Andi");   // Memanggil prosedur dengan parameter
sapaPengguna("Budi");

// Prosedur dengan nilai kembali (return)
function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

let luas = hitungLuasPersegiPanjang(5, 3);  // Memanggil prosedur dan menyimpan hasilnya
console.log("Luas persegi panjang: " + luas);

// fungsi tanpa parameter dan tanpa nilai kembali
function tampilkanWaktu() {
    let waktu = new Date();
    console.log("Waktu saat ini: " + waktu.toLocaleTimeString());
}

tampilkanWaktu(); // Memanggil prosedur untuk menampilkan waktu saat ini