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