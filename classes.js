// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     console.log(`${this.name}  barks`)
// }

// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} bites`)
//     }
// }

// const d = new Dog("hiii");
// d.speak()




let Dog = class {
    constructor(name) {
        this.name = name
    }
}
const Animal = {
    speak() {
        console.log(`${this.name}  barks`)
    }
}


Object.setPrototypeOf(Dog.prototype,Animal);
let d = new Dog("djh");
d.speak()
var Foo = class Foo1{};


console.log(Foo.name)
