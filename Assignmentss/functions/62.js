//Write a program to check if a given number is an Armstrong number or not.

let num = prompt("Enter a number");
let num1 = parseInt(num);
let arr = [];
let remainder;
while(num > 0){
    remainder = num % 10
    arr.push(remainder);
    num = parseInt(num /10);
}
let n = arr.length;
document.write(n);
document.write("<br/>");
let product = 1;
let sum = 0;
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
         product = product * arr[i];
         document.write(product);
         document.write("<br/>");
    }
    
    sum = sum + product;
    document.write(sum);
    document.write("<br/>");
    product = 1;

}
document.write("num1 = ", num1);
document.write("<br/>");
document.write("total sum = ", sum);
document.write("<br/>");
document.write("Type of num1 =  ", typeof num1);
document.write("<br/>");
document.write( "Type of sum = ",typeof sum);
document.write("<br/>");
 if(num1 === sum){
    document.write("Given number is Armstrong");
}else{
    document.write("Given number is not Armstrong");
}