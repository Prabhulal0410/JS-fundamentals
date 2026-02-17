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

