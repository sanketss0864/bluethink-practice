const btn =document.querySelector("#popupbtn")
const modal=document.querySelector(".modal")
const modalbtn =document.querySelector(".modal-btn")
btn.addEventListener("click",handleclick)
modalbtn.addEventListener("click",handleclick)
function handleclick(){
  if(modal.classList.contains("notvisible")){
modal.classList.add("visible")
modal.classList.remove("notvisible")
  }
  else{
    modal.classList.add("notvisible")
modal.classList.remove("visible")
  }

}
