//76. Can you write a function that takes an array and reverses
//the order of the elements?

let arr=[10,20,30,40]


function reverseArray(arr){
    let reversedArr=[];
    for(let i=arr.length-1;i>=0;i--){    //ulta
        reversedArr.push(arr[i])
    }
    return reversedArr
}
let reversedArray=reverseArray(arr)
console.log(reversedArray)

/*let originalArray = [1, 2, 3, 4, 5];

function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
let reversedArray = reverseArray(originalArray);
console.log(reversedArray);*/
