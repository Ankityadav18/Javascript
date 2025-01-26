



// const fetch= async()=>{
//     let data= await fetch("https://api.github.com.users")
//     console.log(data);
//     let finalData=await data.json();
//     console.log(finalData);
// }
// fetch()

// async function handlePromise(){


//     try{
//         const data=await fetch("https://api.github.com/users")
//     console.log(data);

//     let jsonValue=await data.json();
//     console.log(jsonValue);
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }
// handlePromise();

// const p=new Promise((res,rej)=>{
//     setTimeout(function(){
//    res("Promise is resolved")
//     },5000)
// })

// function data(){
//     p.then((result)=>{
//         console.log(result);
//         console.log("Namaste Js");
//     })
// }
// data();












// let  promise1=new Promise((resolve,reject)=>{


//         setTimeout(()=>{
//             resolve("Promise1 is resolved");
    
//         },5000)
       
//     })
    
//     let promise2=new Promise((resolve,reject)=>{
    
    
//         setTimeout(()=>{
//             resolve("Promise2 is resolved");
    
//         },10000)
       
//     })
    
    
//     async function execute(){
    
//         let val1=await promise1;
//         console.log("babu moshai");
//         console.log(val1)
    
    
//         let val2=await promise2
//         console.log("babu moshai");
//         console.log(val2);
    
//     }
//     execute()
    
    const p1=new Promise((resolve,reject)=>{
    
    
        setTimeout(()=>{
            resolve("Promise1 is resolved");
    
        },10000)
       
    })
    const p2=new Promise((resolve,reject)=>{
    
    
        setTimeout(()=>{
            resolve("Promise2 is resolved");
    
        },5000)
       
    })
    
    
    async function execute(){
    
        let val1=await p1;
        console.log("babu moshai");
        console.log(val1)
    
    
        let val2=await p2
        console.log("babu moshai");
        console.log(val2);
    
    }
    execute()