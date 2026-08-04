/* ==========================================
   1. STRUKTUR DATA DASAR
   ========================================== */

// Array 1D
const angka = [10, 20, 30, 45, 50, 65];

// Array of Objects
const daftarMobil = [
  { name: "BMW", warna: "Blue", harga: 800 },
  { name: "Toyota", warna: "Red", harga: 300 },
  { name: "Mercedes Benz", warna: "Black", harga: 900 },
  { name: "Honda", warna: "Red", harga: 350 }
];


/* ==========================================
   2. FUNGSI-FUNGSI UTAMA ARRAY
   ========================================== */

// --- Method .forEach() ---
// Perulangan biasa (tanpa membuat array baru)
console.log("--- forEach ---");
angka.forEach((nilai, index) => {
  console.log(`Index ke-${index}: ${nilai}`);
});


// --- Method .map() ---
// Mengubah setiap elemen menjadi elemen baru
console.log("\n--- map ---");
const angkaDikaliDua = angka.map((nilai) => nilai * 2);
console.log("Angka dikali 2:", angkaDikaliDua);

const namaMobil = daftarMobil.map((mobil) => mobil.name);
console.log("Daftar Nama Mobil:", namaMobil);


// --- Method .filter() ---
// Menyaring elemen berdasarkan kondisi (mengembalikan array baru yang lolos kriteria)

console.log("\n--- filter (Array 1D) ---");
// Contoh 1: Ambil angka yang lebih besar dari 25
const angkaBesar = angka.filter((nilai) => nilai > 25);
console.log("Angka > 25:", angkaBesar); // Output: [30, 45, 50, 65]

// Contoh 2: Ambil hanya angka genap
const angkaGenap = angka.filter((nilai) => nilai % 2 === 0);
console.log("Angka Genap:", angkaGenap); // Output: [10, 20, 30, 50]


console.log("\n--- filter (Array of Objects) ---");
// Contoh 1: Filter mobil berwarna "Red"
const mobilMerah = daftarMobil.filter((mobil) => mobil.warna === "Red");
console.log("Mobil Merah:", mobilMerah);

// Contoh 2: Filter mobil berharga mahal (> 500)
const mobilMewah = daftarMobil.filter((mobil) => mobil.harga > 500);
console.log("Mobil Mewah (Harga > 500):", mobilMewah);


/* ==========================================
   3. CHAINING (Menggabungkan Method)
   ========================================== */
console.log("\n--- Chaining (Filter + Map) ---");
// Ambil HANYA NAMA dari mobil yang berwarna "Red"
const namaMobilMerah = daftarMobil
  .filter((mobil) => mobil.warna === "Red")
  .map((mobil) => mobil.name);

console.log("Nama Mobil Merah:", namaMobilMerah); // Output: ["Toyota", "Honda"]