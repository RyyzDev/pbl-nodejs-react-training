const nilai = 80;
const lulus = nilai >= 75;
const hadir = true;

// AND: Bernilai True apabila 2 kondisi bernilai True
const hasil = lulus && hadir;
console.log("Hasil AND: " + hasil);

// OR: Bernilai True apabila salah satu kondisi bernilai True
const hasil2 = lulus || hadir;
console.log("Hasil OR: " + hasil2);

// NOT: Bernilai True apabila kondisi bernilai False
const hasil3 = !lulus;
console.log("Hasil NOT: " + hasil3);

// NAND: Bernilai True apabila salah satu kondisi bernilai False
const hasil4 = !(lulus && hadir);
console.log("Hasil NAND: " + hasil4);

// NOR