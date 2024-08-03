//59. Write a program to print reverse of digits of numbers
var revNumber = 0;
let a=1234

  while (a > 0) {
    revNumber = (revNumber * 10) + (a % 10);
    a = a / 10;
  }
console.log(revNumber(876));