// The Rest Operator (...) in JavaScript is used to collect multiple elements into a single array or object. It is mainly used in functions, arrays, and objects.

// 1️⃣ Rest Operator in Functions
// It allows a function to accept any number of arguments.

// function sum(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4)); 
// // Output: 10


// ✔ ...numbers gathers all arguments into an array.


// So here:

// numbers = [1, 2, 3, 4]
// 2️⃣ Rest Operator with Array Destructuring
// const arr = [10, 20, 30, 40, 50];

// const [a, b, ...rest] = arr;

// console.log(a);    // 10
// console.log(b);    // 20
// console.log(rest); // [30, 40, 50]

// ✔ rest collects the remaining elements.

// 3️⃣ Rest Operator with Objects
// const user = {
//   name: "Rahul",
//   age: 25,
//   city: "Mumbai"
// };

// const { name, ...details } = user;

// console.log(name);    // Rahul
// console.log(details); // { age: 25, city: "Mumbai" }

// ✔ details contains the remaining properties.