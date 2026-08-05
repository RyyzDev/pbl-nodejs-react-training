// Membuat class dengan nama Peserta
class Peserta {
    // Membuat property dengan nama, umur, proglat, dan nilai
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

// instance pertama dari class peserta
const peserta1 = new Peserta('Ryyz', 11, 'web');
console.log(`Halo, Nama saya ${peserta1.nama}, umur saya ${peserta1.umur}, saya ikut program latihan ${peserta1.proglat}`);

// instance kedua dari class peserta
const peserta2 = new Peserta('John', 22, 'tik', 80);
console.log(`Halo, Nama saya ${peserta2.nama}, umur saya ${peserta2.umur}, saya ikut program latihan ${peserta2.proglat}, Grade saya ${peserta2.grade()}`);

// instance ketiga dari class peserta
const peserta3 = new Peserta('Jane', 22, 'office', 70);
console.log(`Halo, Nama saya ${peserta3.nama}, umur saya ${peserta3.umur}, saya ikut program latihan ${peserta3.proglat}, Grade saya ${peserta3.grade()}`);

// instance keempat dari class peserta
const peserta4 = new Peserta('June', 22, 'welding', 60);
console.log(`Halo, Nama saya ${peserta4.nama}, umur saya ${peserta4.umur}, saya ikut program latihan ${peserta4.proglat}, Grade saya ${peserta4.grade()}`);
