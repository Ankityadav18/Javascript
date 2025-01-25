// console.log(a); // undefined
// var a=10;
// console.log(a);



// console.log(b); //cannot access b before initialization
// let b=500;
// console.log(b);

// this is variable hoisting.



hoisting()//100
function hoisting(){
    var c=100;
    console.log(c);
}

hoisting() //100
console.log(hoisting()); //undefined because not returning any value;