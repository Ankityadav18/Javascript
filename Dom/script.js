const head=document.getElementById("head")
console.log(head);
head.innerHTML="Hello Javascript"


const head2=document.getElementsByClassName("head2");
console.log(head2);
let newconvertedArray=Array.from(head2);
console.log(newconvertedArray);
newconvertedArray[0].innerHTML="Five"


const newlist=["samosa","kachori","paneer","chutney","Lassi"]
const ul=document.querySelectorAll(".list");
console.log(ul);

ul.forEach(function(li,idx){

  li.innerHTML=newlist[idx]
})

