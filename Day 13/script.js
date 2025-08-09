// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// let person1 = new Person("Uzair", 17);
// let person2 = new Person("Noman", 17);
// let person3 = new Person("Zeeshan", 17);
// let person4 = new Person("Rayyan", 17);

// console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(person4)


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

let person1 = new Person("Uzair", 17);
console.log(person1.greet())
