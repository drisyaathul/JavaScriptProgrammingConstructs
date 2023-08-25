//Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value.

let a = Math.floor(Math.random()*999);
let b = Math.floor(Math.random()*999);
let c = Math.floor(Math.random()*999);
let d = Math.floor(Math.random()*999);
let e = Math.floor(Math.random()*999);

console.log("Enter the number : "+a+" , "+b+" , "+c+" , "+d+" , "+e);

//Minimum Value
if(a<b && a<c && a<d && a<e) {
    console.log(a+ " is Minimum value.");
    } else if (b<c && b<d && b<e) {
        console.log(b+ " is Minimum value.");
    }else if (c<d && c<e) {
        console.log(c+ " is Minimum value.");
    }else if (d<e) {
        console.log(d+ " is Minimum value.");
    } else { 
        console.log(e+ " is Minimum value.");
    }
    //Maximum Value
if(a>b && a>c && a>d && a>e) {
    console.log(a+ " is Maximum value.");
    } else if (b>c && b>d && b>e) {
        console.log(b+ " is Maximum value.");
    }else if (c>d && c>e) {
        console.log(c+ " is Maximum value.");
    }else if (d>e) {
        console.log(d+ " is Maximum value.");
    } else { 
        console.log(e+ " is Maximum value.");
    }
