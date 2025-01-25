

let employee={
    id:1,
    name:"Ahaan",
    salary:"70,000"
}
console.log(employee);

let fetchdata=employee.id;
console.log(fetchdata);



employee.location="hyderabad"
console.log(employee);


employee.salary="80000";
console.log(employee);
delete employee.location;
console.log(employee);



const object=new Object({
    id:10,
    name:"eashwaran",
    location:"Bangalore"

})
console.log(object);



function obj(id,name,salary){
    this.id=id,
    this.name=name,
    this.salary=salary

}

let object1=new obj(100,"Ankit","70,000")
console.log(object1);

let object2=new obj(7,"Vartika","90,000")
console.log(object2);






const object3={
    name:"Sunil",
    salary:"90000",
    gender:"Male",
    fun:()=>{
        console.log("HI i am function");
    },
    skills:[]
}

console.log(object3.skills.push("Data Structure"));
console.log(object3);

console.log(Object.keys(object3));
console.log(Object.values(object3));
console.log(Object.entries(object3));



const object4={
    id:80,
    name:"Satyam",
    salary:"80,000",
    gender:"MALE"
}

console.log(Object.seal(object4));
object4.id="99"
console.log(object4);

console.log(Object.isSealed(object4));



const object5={
    id:80,
    name:"Satyam",
    salary:"80,000",
    gender:"MALE"
}

console.log(Object.isFrozen(object5));



const object6={
    id:80,
    name:"Satyam",
    salary:"80,000",
    gender:"MALE"
}

const newObject6=Object.assign({},object6)
console.log( typeof newObject6);
let newresulted=Array.isArray(newObject6)
console.log(newresulted);

