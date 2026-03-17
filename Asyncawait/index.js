// async and await in JavaScript are used to handle asynchronous operations (like API calls, file reading, timers) in a way that looks and feels like normal synchronous code.

// 🔹 1. The Problem (Before async/await)
// Earlier, async code was written using callbacks or Promises:

// fetchData()
//   .then(data => processData(data))
//   .then(result => console.log(result))
//   .catch(err => console.error(err));

// This works, but can become hard to read with many steps.


// 🔹 2. What is async?

// An async function always returns a Promise.

// async function greet() {
//   return "Hello";
// }

// This is actually the same as:

// function greet() {
//   return Promise.resolve("Hello");
// }

// 🔹 3. What is await?

// await pauses execution of an async function until a Promise is resolved.

// async function example() {
//   let result = await fetchData();
//   console.log(result);
// }

// 👉 It makes asynchronous code look like synchronous code.



// Example

// function wait() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, 2000);
//   });
// }

// async function run() {
//   console.log("Start");

//   let result = await wait(); // wait for 2 seconds

//   console.log(result);
//   console.log("End");
// }
// run();