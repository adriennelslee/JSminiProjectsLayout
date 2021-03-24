
const panels = document.querySelectorAll(".panel");

function expandImg(){
    this.classList.toggle("open");
}

function fonting(event){
    if(event.propertyName.includes("flex")){
    this.classList.toggle("open-active");
}
}

panels.forEach(panel => panel.addEventListener("click", expandImg));
panels.forEach(panel => panel.addEventListener("transitionend", fonting));