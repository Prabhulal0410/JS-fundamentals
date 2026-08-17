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