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
function removeDplicte(arr){
 let duplicte = []
 for(let i = 0; i< arr.length;i++){
    if(!duplicte.includes(arr[i])){
        duplicte.push(arr[i])
    }
 }
 return duplicte
}
console.log(removeDplicte([1,2,3,2,4,5,1]))