// callback adalah suatu fungsi yang menjadikan fungsi lain sebagai argumen

/*
    Contoh dasar
*/
// fungsi yang akan dijadikan argumen
function sapa(nama){
    console.log(`${nama}, halo`);
}
// fungsi callback
function prosesNama(callback){
    var nama = "Ryyz";
    callback(nama);
}
// panggil fungsi callback dengan parameter nama fungsi (tanpa kurung)
prosesNama(sapa);


/*
    Contoh Dasar kedua
*/
// Fungsi callback hitung
function hitung(angka1, angka2, operasi){
    console.log(`Menjalankan perhitungan untuk ${angka1} dan ${angka2}...`);

    const hasil = operasi(angka1, angka2);
    console.log(`Hasilnya adalah : ${hasil}`);
}

// Fungsi Operasi
function tambah(a, b){
    return a + b;
}
function kurang(a, b){
    return a - b;
}
function kali(a, b){
    return a * b;
}
function bagi(a, b){
    return a / b;
}
function modulo(a, b){
    return a % b;
}

// panggil fungsi callback
hitung(2, 7, tambah);

/*
    dengan setTimeout
*/
console.log("Program di mulai.");
setTimeout(function(){ console.log("Ini pesan dari dalam callback") }, 2000) // callback 2 detik kemudian
console.log("program ini akan dieksekusi sebelum callback!");

/*
    Callback+setTimeout Aplikasi Antrian periksa dokter
*/
function periksaDokter(nomorAntri, callback){
    console.log(`sekarang antrian ke-${nomorAntri}`)
    setTimeout(() => {
        if(nomorAntri === 10){
            console.log('Saya Memasuki Ruangan Dokter')
        }else{
            console.log('Saya masih menunggu atau sudah terlewat')
        }
    }, 5000)
}
periksaDokter(10)

/*
    Recursive Function
*/
function execute(nomorAntri){
    periksaAntrianDokter(nomorAntri, function(nomorAntriBaru){
        if (nomorAntriBaru !== 0){
            execute(nomorAntriBaru)
        }
    })
}