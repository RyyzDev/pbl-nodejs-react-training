

function panggilPasien(nomor) {
    if (nomor <= 10){
        return `Pasien nomor ${nomor}, silahkan masuk`
    }else {
        return `Belum masuk antrian nomor ${nomor}`
    }
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
    for (let i = 1; i<= 11; i++){
        console.log(await panggilPasien(i))
    }

    // console.log(await panggilPasien(1))
    // console.log(await panggilPasien(2))
    // console.log(await panggilPasien(3))
    // console.log(await panggilPasien(4))
    // console.log(await panggilPasien(5))
    // console.log(await panggilPasien(6))
    // console.log(await panggilPasien(7))
    // console.log(await panggilPasien(8))
    // console.log(await panggilPasien(9))
    // console.log(await panggilPasien(10))
    // console.log(await panggilPasien(11))
    // console.log('semua pasien sudah dipanggil')
}

jalankanAntrian();



