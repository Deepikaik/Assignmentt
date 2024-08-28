//74. Can you write a function that takes an array and returns the sum of all the elements?

let arr = [1, 2, 3, 4, 5];
let total= arr.reduce(function (acc, cV){
    return(acc+cV)

})
console.log(total)

/*reduce
let arr6=[1,2,3,4,5]
let sum=arr6.reduce(function(accumulator,value){
   return (accumulator+value)
}) 
console.log(sum)*/