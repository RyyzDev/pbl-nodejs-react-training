const filterBooksPromise = require('./promise2.js');

// SOAL 3: PROMISE & Async/Await
async function prosesFilter(isColorful, jumlahHalaman) {
    try {
        // panggil fungsi promise
        const hasil = await filterBooksPromise(isColorful, jumlahHalaman);
        console.log(hasil);
    } catch (error) {
        // Menangkap error
        console.log(error.message); 
    }
}

// Eksekusi kode secara berurutan
async function jalankan() {
    // 1. Buku berwarna dan jumlah halaman 50
    await prosesFilter(true, 50);

    // 2. Buku tidak berwarna dan jumlah halaman 250
    await prosesFilter(false, 250);

    // 3. Buku berwarna dan jumlah halaman 30
    await prosesFilter(true, 30);
}

jalankan();
