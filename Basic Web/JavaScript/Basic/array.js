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

// --- Method .length ---
// Sebuah method untuk menghitung panjang array
console.log("--- length ---");
console.log(angka.length);


// --- Method .forEach() ---
// Perulangan biasa (tanpa membuat array baru)
console.log("\n--- forEach ---");
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


// Kita gunakan array tiruan khusus manipulasi agar tidak merusak array data dasar di atas
let targetAngka = [...angka]; // Salinan: [10, 20, 30, 45, 50, 65]
let targetMobil = [...daftarMobil];

// --- Method .push() ---
// Menambah elemen di akhir array (Mengubah array asli)
console.log("\n--- push ---");
targetAngka.push(100);
console.log("Setelah push(100):", targetAngka); 


// --- Method .pop() ---
// Menghapus elemen terakhir dan mengembalikan elemen tersebut (Mengubah array asli)
console.log("\n--- pop ---");
const elemenTerakhir = targetAngka.pop();
console.log("Elemen yang dihapus:", elemenTerakhir);
console.log("Setelah pop():", targetAngka);


// --- Method .unshift() ---
// Menambah elemen di awal array (Mengubah array asli)
console.log("\n--- unshift ---");
targetAngka.unshift(5);
console.log("Setelah unshift(5):", targetAngka);


// --- Method .shift() ---
// Menghapus elemen pertama dan mengembalikan elemen tersebut (Mengubah array asli)
console.log("\n--- shift ---");
const elemenPertama = targetAngka.shift();
console.log("Elemen yang dihapus:", elemenPertama);
console.log("Setelah shift():", targetAngka);


// --- Method .splice() ---
// Mengubah isi array dengan menghapus, mengganti, atau menambah elemen di posisi tertentu (Mengubah array asli)
console.log("\n--- splice ---");
// Contoh: Mulai dari indeks 2, hapus 1 elemen, lalu masukkan angka 99
targetAngka.splice(2, 1, 99);
console.log("Setelah splice (ganti index 2 dengan 99):", targetAngka);


// --- Method .slice() ---
// Memotong/menyalin sebagian elemen array ke dalam array baru (TIDAK mengubah array asli)
console.log("\n--- slice ---");
// Contoh: Ambil elemen dari indeks 1 hingga SEBELUM indeks 4 (indeks 1, 2, 3)
const hasilPotong = targetAngka.slice(1, 4);
console.log("Hasil potongan slice(1, 4):", hasilPotong);
console.log("Array asal tetap utuh:", targetAngka);


// --- Method .sort() ---
// Mengurutkan elemen secara bawaan sebagai string/alfabet (Mengubah array asli)
console.log("\n--- sort (Alfabet) ---");
const buah = ["Mangga", "Apel", "Jeruk", "Pisang"];
buah.sort();
console.log("Urutan buah alfabetis:", buah);


// --- Method .sort() (ascending) ---
// Mengurutkan angka dari terkecil ke terbesar menggunakan fungsi pembanding (Mengubah array asli)
console.log("\n--- sort (Angka Ascending) ---");
targetAngka.sort((a, b) => a - b);
console.log("Angka urut naik:", targetAngka);


// --- Method .sort() (descending) ---
// Mengurutkan angka dari terbesar ke terkecil menggunakan fungsi pembanding (Mengubah array asli)
console.log("\n--- sort (Angka Descending) ---");
targetAngka.sort((a, b) => b - a);
console.log("Angka urut turun:", targetAngka);

// Contoh sort (descending) pada Array of Objects berdasarkan harga mobil paling mahal
console.log("\n--- sort (Objects Descending Berdasarkan Harga) ---");
targetMobil.sort((a, b) => b.harga - a.harga);
console.log("Mobil termahal ke termurah:", targetMobil);

/* ==========================================
   3. CHAINING (Menggabungkan Method)
   ========================================== */
console.log("\n--- Chaining (Filter + Map) ---");
// Ambil HANYA NAMA dari mobil yang berwarna "Red"
const namaMobilMerah = daftarMobil
  .filter((mobil) => mobil.warna === "Red")
  .map((mobil) => mobil.name);

console.log("Nama Mobil Merah:", namaMobilMerah); // Output: ["Toyota", "Honda"]