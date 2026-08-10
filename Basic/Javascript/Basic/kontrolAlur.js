const nilai = 75;

/*
    KONDISI DAN PERNYATAAN KONTROL ALUR
*/
// If else statement
if (nilai >= 90) {
    console.log("Nilai A");
}else if (nilai >= 80) {
    console.log("Nilai B");
}else if (nilai >= 70) {
    console.log("Nilai C");
}else if (nilai >= 60) {
    console.log("Nilai D");
}else {
    console.log("Nilai E");
}

// Switch statement
switch (nilai) {
    case nilai>= 90:
        console.log("Nilai A");
        break;
    case nilai >= 80:
        console.log("Nilai B");
        break;
    case nilai >= 70:
        console.log("Nilai C");
        break;
    case nilai >= 60:
        console.log("Nilai D");
        break;
    default:
        console.log("Nilai E");
        break;
}

/*
    TERNARY OPERATOR
*/
const hasil = (nilai >= 60) ? "Lulus" : "Tidak Lulus";
console.log(hasil);

/*
    FOR LOOP
*/
for (let i = 0; i < 5; i++) {
    console.log("Perulangan ke-" + i);
}

/*
    WHILE LOOP
*/
let j = 0;
while (j < 5) {
    console.log("Perulangan ke-" + j);
    j++;
}

/*
    DO WHILE LOOP
*/
let k = 0;
do {
    console.log("Perulangan ke-" + k);
    k++;
} while (k < 5);

/*
    BREAK AND CONTINUE STATEMENTS
*/
for (let l = 0; l < 10; l++) {
    if (l === 5) {
        break; // keluar dari loop ketika l sama dengan 5
    }
    console.log("Perulangan ke-" + l);
}

for (let m = 0; m < 10; m++) {
    if (m === 5) {
        continue; // melewati iterasi ketika m sama dengan 5
    }
    console.log("Perulangan ke-" + m);
}

/*
    LABEL STATEMENTS
*/
continueLoop: for (let n = 0; n < 5; n++) {
    if (n === 2) {
        continue continueLoop; // melewati iterasi ketika n sama dengan 2
    }
    console.log("Perulangan ke-" + n);
}

/*
    TRY CATCH STATEMENTS
*/
try {
    let result = nilai / 0;
    if (!isFinite(result)) {
        throw new Error("Terjadi pembagian dengan nol");
    }
    console.log("Hasil: " + result);
} catch (error) {
    console.log("Error: " + error.message);
}

/*
    THROW STATEMENTS
*/
function bagi(a, b) {
    if (b === 0) {
        throw new Error("Pembagian dengan nol tidak diperbolehkan");
    }
    return a / b;
}

// Testing the function Date
let sekarang = new Date().getDay();
console.log("Hari ini adalah hari ke-" + sekarang);