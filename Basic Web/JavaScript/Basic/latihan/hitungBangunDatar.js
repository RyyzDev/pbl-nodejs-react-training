console.log("===== MENGHITUNG LUAS DAN KELIING BANGUN DATAR =====");
console.log("");
console.log("");

console.log(">> Luas Bangun Datar <<");

// Fungsi Luas Persegi
function luasPersegi(sisi){
    return sisi * sisi;
}

// Fungsi Luas Persegi Panjang
function luasPersegiPanjang(panjang, lebar){
    return panjang * lebar;
}

// Fungsi Luas Lingkaran
function luasLingkaran(jari){
    return jari * jari* 3.14;
}

// Fungsi Luas Segitiga Sama Sisi
function luasSegitigaSamaSisi(sisi) {
    let hitungTinggi = (1 / 2) * Math.sqrt(3) * sisi;
    let hitungLuas = (1 / 2) * sisi * hitungTinggi;
    return hitungLuas;
}

console.log("Luas Persegi Dengan Sisi 8 Adalah: ", luasPersegi(8));
console.log("Luas Persegi Panjang Dengan Panjang 9 dan Lebar 3 Adalah: ", luasPersegiPanjang(9, 3));
console.log("Luas Lingkaran Dengan Jari-Jari 6 Adalah: ", luasLingkaran(6));
console.log("Luas Segitiga Dengan Alas 6 dan Tinggi 4 Adalah: ", luasSegitigaSamaSisi(6));

console.log("")
console.log("")

// Fungsi Keliling Persegi
function kelilingPersegi(sisi){
    return sisi * 4;
}

// Fungsi Keliling Persegi Panjang
function kelilingPersegiPanjang(panjang, lebar){
    return (2 * panjang) + (2 * lebar);
}

// Fungsi Keliling Lingkaran
function kelilingLingkaran(jari){
    return 2 * 3.14 * jari;
}

// Fungsi Keliling Segitiga Sama kaki
function kelilingSegitigaSamaKaki(sisi){
    return 3 * sisi;
}

console.log("Keliling Persegi Dengan Sisi 8 Adalah: ", kelilingPersegi(8));
console.log("Keliling Persegi Panjang Dengan Panjang 9 dan Lebar 3 Adalah: ", kelilingPersegiPanjang(9, 3));
console.log("Keliling Lingkaran Dengan Jari-Jari 6 Adalah: ", kelilingLingkaran(6));
console.log("Keliling Segitiga Dengan Sisi 6 Adalah: ", kelilingSegitigaSamaKaki(6));