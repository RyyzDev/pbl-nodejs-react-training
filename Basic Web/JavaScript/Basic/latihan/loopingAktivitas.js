for (let i = 1; i <= 20; i++){
    if (i % 2 != 0 && i % 3 == 0 ){
        console.log(i, " - Mengikuti Uji Kompentensi");
    }else if (i % 2 == 0 && i % 3 == 0){
        console.log(i, " - Mendapat Sertifikat")
    }else if (i % 2 != 0){
        console.log(i," - Apel Pagi");
    }else if (i % 2 == 0){
        console.log(i, " - Mengikuti Pelatihan")
    }
}
