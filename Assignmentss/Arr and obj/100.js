//100. How to Access 2D Array Item in JavaScript

let arr=[[1,2,3],
         [10,20,30],
         [100,200,300]]

console.log(arr[0][0])
console.log(arr[1][0])
console.log(arr[2][0])

for(i=0;i<arr.length;i++){
    for(j=0; j<arr[i].length;j++){
        console.log(`element at [${i}] [${j}]`,arr[i][j])
    }
}
