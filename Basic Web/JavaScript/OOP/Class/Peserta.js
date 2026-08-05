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
            // jika nilai diatas sama dengan 90
            case (this.nilai >= 90):
                return 'Sangat Baik';
                break;
            // jika nilai diatas sama dengan 80
            case (this.nilai >= 80):
                return 'Baik';
                break;
            // jika nilai diatas sama dengan 70
            case (this.nilai >= 70):
                return 'Cukup';
                break;
            // jika nilai diatas sama dengan 60
            case (this.nilai >= 60):
                return 'Kurang';
                break;
            // jika nilai tidak masuk kondisi apapun
            default:
                return 'Tidak Lulus';
        }
    }
}

module.exports = Peserta;