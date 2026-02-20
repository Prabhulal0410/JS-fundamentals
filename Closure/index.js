// A closure is a function that remembers and can access variables from its outer scope even after the outer function has finished executing.

// Closure = function + its lexical scope.

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer();

// counter(); // 1
// counter(); // 2
// counter(); // 3




// function greet(name) {
//   return function () {
//     console.log("Hello " + name);
//   };
// }

// const sayHello = greet("John");

// sayHello(); // Hello John


// Private Variable Example
// function secret() {
//   let message = "I am private";

//   return function () {
//     console.log(message);
//   };
// }

// const reveal = secret();
// reveal(); // I am private



// Multiplier Function
// function multiplyBy(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// const double = multiplyBy(2);
// const triple = multiplyBy(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15


// // Timer Counter Example
// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log("Current count:", count);
//   };
// }

// const increment = createCounter();

// setInterval(increment, 1000);



//  The Common Problem 

for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

//  What do you expect?
1
2
3

//  What actually happens?
4
4
4

// Why?

// var is function-scoped, not block-scoped.
// The loop finishes first.
// When setTimeout runs, i is already 4.
// All functions share the same i.
// This happens because each function closes over the same variable, not a copy of it.


// ✅ Solution 1: Use let (Block Scope)
// for (let i = 1; i <= 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

// Solution 2: Use an IIFE (Before let existed)
// for (var i = 1; i <= 3; i++) {
//   (function(currentValue) {
//     setTimeout(function() {
//       console.log(currentValue);
//     }, 1000);
//   })(i);
// }

// Why this works:
// The IIFE creates a new scope.
// currentValue stores a copy of i.
// Each closure remembers its own value.

// 🧠 Simple Explanation

// Think of a closure like a backpack 🎒
// Each function carries a backpack of variables from where it was created.

// With var:
// All functions share one backpack.

// With let or IIFE:
// Each function gets its own backpack.