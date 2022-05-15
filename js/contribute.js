import {onLoad as headerOnLoad,onResize} from "./header.js"

function onLoad(){
    let header=document.getElementById("header")

        // header.innerHTML= text;
    headerOnLoad()
    onResize();

    document.addEventListener("resize",onResize)
}

document.addEventListener("DOMContentLoaded",onLoad)