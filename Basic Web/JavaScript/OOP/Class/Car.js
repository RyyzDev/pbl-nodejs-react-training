// Membuat class dengan nama Car
class Car {
    // Deklarasi private property wajib ditulis di luar constructor
    #color; 

    // Membuat constructor
    constructor(brand, merk, color){
        this.brand = brand;
        this._merk = merk;   // Protected property (konvensi komunitas): masih bisa diakses dari luar, tapi sebaiknya jangan
        this.#color = color;  // Private property: benar-benar TIDAK BISA diakses di luar class ini, bahkan oleh class anak (inheritance)
        this._carname = brand; // Inisialisasi variabel untuk getter/setter agar tidak error
    }

    // Getter: metode untuk mengambil properti
    get carname(){
        return this._carname;
    }

    // Setter: metode untuk mengubah properti
    set carname(x){
        this._carname = x; // Setter tidak perlu menggunakan kata kunci 'return'
    }

    // Membuat method jalan
    drive(){
        return "Mobil sedang berjalan";
    }

    // Membuat method klakson
    horn(x){
        return `Klakson ditekan sebanyak ${x} kali`;
    } 
}

module.exports = Car;
