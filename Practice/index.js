// reverse String

// function reverseString(str) {
//     let reversed = "";
//     for(let i = str.length-1;i>=0;i--){
//         reversed = reversed + str[i]
//     }
//     return reversed
// }
// console.log(reverseString("hello"))


// remove duplicate
// function removeDplicte(arr){
//  let duplicte = []
//  for(let i = 0; i< arr.length;i++){
//     if(!duplicte.includes(arr[i])){
//         duplicte.push(arr[i])
//     }
//  }
//  return duplicte
// }
// console.log(removeDplicte([1,2,3,2,4,5,1]))


// Check Palindrome
// function isPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }

//     return true;
// }

// console.log(isPalindrome("madam"));



// Find Largest Number
// let arr = [12, 45, 67, 2, 89];

// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log(largest);


//  Find Smallest Number
// let arr = [12, 45, 67, 2, 89];

// let smallest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }
// console.log(smallest);




// Sum of Array
// let arr = [1,2,3,4,5];

// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
// }
// console.log(sum);



// Remove Duplicate Numbers
// let arr = [1,2,2,3,4,4,5];
// let unique = [];
// for(let i=0;i<arr.length;i++){
//     if(!unique.includes(arr[i])){
//         unique.push(arr[i]);
//     }
// }
// console.log(unique);



// Count Vowels
// function countVowels(str){
//     let count = 0;
//     let vowels = "aeiouAEIOU";
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("JavaScript"));


// Factorial
// function factorial(n){
//     let result = 1;
//     for(let i=1;i<=n;i++){
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));