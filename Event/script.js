// const btn=document.getElementById("btn");
// console.log(btn);

// btn.addEventListener("click" ,()=>{
//     document.body.style.backgroundColor="yellow"

// },false)




// const images=document.getElementById("images");
// console.log(images);

// images.addEventListener("click" ,function(){
//     console.log("Clicked inside the unordered list");
// },false)
// const data=document.getElementById("love")
// console.log(data);
// data.addEventListener("click",function(){
//     console.log("love clicked")
// },false)
//this is case of bubbling


const images=document.getElementById("images");
console.log(images);

images.addEventListener("click" ,function(){
    console.log("Clicked inside the unordered list");
},true)
const data=document.getElementById("love")
console.log(data);
data.addEventListener("click",function(){
    console.log("love clicked")
},true)

//this is the case of capturing






///::::Stop propagation
// const images=document.getElementById("images");
// console.log(images);

// images.addEventListener("click" ,function(e){
//     console.log("Clicked inside the unordered list");
// },false)
// const data=document.getElementById("love")
// console.log(data);
// data.addEventListener("click",function(e){
//     console.log("love clicked");
//     e.stopPropagation()
// },false)


// const images=document.getElementById("images");
// console.log(images);

// images.addEventListener("click" ,function(){
//     console.log("Clicked inside the unordered list");
// },false)
// const data=document.getElementById("love")
// console.log(data);
// data.addEventListener("click",function(){
//     console.log("love clicked")
// },false)

// const data1=document.getElementById("google")
// console.log(data1);
// data1.addEventListener("click",function(e){
//     e.preventDefault()
//     console.log("google clicked");
   

// },false)

// const images=document.querySelector("#images");
// console.log(images);
// images.addEventListener("click",function(e){
//     console.log(e.target.parentNode);
//     let removeIt=e.target.parentNode;
//     removeIt.remove()

    // removeIt.parentNode.removeChild(removeIt)

// },false)