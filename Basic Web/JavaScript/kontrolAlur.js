const nilai = 75;

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
