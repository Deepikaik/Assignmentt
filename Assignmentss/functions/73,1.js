let arr=[2,3,4,5,3,4,5,3,5]
let newArr=[]

function usefilter(arr){
    let newArr=arr.filter(function(value,i,newnum){
        return i== newnum.indexOf(value);
    })
    return newArr;
}
console.log(usefilter(arr))