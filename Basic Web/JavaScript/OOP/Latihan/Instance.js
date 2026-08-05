const Peserta = require('./ClassPesertaLatihan.js');

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