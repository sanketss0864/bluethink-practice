const addno=document.querySelector("#increase-count") ;
const decreaseno=document.querySelector("#decrease-count")
const countvalue=document.querySelector(".counter-value")


addno.addEventListener(
"click",increasecount
)
decreaseno.addEventListener(
    "click",decreasecount
    )
function increasecount(){
 
   
updatevalue(countvalue.innerText++)
}
function decreasecount(){

    updatevalue(countvalue.innerText--)
}
function updatevalue(value){
console.log(value)
}

 