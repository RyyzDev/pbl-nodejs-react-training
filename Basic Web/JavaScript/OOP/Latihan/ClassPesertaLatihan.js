// Membuat class dengan nama Peserta
class Peserta {
    // Membuat property dengan nama, umur, proglat, dan nilai
    constructor(nama, umur, proglat, nilai){
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this._nilai = nilai; // mengguanakn private funtion
    }

    // note: nama setter tidak boleh sama dengan nama properti bagian (this)
    get nilai(){
        if (this._nilai != undefined){
            return this._nilai; // jika nilai sudah di set maka kembalikan nilai
        }else {
            return "Nilai belum di set!!"; // jika nilai belum di set atay undefined maka kembalikan peringatan
        }
    }

    set nilai(x){
        if (x >= 0 && x <= 100){
            this._nilai = x; // jika range nilai yang diinput melebihi batas 0 <= x <= 100 maka assign nilai x
        } else {
            console.log("Input nilai tidak valid"); // jika range nilai yang diinput tidak di dalam batas 0 <= x <= 100 maka kembalikan peringatan
        }
    }

    grade(){
        switch(true){
            // jika nilai diatas sama dengan 90
            case (this._nilai >= 90):
                return 'Sangat Baik';
                break;
            // jika nilai diatas sama dengan 80
            case (this._nilai >= 80):
                return 'Baik';
                break;
            // jika nilai diatas sama dengan 70
            case (this._nilai >= 70):
                return 'Cukup';
                break;
            // jika nilai diatas sama dengan 60
            case (this._nilai >= 60):
                return 'Kurang';
                break;
            // jika nilai tidak masuk kondisi apapun
            default:
                return 'Tidak Lulus';
        }
    }
}


module.exports = Peserta;