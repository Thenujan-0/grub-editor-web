import {loadHeader ,onResize} from "./header.js"

loadHeader()
window.addEventListener("resize",onResize)


let btnRight= document.getElementById("btn-right")
let btnLeft= document.getElementById("btn-left")
let image0 = document.getElementById("screenshot0")
let image1 = document.getElementById("screenshot1")
let currImage=image0



function btnNextClick(event){
    if (currImage==image0){

    image0.style.transform="translateX(-200%)"
    image1.style.transform="translateX(-50%)"
    btnRight.style.opacity=0.3
    btnLeft.style.opacity=1
    currImage=image1
    }
}

function btnBeforeClick(){

    if (currImage==image1){

    image0.style.transform="translateX(-50%)"
    image1.style.transform="translateX(150%)"

    btnRight.style.opacity=1
    
    btnLeft.style.opacity=0.3

    currImage=image0
    }
}
btnRight.addEventListener("click",btnNextClick)
btnLeft.addEventListener("click",btnBeforeClick)


//Automatically switch between images