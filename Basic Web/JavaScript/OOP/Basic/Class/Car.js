// Membuat class dengan nama Car
class Car {
    // Membuat property dengan nama brand
    constructor(brand){
        this.brand = brand;
    }

    // membuat method jalan
    drive(){
        return "Mobil sedang berjalan";
    }

    // membuat method klakson
    horn(x){
        return `klakson di tekan sebanyak ${x} kali`;
    } 
}

module.exports = Car;