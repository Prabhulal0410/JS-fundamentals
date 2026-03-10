//  Promise is an object that represents the eventual result of an asynchronous operation. It lets you handle success or failure without blocking the rest of the program.



// A Promise has 3 states:

// Pending – operation still running
// Fulfilled (Resolved) – operation completed successfully
// Rejected – operation failed

// Once a promise is fulfilled or rejected, it cannot change again.


// Creating a Promise

// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed!");
//   } else {
//     reject("Task failed!");
//   }
// });

// resolve() → success result
// reject() → error result



// Consuming a Promise (then, catch)

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// .then() → runs when resolved
// .catch() → runs when rejected



// Real Example (Simulating API Call)

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received from server");
//     }, 2000);
//   });
// }

// fetchData().then((data) => {
//   console.log(data);
// });



// Promise Chaining

// fetchData()
//   .then((data) => {
//     console.log(data);
//     return "Processing data";
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => console.log(err));

// Each .then() receives the result of the previous one.



// Returning a Promise from .then()
// Example:

// function step1() {
//   return Promise.resolve("Step 1 done");
// }

// function step2() {
//   return Promise.resolve("Step 2 done");
// }

// step1()
//   .then((res) => {
//     console.log(res);
//     return step2();
//   })
//   .then((res) => {
//     console.log(res);
//   });



// Promise Error Handling
// Errors automatically go to .catch().

// const promise = new Promise((resolve, reject) => {
//   reject("Something went wrong");
// });

// promise
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));



// Visual Flow
// Create Promise
//      │
//      ▼
//   Pending
//    /   \
//   ▼     ▼
// Resolve Reject
//   │       │
//  .then() .catch()



// Promise.all()

// Promise.all() runs multiple promises in parallel and returns the results when all promises succeed.
// If any promise fails, the whole thing fails.

// Example
// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => console.log(err));

// Output:
// ["A", "B", "C"]

// 📌 Important:

// Runs promises in parallel
// Returns array of results
// Fails immediately if one promise rejects

// Example failure:

// const p1 = Promise.resolve("A");
// const p2 = Promise.reject("Error!");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3])
//   .catch(err => console.log(err));

// Output:
// Error!




// Promise.allSettled()
// Promise.allSettled() waits for all promises to finish, whether they succeed or fail.
// It never rejects.

// Example
// const p1 = Promise.resolve("Success");
// const p2 = Promise.reject("Failed");

// Promise.allSettled([p1, p2])
//   .then((results) => console.log(results));

// Output:

// [
//  { status: "fulfilled", value: "Success" },
//  { status: "rejected", reason: "Failed" }
// ]

// 📌 Use when you want results of every promise, even failed ones.

// Example:

// Loading many APIs
// Showing partial results




// Promise.race()

// Promise.race() returns the first promise that finishes (success or failure).

// Example
// const p1 = new Promise(res => setTimeout(() => res("First"), 1000));
// const p2 = new Promise(res => setTimeout(() => res("Second"), 2000));

// Promise.race([p1, p2])
//   .then(result => console.log(result));

// Output:

// First

// 📌 Use cases:
// Timeout logic
// Fastest server response

// Example timeout:

// Promise.race([
//   fetch("https://api.com/data"),
//   new Promise((_, reject) =>
//     setTimeout(() => reject("Timeout"), 3000)
//   )
// ])