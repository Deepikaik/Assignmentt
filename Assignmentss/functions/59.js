//Write a program to print reverse of digits of numbers

let num = 123;
let reverse = 0;
let remainder
while(num > 0){
    remainder = num % 10;
    reverse = reverse * 10 + remainder;
    num = parseInt(num / 10); 
}
console.log(reverse);