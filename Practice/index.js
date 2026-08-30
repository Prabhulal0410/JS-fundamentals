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


// Fibonacci Series
// let n = 10;
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);

// for(let i=2;i<n;i++){
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }


// Find Even Numbers
// let arr = [1,2,3,4,5,6,7,8];
// let even = [];
// for(let num of arr){
//     if(num % 2 === 0){
//         even.push(num);
//     }
// }
// console.log(even);


// Find Second Largest Number
// let arr = [10,50,20,80,70];
// let largest = -Infinity;
// let second = -Infinity;
// for(let num of arr){
//     if(num > largest){
//         second = largest;
//         largest = num;
//     }else if(num > second && num !== largest){
//         second = num;
//     }
// }
// console.log(second);


// Count Character Frequency
// let str = "banana";
// let obj = {};
// for(let char of str){
//     if(obj[char]){
//         obj[char]++;
//     }else{
//         obj[char]=1;
//     }
// }
// console.log(obj);


// Remove Duplicate Characters
// let str = "programming";
// let result = "";
// for(let char of str){
//     if(!result.includes(char)){
//         result += char;
//     }
// }
// console.log(result);

// Find Missing Number
// let arr = [1,2,3,5];
// let n = 5;
// let expected = (n * (n + 1)) / 2;
// let actual = 0;
// for(let num of arr){
//     actual += num;
// }
// console.log(expected - actual);



// Merge Two Arrays
// let arr1 = [1,2,3];

// let arr2 = [4,5,6];

// let result = [...arr1,...arr2];

// console.log(result);



// Find Maximum Occurring Character
// let str = "javascript";
// let obj = {};
// for(let char of str){
//     obj[char] = (obj[char] || 0) + 1;
// }
// let maxChar = "";
// let max = 0;
// for(let key in obj){
//     if(obj[key] > max){
//         max = obj[key];
//         maxChar = key;
//     }
// }
// console.log(maxChar);



// Reverse Array
// let arr = [1,2,3,4,5];
// let left = 0;
// let right = arr.length-1;
// while(left < right){
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
// }
// console.log(arr);


// Sort Array (Bubble Sort)
// let arr = [5,3,8,1,2];

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-i-1;j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);


// Find Prime Number
// function isPrime(num){
//     if(num <= 1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(17));



// Find Common Elements in Two Arrays
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// let common = [];
// for (let num of arr1) {
//     if (arr2.includes(num)) {
//         common.push(num);
//     }
// }
// console.log(common);


// Find Duplicate Elements
// let arr = [1, 2, 3, 2, 4, 5, 3];
// let duplicates = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//             duplicates.push(arr[i]);
//         }
//     }
// }
// console.log(duplicates);


// Check Anagram
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     let a = str1.split("").sort().join("");
//     let b = str2.split("").sort().join("");
//     return a === b;
// }
// console.log(isAnagram("listen", "silent"));


// Find First Non-Repeating Character
// function firstNonRepeating(str) {
//     let count = {};
//     for (let char of str) {
//         count[char] = (count[char] || 0) + 1;
//     }
//     for (let char of str) {
//         if (count[char] === 1) {
//             return char;
//         }
//     }
//     return null;
// }
// console.log(firstNonRepeating("aabbcde"));


// Move All Zeros to the End
// let arr = [0, 1, 0, 3, 12];
// let result = [];
// for (let num of arr) {
//     if (num !== 0) {
//         result.push(num);
//     }
// }
// while (result.length < arr.length) {
//     result.push(0);
// }
// console.log(result);



// Find Intersection Without includes()
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 4, 6, 8];
// let result = [];
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             result.push(arr1[i]);
//         }
//     }
// }
// console.log(result);



// Find Second Smallest Number
// let arr = [10, 5, 20, 3, 8];
// let smallest = Infinity;
// let secondSmallest = Infinity;
// for (let num of arr) {
//     if (num < smallest) {
//         secondSmallest = smallest;
//         smallest = num;
//     }
//     else if (num < secondSmallest && num !== smallest) {
//         secondSmallest = num;
//     }
// }
// console.log(secondSmallest);


// Capitalize First Letter of Every Word
// let str = "hello world javascript";
// let words = str.split(" ");
// let result = [];
// for (let word of words) {
//     let newWord =
//         word[0].toUpperCase() + word.slice(1);
//     result.push(newWord);
// }
// console.log(result.join(" "));


// Find Sum of Digits
// function sumOfDigits(num) {
//     let sum = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         sum += digit;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }
// console.log(sumOfDigits(12345));



// Binary Search ⭐
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         }
//         if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }
// let arr = [10, 20, 30, 40, 50];
// console.log(binarySearch(arr, 40));