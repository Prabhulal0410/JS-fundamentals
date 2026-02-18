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