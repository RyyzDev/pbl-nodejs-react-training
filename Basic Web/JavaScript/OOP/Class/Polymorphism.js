// polymorphism adalah menjadikan suatu super class memiliki anak class yang lebih spesifik
// contoh

// Super Class (Abstraction) -> hal dengan scope umum
class Vehicle {
    sound(){
        console.log("This vehicle make sound");
    }
}

// Child Class: class spesifik dari hal umum (Vehicle = Kendaraan)
class Car extends Vehicle {
    sound(){
        console.log("Vroom... Vroomm..");
    }
}

// Child Class ke 2 : class spesifik dari hal umum (Vehicle = Kendaraan)
class Bike extends Vehicle {
    sound(){
        console.log("kringg.., kringg..")
    }
}

// Instance
// super class (vehicle)
const kendaraan1 = new Vehicle();
kendaraan1.sound();

// child class (Car)
const mobil1 = new Car();
mobil1.sound();

// child class (Bike)
const sepeda1 = new Bike();
sepeda1.sound();