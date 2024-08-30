//99. Simple Program to Sum of 2D Array in JavaScript

let arr=[[1,2,3],[1,2,3],[1,2,3]]
let sum=0

for(i=0;i<arr.length;i++){
    for(j=0; j<arr[i].length; j++){
        sum=sum+arr[i][j]
    }
}
console.log(sum)

  