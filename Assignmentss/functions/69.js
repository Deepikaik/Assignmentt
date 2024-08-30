//for
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//for of
let arr2=[1,2,3,4,5];
for ( let value of arr2){
    console.log(value);
}

//foreach
let arr3=[1,2,3,4,5]
arr3.forEach(function(value){
    console.log(value);
})

//map
let arr4=[1,2,3,4,5]
let newArr=arr4.map(function(value){
    return value*2
})
console.log(newArr)

//for in loop
let arr5=[1,2,3,4,5]
for (let i in arr5){
    console.log(arr5[i])
}

//reduce
let arr6=[1,2,3,4,5]
let sum=arr6.reduce(function(accumulator,value){
   return (accumulator+value)
}) 
console.log(sum)


//while
let arr7=[1,2,3,4,5]
let i=0;
while(i<arr7.length){
    console.log(arr7[i])
    i++
}

//do while
let arr8=[1,2,3,4,5]
let j=0
do{
    console.log(arr8[j])
j++
}
while(j<arr8.length)