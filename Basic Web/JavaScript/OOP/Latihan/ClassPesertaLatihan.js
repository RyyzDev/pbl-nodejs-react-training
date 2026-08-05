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

// instance pertama dari class peserta
const peserta1 = new Peserta('Ryyz', 11, 'web');
console.log(`Halo, Nama saya ${peserta1.nama}, umur saya ${peserta1.umur}, saya ikut program latihan ${peserta1.proglat}`);

//getter dan setter peserta1
//setter
peserta1.nilai = 150;
//getter
console.log(peserta1.nilai); 

// instance kedua dari class peserta
const peserta2 = new Peserta('John', 22, 'tik', 150);
console.log(`Halo, Nama saya ${peserta2.nama}, umur saya ${peserta2.umur}, saya ikut program latihan ${peserta2.proglat}, Grade saya ${peserta2.grade()}`);

// instance ketiga dari class peserta
const peserta3 = new Peserta('Jane', 22, 'office', 70);
console.log(`Halo, Nama saya ${peserta3.nama}, umur saya ${peserta3.umur}, saya ikut program latihan ${peserta3.proglat}, Grade saya ${peserta3.grade()}`);

// instance keempat dari class peserta
const peserta4 = new Peserta('June', 22, 'welding', 60);
console.log(`Halo, Nama saya ${peserta4.nama}, umur saya ${peserta4.umur}, saya ikut program latihan ${peserta4.proglat}, Grade saya ${peserta4.grade()}`);
