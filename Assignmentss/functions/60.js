//Write a program to read 5 numbers and print only the even numbers
let num;
let arr = [];
for(i = 0; i < 5; i++){
     num = prompt("Enter number");
     if(num % 2 === 0){
        document.write(num);
        document.write("<br/>");
     }
        //arr.push(num);
}