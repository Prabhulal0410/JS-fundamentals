// 📞 Callback Function in JavaScript 
// A callback function in JavaScript is a function that is passed as an argument to another function and is executed later, usually after some operation has completed.


// In simple terms:
// A callback is a function you give to another function so it can “call you back” later.


// 🔹 Why Callbacks Are Important
// JavaScript is single-threaded and asynchronous. This means:
// It runs one task at a time.
// Some operations (like fetching data, reading files, timers) take time.
// Instead of blocking the program, JavaScript uses callbacks to handle results when they’re ready.


// function mainFunction(callbackFunction) {
//     // do something
//     callbackFunction();
// }



// function greet(name) {
//     console.log("Hello " + name);
// }
// function processUserInput(callback) {
//     let name = "John";
//     callback(name);
// }
// processUserInput(greet);

// What happens?
// greet is passed as a callback.
// processUserInput executes it.
// The function runs when called inside another function.



// 🔹 Asynchronous Callback
// Callbacks are commonly used with asynchronous operations:

// setTimeout(function() {
//     console.log("Executed after 2 seconds");
// }, 2000);

// Here:
// The function is a callback.
// It runs after 2 seconds.
// JavaScript continues executing other code meanwhile.



// 🔹 Callback in Event Handling
// button.addEventListener("click", function() {
//     console.log("Button clicked!");
// });

// The function runs only when the event occurs.
// It is a callback triggered by an event.



// function calculate(a, b, operation) {
//     return operation(a, b);
// }
// let result = calculate(5, 3, function(x, y) {
//     return x + y;
// });
// console.log(result);



// console.log("Start");
// setTimeout(function() {
//     console.log("This runs after 2 seconds");
// }, 2000);
// console.log("End");


// Callback with Arrow Function
// setTimeout(() => {
//     console.log("Arrow function callback");
// }, 1000);


// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         let data = { name: "John", age: 25 };
//         callback(data);
//     }, 2000);
// }
// function displayData(user) {
//     console.log("User Name:", user.name);
//     console.log("User Age:", user.age);
// }
// fetchData(displayData);



// Callback Hell (also called the “Pyramid of Doom”) is a situation in asynchronous programming where multiple callbacks are nested inside each other, making code hard to read, maintain, and debug.

// It’s common in JavaScript, especially before modern features like Promises and async/await.

// 🔥 Why It Happens
// In JavaScript (like in Node.js or browsers), asynchronous tasks such as:
// API calls
// File reading
// Database queries
// Timers

// use callbacks to run code after the task finishes.

// When many async steps depend on each other, callbacks get deeply nested.

// ❌ Example of Callback Hell
// getUser(userId, function(user) {
//     getOrders(user.id, function(orders) {
//         getOrderDetails(orders[0], function(details) {
//             processOrder(details, function(result) {
//                 console.log("Done:", result);
//             });
//         });
//     });
// });

// Problems:
// Hard to read (pyramid shape)
// Difficult error handling
// Tough to maintain
// Hard to reuse logic

// 😵 Why It's Bad

// Poor readability
// Error handling becomes messy
// Debugging is harder
// Code reuse is limited
// Deep nesting increases complexity