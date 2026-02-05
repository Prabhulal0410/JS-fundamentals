

// 1️⃣ let (most common)

// Can be changed
// Has block scope (only works inside {})

let score = 10;
score = 20; // allowed

if (true) {
  let message = "Hello";
  console.log(message); // works
}

// console.log(message); ❌ error (outside block)



// 2️⃣ const (constant)

// Cannot be reassigned
// Also block scoped
// Best choice by default 👍

const pi = 3.14;
// pi = 4; ❌ error

const user = {
  name: "Alex"
};

user.name = "Sam"; // ✅ allowed (object itself not replaced)




// 3️⃣ var (old way – avoid)

// Function scoped (not block scoped)

// Can cause bugs 😬

var x = 5;

if (true) {
  var x = 10;
}

console.log(x); // 10 😵 (unexpected)




// Scope example (important!)
let a = 1;

function test() {
  let b = 2;
  console.log(a); // works
  console.log(b); // works
}

test();
// console.log(b); ❌ error