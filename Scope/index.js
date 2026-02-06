// 1. Global Scope
// A variable declared outside any function or block is global.

let name = "Alex";

function greet() {
  console.log(name); // can access global variable
}

greet();        // Alex
console.log(name); // Alex

// ➡️ name is accessible everywhere.



// 2. Function Scope
// Variables declared inside a function are only available there.

function sayHello() {
  let message = "Hello!";
  console.log(message);
}

sayHello();      // Hello!
console.log(message); // ❌ Error: message is not defined

// ➡️ message exists only inside sayHello.



// 3. Block Scope (let and const)
// Variables declared with let or const inside {} only exist in that block.

if (true) {
  let age = 25;
  const city = "Paris";
  console.log(age, city); // 25 Paris
}

console.log(age);  // ❌ Error
console.log(city); // ❌ Error

// ➡️ age and city are block-scoped.



// 4. var Scope (NOT block scoped 😬)
// var ignores block scope and is function-scoped.

if (true) {
  var color = "blue";
}

console.log(color); // blue

// ➡️ This is why var is usually avoided today.



// 5. Scope Chain (important concept)
// JavaScript looks for variables from inner → outer scope.

let x = 10;

function outer() {
  let y = 20;

  function inner() {
    let z = 30;
    console.log(x + y + z);
  }

  inner();
}

outer(); // 60


// ➡️ inner() can access y and x, but outer cannot access z.