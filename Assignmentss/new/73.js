/*73. Can you write a function that takes an array and
returns a new array with only the unique elements?*/

//using filter fnc
let Arr = [1,2,3,4,5,1,2,3,4];
let newArr = [];

function usefilter(arr) {
 let newArr = arr.filter(function (value, i, new1) {  // It returns the index of the first instance of each value
   return i == new1.indexOf(value);
    });

    return newArr;
}

console.log(usefilter(Arr));