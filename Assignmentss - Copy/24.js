//24. Write a program to check if a number is 3-digit numbers or not?
let a=202;
let b=443;
if (a>=100 && a<=999){
    console.log("3 digit number")
}
else{
    console.log("not a 3 digit number")
}
if (b>=100 && b<=999){
    console.log("3digit number")
}
else {
    console.log("not a 3digit number")
}

// ternary operator                                                    
console.log(a>=100 && a<=999? "3digit":"not a 3digit")
console.log(b>=100 && b<=999? "3dig": "not a 3dig")