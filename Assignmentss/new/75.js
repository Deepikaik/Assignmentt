//75. Can you write a function that takes an array and returns the index of the first occurrence of a given value?

/*let array = [10, 20, 30, 40, 50];
finIndex(array, 30);
let index =function finIndex(arr, value){
    return arr.indexOf(value);
    
}
console.log(index);*/


function findIndex(arr, value) {
    return arr.indexOf(value);
}
let array = [10, 20, 30, 40, 50];
let index = findIndex(array, 30);
console.log(index); // 2