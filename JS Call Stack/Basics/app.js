// 1. JS call stack
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     return two() + one();
// }

// console.log(three());

// 2. callback

// function multipleGreet(func) {
//     for(let i=1;i<=5;i++) {
//         func();
//     }
// }

//callback function
// function greet() { 
//     console.log("hello!");
// }

// multipleGreet(greet);

// Asynchronous Nature of JS

// console.log("Hello!");

// setTimeout(() => {
//     console.log("JS");
// },1000);

// console.log("Welcome to");

//Event Loop