
let divSlideshow =document.getElementById("slideshow")
let slideShowWid= divSlideshow.clientWidth
console.log(slideShowWid)



//calculate the margin for an item
let item=document.querySelector(".grid-item")
let itemWid=Number(item.clientWidth)
let itemMarginL = window.getComputedStyle(item).marginLeft
let itemMarginR = window.getComputedStyle(item).marginRight
itemMarginR=Number(itemMarginR.substring(0,itemMarginR.length-2))
itemMarginL=Number(itemMarginL.substring(0,itemMarginL.length-2))
console.log(itemWid,"item Width")
console.log(itemMarginL)
console.log(itemMarginR)



// console.log(`slide show has ${n} items`)

let itemTotalWid=itemWid + itemMarginL+itemMarginR
console.log(itemTotalWid)
//calculate the space that will be excess if  maximum number of items are stored with 50px margin
let excessSpace = slideShowWid % (itemTotalWid) 
let possibleItemsNum = Math.floor(slideShowWid / (itemWid+itemMarginL+itemMarginR))
console.log(excessSpace)
console.log(possibleItemsNum,"possible number of items")


//Now that we have calculated the number of items that this slide show could have
//Lets add more items to it
let gridContainer=document.querySelector("#grid-container")

let items = Array('<div id="grid-item1" class="grid-item"></div>',
'<div id="grid-item2" class="grid-item"></div>',
'<div id="grid-item3" class="grid-item"></div>',
'<div id="grid-item4" class="grid-item"></div>',
'<div id="grid-item5" class="grid-item"></div>',
'<div id="grid-item6" class="grid-item"></div>',
)
for (let i=1; i<possibleItemsNum+2;i++){

    let itemNumber=i+1
    let elem=items[i]
    gridContainer.insertAdjacentHTML("beforeend",elem)
}

//Now the container has items that could fit in time to add two items one before the 
//container and the other one after container
// beforeItem=
placeItems()
function placeItems(){
    let start=0+excessSpace/2;
    for(let i =1; i<possibleItemsNum+1;i++){
        let elem = gridContainer.children[i]
        // console.log(i)
        // console.log(start)
        // console.log(elem)
        elem.style.left= start+"px"
        start+=itemTotalWid
    }
    gridContainer.children[0].style.left = "-"+itemTotalWid+"px"
    console.log(slideShowWid)
    gridContainer.children[gridContainer.children.length-1].style.left = slideShowWid+"px"

}


function previous(){
    let start=0+excessSpace/2;

    for(let i =0; i<possibleItemsNum+1;i++){
        let elem = gridContainer.children[i]
        // console.log(i)
        // console.log(start)
        // console.log(elem)
        elem.style.left= start+"px"
        start+=itemTotalWid
    }

    //delete the last item
    let last_elem = gridContainer.children[gridContainer.children.length-1]
    last_elem.parentNode.removeChild(last_elem)


    //Add an item in the left side of view
    let firstElem=gridContainer.children[0]
    let firstElemId= firstElem.id.substring(9,firstElem.id.length)
    console.log(firstElemId,"first element id")
    if (firstElemId==1){
        gridContainer.insertAdjacentHTML("afterbegin",items[items.length-1])
        gridContainer.children[0].style.left="-"+itemTotalWid+"px"

    }else{
        gridContainer.insertAdjacentHTML("afterbegin",items[firstElemId-2])
        gridContainer.children[0].style.left="-"+itemTotalWid+"px"

    }
    // gridContainer.insertAdjacentHTML("afterbegin",)
}

function next(){
    let start=0+excessSpace/2;
    console.log("start is now",start)
    gridContainer.children[1].style.left="-"+itemTotalWid+"px"
    console.log(gridContainer.children[1],"2nd item")
    for(let i =2; i<possibleItemsNum+2;i++){
        let elem = gridContainer.children[i]
        // console.log(i)
        console.log(start)
        console.log(elem)
        elem.style.left= start+"px"
        start+=itemTotalWid
    }

    // //delete the first item
    let first_elem = gridContainer.children[0]
    first_elem.parentNode.removeChild(first_elem)


    //Add an item in the left side of view
    let lastElem=gridContainer.children[gridContainer.children.length-1]
    // console.log(lastElem)
    let lastElemId= lastElem.id.substring(9,lastElem.id.length)
    console.log(lastElemId,"last element id")
    if (lastElemId==items.length){
        console.log("")
        gridContainer.insertAdjacentHTML("beforeend",items[0])
        gridContainer.children[gridContainer.childElementCount-1].style.left=slideShowWid+"px"

    }else{
        gridContainer.insertAdjacentHTML("beforeend",items[lastElemId])
        gridContainer.children[gridContainer.childElementCount-1].style.left=slideShowWid+"px"

    }
    
}
let btn_previous=document.querySelector("#left")
btn_previous.addEventListener("click",previous)

let btn_next=document.querySelector("#right")
btn_next.addEventListener("click",next)