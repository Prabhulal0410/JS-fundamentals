// IIFE in JavaScript

// IIFE stands for Immediately Invoked Function Expression.

// It’s a function that runs as soon as it is defined.

// 🔹 Basic Syntax
(function () {
  console.log("This runs immediately!");
})();
// 🔹 Arrow Function Version
(() => {
  console.log("This also runs immediately!");
})();



// ✅ Why Use an IIFE?
// 1️⃣ Avoid Polluting the Global Scope

// Variables inside an IIFE are private and won’t affect global variables.

// (function () {
//   let message = "Hello";
//   console.log(message);
// })();

// console.log(message); // ❌ Error: message is not defined
// 2️⃣ Create a Private Scope

// Before let and const existed, IIFEs were commonly used to create scope.

// var counter = (function () {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// })();

// console.log(counter()); // 1
// console.log(counter()); // 2

// Here:

// The outer function runs immediately.

// It returns an inner function.

// count remains private (closure).



// 🔹 Named IIFE
// (function greet() {
//   console.log("Hello!");
// })();

// The name greet is only available inside the function.

// 🔹 IIFE with Parameters
// (function (name) {
//   console.log("Hello " + name);
// })("John");