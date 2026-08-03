const nilai = 75;

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

switch (nilai) {
    case 90:
        console.log("Nilai A");
        break;
    case 80:
        console.log("Nilai B");
        break;
    case 70:
        console.log("Nilai C");
        break;
    case 60:
        console.log("Nilai D");
        break;
    default:
        console.log("Nilai E");
        break;
}