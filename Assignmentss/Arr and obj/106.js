//106. JavaScript Array Slice Method Explanation

//The slice() method in JavaScript is used to create a shallow copy of a
//portion of an array. It doesn't modify the original array but
//instead returns a new array containing the selected elements.

let arr=[10,20,30,40,50]
let newArr=arr.slice(1,4)
console.log(arr)     //[ 10, 20, 30, 40, ]
console.log(newArr)   //[ 20, 30, 40 ]
