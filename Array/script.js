

// let array=[1,2,3,4];
// console.log(array);
// let result=array.push(5);
// console.log(result);
// console.log(array);


//case1:what if array is empty
// const array1=[];
// console.log(array1);
// let newarray=array1.push([]);
// console.log(newarray);




// let array=[1,2,3,4];
// console.log(array);
// let result=array.slice(0,3)
// console.log(result);
// console.log(array);

// let array=["Jan","March","April","May","june","July","August","September"]
// console.log(array);

// let finalResult=array.splice(1,0,"Feb");
// console.log(finalResult);
// console.log(array);

// let finalResult=array.splice(1,3,"Feb")
// console.log(array);





// let array=[0,1,2,[3,4]];
// console.log(array);
// let finalResult=array.flat();
// console.log(finalResult);


// const array1=[0, 1, [2, [3, [4,  5]]]];
// console.log(array1.flat(Infinity));




// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr2.flat(2));

// let fruits=["mango","orange","apple"];
// console.log(fruits);
// let finalResult=fruits.toString(fruits)
// console.log(finalResult);
// console.log(fruits);



// let array=[]
// let finalResult=array.at(0);
// console.log(finalResult); // undefined.

//join:The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, 
// separated by commas or a specified separator string.
//  If the array has only one item, then that item will be returned without using the separator.



//The map() function takes an array of values and applies a transformation to each value in the array. It does not "mutate" the original array.
//  It is often used to transform an array of data into a new array with a different structure.
// let number=[1,2,3,4,5];
// let output=number.map((n)=>{
//     return n+10;
// })
// console.log(output);


//case1:
// let number1=[1,2,3,4,5];
// let res=number1.map((num)=>{
//     return num>1;
// })
// console.log(res);  [false,true,true,true,true]

//case2:

// let number1=[1,2,3,4,5];
// let res=number1.map((num)=>{
//     return true;
// })
// console.log(res);

// let array=[10,20,30,40,50];
// let result=array.sort((a,b)=>{
//     return b-a;
// })
// console.log(result);
// console.log(array);
const items=["item1","item2","item3"];
items.forEach((item)=>{
    console.log(item);
})


