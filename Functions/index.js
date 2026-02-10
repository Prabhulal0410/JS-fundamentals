// 1. Hoisting-Dependent Function
// Used when a function must be callable before definition.

// initApp();

// function initApp() {
//   loadConfig();
//   startServer();
// }

// function loadConfig() {
//   console.log("Config loaded");
// }

// function startServer() {
//   console.log("Server started");
// }


// 1. Count Vowels in a String

// function countVowels(str) {
//   let count = 0;
//   const vowels = "aeiouAEIOU";

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("hellowordl"))


// 2. Find Largest Number in an Array

// function findMax(arr) {
//   let max = arr[0];

//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }
// console.log(findMax([2,34,56,86,45]))


// 3. Sum of Numbers Using arguments

// function sumAll() {
//   let sum = 0;

//   for (let num of arguments) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(sumAll(3,5,6,2,1))


// 4. Find Factorial

// function factorial(n) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5))