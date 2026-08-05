// impor file class car
const Car = require('./Class/Car.js');
// impor file class peserta
const Peserta = require('./Class/Peserta.js');
// impor file class CarWithVariable
const CarWithVariable = require('./Class/CarWithVariable.js');
// impor file class Laptop
const Laptop = require('./Class/Laptop.js');


// instance dari class Car (pembuatan objek pertama)
const mobil1 = new Car('Mitsubishi');
console.log(mobil1.brand);
// panggil method drive pada class Car objek pertama
console.log(mobil1.drive());
// panggil method horn dengan parameter pada class Car objek pertama
console.log(mobil1.horn(3));

// pembuatan objek kedua
const mobil2 = new Car('BMW');
console.log(mobil2.brand);
// panggil method drive pada class Car objek kedua
console.log(mobil1.drive());
// panggil method horn dengan parameter pada class Car objek kedua
console.log(mobil1.horn(10));


// instance dari class CarWithVariable
const mobil3 = new CarWithVariable('Toyota');
console.log(mobil3.brand);


// instance dari class Laptop
const laptop1 = new Laptop('Asus', 90);
console.log(laptop1.cekBaterai());
// instance kedua dari class Laptop
const laptop2 = new Laptop('Lenovo', 70);
console.log(laptop2.cekBaterai());


/*
    LATIHAN
*/

// instance dari class peserta
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