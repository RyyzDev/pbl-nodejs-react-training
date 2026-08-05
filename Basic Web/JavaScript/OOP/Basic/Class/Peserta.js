// Membuat class dengan nama Peserta
class Peserta {
    // Membuat property dengan nama, umur, dan proglat
    constructor(nama, umur, proglat, nilai){
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this.nilai = nilai;
    }

    grade(){
        switch(true){
            case (this.nilai >= 90):
                return 'Sangat Baik';
                break;
            case (this.nilai >= 80):
                return 'Baik';
                break;
            case (this.nilai >= 70):
                return 'Cukup';
                break;
            case (this.nilai >= 60):
                return 'Kurang';
                break;
            default:
                return 'Tidak Lulus';
        }
    }
}

module.exports = Peserta;