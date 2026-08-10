// membuat class Laptop dengan properti dan method
class Laptop {
    constructor(merek, baterai){
        this.merek = merek;
        this.baterai = baterai;
    }

    cekBaterai(){
        // menggunakan kondisi di dalam method
        if (this.baterai >= 80){
            return `${this.merek} : Baterai kamu penuh ${this.baterai}%`;
        }else {
            return `${this.merek} : Baterai kamu sudah tidak penuh ${this.baterai}%`;
        }
    }
}

// ekspor class
module.exports = Laptop;