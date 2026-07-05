// Destructuring in JavaScript is a feature that lets you extract values from arrays or properties from objects and assign them to variables in a clean, readable way.

// 1. Array Destructuring Without Destructuring
const numbers = [10, 20, 30];

const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30

// With Destructuring
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30

// Think of it like:

Array
[10, 20, 30]
 ↓   ↓   ↓
 a   b   c


// 2. Skip Values

// You don't have to extract every value.

const colors = ["Red", "Green", "Blue"];
const [, second] = colors;
console.log(second);

// Output
Green

// Notice the comma:

[ Red , Green , Blue ]
   ↑
 skipped
3. Default Values

// If a value doesn't exist, you can provide a default.

const numbers = [10];
const [a, b = 50] = numbers;
console.log(a); // 10
console.log(b); // 50

// Without default:

const [a, b] = [10];
console.log(b);

Output
undefined

// 4. Rest Operator (...)

// Collect the remaining values.

const numbers = [1, 2, 3, 4, 5];
const [first, ...rest] = numbers;

console.log(first);
console.log(rest);

// Output

1
[2,3,4,5]


// 5. Swap Variables

// Without destructuring

let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(a, b);

// With destructuring

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);

// Output

20 10