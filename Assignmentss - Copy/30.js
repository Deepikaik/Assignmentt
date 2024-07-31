//30. Write a program to print the given 3 numbers in ascending orders?
let a= parseFloat(prompt("Enter the first number:"));
let b=parseFloat(prompt("Enter the second number:"));
let c=parseFloat(prompt("Enter the third number:"));

if (a>b){   [a,b]=[b,a]   }
if (a>c){   [a,c]=[c,a]   }
if (b>c){   [b,c]=[c,b]   }

document.write("the numbers in ascending order are:",a,b,c)