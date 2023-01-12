import {loadHeader, onResize} from "./header.js"

function onLoad(){
    loadHeader()
    document.addEventListener("resize",onResize)
}

document.addEventListener("DOMContentLoaded",onLoad)