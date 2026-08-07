const filterCarsPromise = require('./promise3.js')

// SOAL 4: PROMISE & Async/Await
async function prosesFilter(warna, tahun) {
    try {
        // panggil fungsi promise
        const hasil = await filterCarsPromise(warna, tahun);
        console.log(hasil);
    } catch (error) {
        // Menangkap error
        console.log(error.message); 
    }
}

// Eksekusi kode secara berurutan
async function jalankan() {
    // 1. mobil berwarna hitam tahun 2019
    await prosesFilter('black', 2019);

    // 2. mobil berwarna silver tahun 2017
    await prosesFilter('silver', 2017);

    // 3. mobil berwarna abu abu tahun 2019
    await prosesFilter('grey', 2019);

    // 4. mobil berwarna abu abu tahun 2018
    await prosesFilter('grey', 2018);

    // 3. mobil berwarna hitam tahun 2020
    await prosesFilter('black', 2019);
}

jalankan();