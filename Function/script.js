// function(){
//     console.log("hello");
// }  // Function statements require a function name.

//Named function
// function demo(){
//     console.log("demo");
// }
// demo(); //demo


//function with expression
//  var a=function demo(){
//     console.log("demo");
// }
// console.log(a); // function strucutre
// a(); //demo
// console.log(a()); 
// undefined;



// function demo(){
//     console.log("demo");
// }
// demo() //demo

// console.log(demo());//undefined
// Implicit return :When we do not return anything inside the function
// function demo(){
//     console.log("demo");
//     return "hiiiiii"
// }
// demo();
// console.log(demo());

//Explicit return :when we return a value inside a function.

//Firstclass or FirstCitizen Function.
// function as a variable is assigned;
// const a=function demo(){
//     console.log("demo");
// }
// a()

// Function can be used as return
// function hello(){
// return ()=>{
//     console.log("hello");
// }
// }
// hello()



// function demo(){
//    return "hiiiiii";
// }
// function demo1( a,value){
//     console.log(a(), value);
// }
// demo1(demo,"javascript")
//Function can be passed as an argument.


//HOF
// const radius=[1,2,3];
// const area=function(radius){
//     return Math.PI*radius*radius;
// }
// const diameter=function(radius){
//     return 2*radius;
// }
// const calculate=function(radius ,logic){
//     const output=[];

//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }
// console.log(calculate(radius,area));
// console.log(calculate(radius,diameter));

//Arrow function
// const a=()=>
//     console.log("hello");

// a();


// const b=a=>console.log("byyeeeee")
// b();


// const c=(a)=>console.log("dmeov");
// c();



// let demo=()=>{
//     console.log("heee");console.log("beeee")
// };
// demo();



// let foo=()=>console.log("geljkdnf");
// foo()

//IFEE
// (function(){
//     console.log("kite");
// })()



 
function add(){
    
    var a=20;
    
    return function demo(){
        var b=30;
        debugger
        console.log(a);
        
        console.log(b);
        
    }
    
}
var result=add();
console.log((result));
result();

