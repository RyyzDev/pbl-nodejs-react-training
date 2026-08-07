function readBooks(time, book, callback){
    console.log("Saya membaca ", book.name )
    setTimeout(()=>{
        let sisaWaktu = 0
        if(time >= book.timeSpent){
            sisaWaktu = time - book.timeSpent
            console.log("saya sudah membaca ", book.name, " , sisa waktu saya ", sisaWaktu)
            callback(sisaWaktu) // menjalankan function callback
        }else {
            console.log('waktu saya habis')
            callback(time)
        }
    }, book.timeSpent )
}

module.exports = readBooks