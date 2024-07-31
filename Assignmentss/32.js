//32. JavaScript Program to find largest of Three Numbers?
const a=parseFloat(prompt("enter the first number"))
const b=parseFloat(prompt("enter the second number"))
const c=parseFloat(prompt("enter the third number"))

//let largest;
if (a>b && a>c){
   document.write("a is the largest")
   //largest=a
}
else if(b>a && b>c){
    document.write("b is the largest")
    //largest=b
}
else{
    //largest=c
    document.write("c is the largest")
}
// document.write("the largest number is:",largest)


document.write("<br/>")
//================================
let largest;
if (a>b && a>c){
    largest=a
 }
 else if(b>a && b>c){
     largest=b
 }
 else{
     largest=c
 }
 document.write("the largest number is:",largest)