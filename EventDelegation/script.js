const category=document.getElementById("category")
console.log(category);

category.addEventListener("click",function(e){
    if(e.target.tagName=='LI'){
        console.log(e.target.id);
        window.location.href="/"+ e.target.id

    }
   

})