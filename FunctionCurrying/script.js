function sum(a){
    return function (b){
        return function(c){
        return a+b+c;
        }
    }

}
let result=sum(10)(100)(200);
console.log(result);
//Currying is a functional programming technique
//  where a function with multiple arguments is transformed into a series of functions,
//  each taking a single argument.
//Instead of taking all arguments at once,
//  the curried function takes the first argument, 
// returns a new function that takes the next argument, 
// and so on until all arguments are provided. 
//The final function then returns the result.