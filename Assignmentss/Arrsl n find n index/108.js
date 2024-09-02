//108. JavaScript Array Copy Data vs copy reference

//copy data
let arr=[10,20,30,40,50]
let newArr=[...arr];

newArr[0]=100;
console.log(arr)     //[ 10, 20, 30, 40, 50 ]  -og is unchanged
console.log(newArr)  //[ 100, 20, 30, 40, 50 ]  -new arr is modified



//copy reference
let arr1=[10,20,30,40,50]
let refArr=arr1;

refArr[0]=200;
console.log(arr1)    //[ 200, 20, 30, 40, 50 ]  -Original array is modified
console.log(refArr)  //[ 200, 20, 30, 40, 50 ]  - Reference array reflects the change



