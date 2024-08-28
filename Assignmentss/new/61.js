//Write a program to print the Fibonacci number series up to a given number.


let i = 0;
let j = 1;
let fab_num = 0;
let num = prompt("Enter a number");
document.write(`${i} <br/> ${j} <br/>`);

while(num >= fab_num) {
    fab_num = i + j;
    i = j;
    j = fab_num;
    if(fab_num <= num){
        document.write(fab_num);
        document.write("<br/>");
    }

}