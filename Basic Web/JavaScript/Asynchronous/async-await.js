

function panggilPasien(nomor) {
    return `Pasien nomor ${nomor}, silahkan masuk`
}


// selain menggunaakan then dan catch pada promise kita bisa menggunakan blok try-catch dan fungsi async
/*
    Contoh 1
*/
async function prosesAntrian () {
    try{
        console.log("Mengecek nomor antrian...")
        const hasil = await panggilPasien(7)
        console.log("SUCCESS: ", hasil)
    }catch(error){
        console.log("ERROR: ", error)
    }
}

prosesAntrian();

/*
    Contoh 2
*/
async function jalankanAntrian() {
    console.log(await panggilPasien(1))
    console.log(await panggilPasien(2))
    console.log(await panggilPasien(3))
    console.log('semua pasien sudah dipanggil')
}

jalankanAntrian();



