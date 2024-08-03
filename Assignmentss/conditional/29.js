//29. Write a program to print the least number in given three numbers?
/*let a=100;
let b=2;
let c=30;*/
let a= parseFloat(prompt("Enter the first number:"));
let b=parseFloat(prompt("Enter the second number:"));
let c=parseFloat(prompt("Enter the third number:"));
let smallest;
if (a<b && a<c){
    document.write("a is the smallest")
}
else {
    if(b<a && b<c){
        document.write("b is the smallest")
    }
    else {
        document.write("c is the smallest")
    }
}