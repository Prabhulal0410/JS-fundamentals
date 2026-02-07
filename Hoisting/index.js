// var hoisting
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// let hoisting (Temporal Dead Zone)
console.log(b); // ReferenceError
let b = 20;

// const hoisting (Temporal Dead Zone)
console.log(c); // ReferenceError
const c = 30;

// Function declaration (fully hoisted)
sayHi();

function sayHi() {
  console.log("Hi!");
}

// Function expression with var
sayHello(); // TypeError

var sayHello = function () {
  console.log("Hello!");
};

// Arrow function with let
greet(); // ReferenceError

let greet = () => {
  console.log("Hey!");
};

// How JS sees this (behind the scenes)
// hoisted phase
var x;

// execution phase
console.log(x); // undefined
x = 5;





// output based question

console.log(a);      // ?
foo();               // ?
bar();               // ?

var a = 10;

function foo() {
  console.log("foo:", a);
  var a = 20;
  console.log("foo after:", a);
}

var bar = function () {
  console.log("bar:", a);
};

console.log(a);      // ?


// answer is   TypeError: bar is not a function
