class Parent {
    constructor(greeting){
        this.greeting = greeting;
    }

    parentSay() {
        return `${this.greeting} This is the parent class`;
    }

}

class Child extends Parent {
    constructor(greeting, name){
        // cara memanggil properti parent
        super(greeting);
        this.name = name;
    }

    childSay(){
        return `${this.greeting}, ${this.name} this is the child class`;
    }
}

// class parent
const parent1 = new Parent('Halo');
console.log(parent1.parentSay());

//class child
const child1 = new Child('hai', 'arjuna');
console.log(child1.childSay());
// class child bisa mengambil method parent nya
console.log(child1.parentSay());