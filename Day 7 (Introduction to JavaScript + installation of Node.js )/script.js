//Data type 
/*	1. integer (0-9)
    2. float (0.0-99.9)
    3. double (0.0-99.9)
    4. boolean (1/0)
    5. char (a-z)
    6. string (sentences)  */

// var a = 2;
// const b = 3 ;
// var c = a + b ;
// console.log(c)

// var a = 10; // number 
// var b = "Rayyan" // string 
// var c = [1, 2, 3, 4, 5] // array 
// console.log(a);
// console.log(b);
// console.log(c[2]);

let a = [1, 2, 3, 4, 5, 6];
let b = [2, 7, 8, 3, 2, 6];

// Step 1: Find duplicates between a and b
let duplicates = a.filter(value => b.includes(value));

// Step 2: Filter out duplicates from both arrays
let uniqueA = a.filter(value => !duplicates.includes(value));
let uniqueB = b.filter(value => !duplicates.includes(value));

// Step 3: Combine the filtered arrays and sum all values
let total = [...uniqueA, ...uniqueB].reduce((sum, val) => sum + val, 0);

console.log("Sum of non-duplicate values:", total);
