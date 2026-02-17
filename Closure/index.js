// A closure is a function that remembers and can access variables from its outer scope even after the outer function has finished executing.

// Closure = function + its lexical scope.

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
