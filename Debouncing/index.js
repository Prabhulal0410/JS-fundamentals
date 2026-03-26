// Debouncing in JavaScript is a technique used to control how often a function runs—especially for events that fire rapidly (like typing, scrolling, or resizing).

// 🚦 Simple Idea

// Debouncing ensures that a function is only executed after a certain delay has passed since the last time the event was triggered.

// 👉 In other words:
// “If the event keeps happening, don’t run the function yet—wait until it stops.”

// 🧠 Why use debouncing?

// Without debouncing, some events can fire dozens or hundreds of times per second, which can:

// Slow down your app
// Cause unnecessary API calls
// Waste resources
// 📦 Example Scenario
// 🔍 Search Input (very common use case)

// When a user types:

// h → he → hel → hell → hello

// Without debouncing:
// API is called 5 times

// With debouncing:

// API is called only once, after the user stops typing
// 🧩 Basic Debounce Function
// function debounce(func, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// ⚙️ How it works
// Every time the event fires:
// clearTimeout cancels the previous timer
// A new timer starts
// The function runs only if no new event occurs within the delay




// ⚖️ Debounce vs Throttle (quick difference)
// Feature	            Debounce	                        Throttle
// Execution	        After user stops triggering	        At fixed intervals
// Use case	        Search, typing	                    Scroll, resize