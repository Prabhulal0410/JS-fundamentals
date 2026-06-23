// Throttling in JavaScript means limiting how often a function can run.

// For example, if a user scrolls the page, the scroll event can fire hundreds of times per second. Throttling ensures your function runs only once every specified interval (e.g., every 500ms).

// Example
function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function handleScroll() {
  console.log("Scrolling...");
}

const throttledScroll = throttle(handleScroll, 1000);
window.addEventListener("scroll", throttledScroll);

// Output:
// Even if you scroll continuously, "Scrolling..." will print at most once every 1 second.




// practice
function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function submitOrder() {
  console.log("Order Submitted!");
}

const throttledSubmit = throttle(submitOrder, 3000);

document
  .getElementById("submitBtn")
  .addEventListener("click", throttledSubmit);






