// sebuah class bisa di bungkus ke dalam variable
// membuat class CarWithVariable yang dibungkus ke variabel Car
const Car = class CarWithVariable{
    constructor(brand){
        this.brand = brand;
    }
}

// saat ekspor hanya mengekspor variabel
module.exports = Car;