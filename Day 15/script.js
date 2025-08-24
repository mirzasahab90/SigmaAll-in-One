// INHERITENCE

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
// }

// function Student(name, age, field) {
//     Person.call(this, name, age);
//     this.field = field;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// let student = new Student("John", 25, "Computer Science");
// console.log(student.greet()); // "Hello, my name is John and I am 25 years old."
// console.log(student.field); // "Computer Science"

// ======================================================================================
// POLYMORPHISM

// FUNCTION OVERLOADING
// function add (a, b){
// return a + b ;
// }

// function add (a, b, c ){
//     return a + b + c; 
// }

// console.log(add(2,3));

// FUNCITON OVERRIDING

// class Shape {
//     constructor(name) {
//         this.name = name;
//     }
//     draw() {
//         console.log(`Drawing a ${this.name}`);
//     }
// }

// class Circle extends Shape {
//     draw() {
//         console.log(`Drawing a Circle`);
//     }
// }

// class Square extends Shape {
//     draw() {
//         console.log(`Drawing a Square`);
//     }
// }

// let shape = new Shape("Shape");
// let circle = new Circle();
// let square = new Square();

// shape.draw(); // Drawing a Shape
// circle.draw(); // Drawing a Circle
// square.draw(); // Drawing a Square

// ==============================================================

let sum = 0 ;
for (let i = 0; i <= 100; i++) {
     sum =  i  + sum;    
}

console.log(sum);
