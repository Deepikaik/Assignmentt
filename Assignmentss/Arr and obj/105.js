//105. JavaScript Array Splice Method Explanation

//The splice() method in JavaScript is a powerful array manipulation tool
//that allows you to add, remove, or replace elements in an array.

//remove element
let arr=[10,20,30,40,50]
arr.splice(0,2)
console.log(arr)    //output [30,40,50]


//replace element
let arr1=[10,20,30,40,50]
let replaced=arr1.splice(0,1,20000)
console.log(arr1)        //[ 20000, 20, 30, 40, 50 ]
console.log(replaced)    //[10]


//adding element
let arr2=[10,20,30,40,50]
arr2.splice(4,0,30000)
console.log(arr2)   //[ 10, 20, 30, 40, 30000, 50 ]

