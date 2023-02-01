(function(){
    let add=document.querySelector(".add")
    let lower=document.querySelector(".lower")
    let zero=0

   add.addEventListener("click", function(e){
e.preventDefault
zero++

let zeroo=document.querySelector(".zero")
zeroo.textContent=zero
   })
lower.addEventListener("click", function(e){
    e.preventDefault
    zero--
    
    let zer=document.querySelector(".zero")
    zer.textContent=zero

})
if(zero<0){
    zero.style.color="red"
}else{
    zero.style.color="green" 
}



})
()