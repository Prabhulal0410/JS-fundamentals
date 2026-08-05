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
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("madam"));