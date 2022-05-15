
let onResize=()=>{
    
    
    //to make the hamburger menu appear right when the navigation menu
    //starts overflowing
    // let overflowWidth=1050
    // let header =document.getElementsByTagName("header")[0]
    // let smallNavBar = document.getElementById("small_nav_bar").children[0]
    // if (header!=null && header.scrollWidth -smallNavBar.clientWidth-header.clientWidth>0){
    //     if (overflowWidth<header.scrollWidth){
    //         console.log(header.scrollWidth,"header scrollWidth")
    //         overflowWidth=header.scrollWidth
    //         // console.log(document.styleSheets[0])
    //         for (let rule of document.styleSheets[0].cssRules[0].styleSheet.cssRules){
    //             try{
    //                 console.log(rule)
    //                 console.log(rule.conditionText)
    //                 if (rule.conditionText.includes("screen and (max-width:")){
    //                 rule.conditionText=`screen and (max-width: ${overflowWidth+10}px)`
    //                 break}
    //                 console.log("done")
    //             }catch (err){
    //                 console.log(err)
    //             }
    //         }
    //     }
    //     // console.log("overflow",overflowWidth)
    // }

    //remove the small_nav_bar when screen size enlarges
        // if (overflowWidth>0){
        //     if ( header.clientWidth>overflowWidth){
        //         smallNavBar.style.left="100%"
        //         // header.style.overflow="hidden"
        //         console.log("above small size",overflowWidth,header.clientWidth)
        //     }
        //     else{
        //         // smallNavBar.style.left="20%"
        //         // header.style.overflow="visible"
        //         console.log("below small size")

        //     }
        // }else{
        //     console.log("overflow width is",overflowWidth)
        // }
    
}

function onLoad(){
    let hamburgerMenu= document.getElementById("hamburger_menu")
    let hamSpan1 = hamburgerMenu.querySelector("span#hamburger_menu_span1")
    let hamSpan2 = hamburgerMenu.querySelector("span#hamburger_menu_span2")
    let hamSpan3 = hamburgerMenu.querySelector("span#hamburger_menu_span3")
    let header =document.querySelector("header")
    
    //to make sure hamburger menu has the correct y cordinate
    let top = header.clientHeight/2
    hamburgerMenu.style.top=top+"px"

    let hamSpan1_top=window.getComputedStyle(hamSpan1).top
    let hamSpan3_top=window.getComputedStyle(hamSpan3).top
    
    let hamburgerMenuCallback=()=>{
        console.log("humburger menu was clicked")

        let smallNavBar=document.getElementById("side_nav_bar")
        let left =window.getComputedStyle(smallNavBar).left
        let result =Number(left.substring(0,left.length-2))

        if (result!=header.clientWidth){
            smallNavBar.style.left="100%"
            hamSpan2.style.display="block"

            let old_transform1 = window.getComputedStyle(hamSpan1).transform
            let old_transform3 = window.getComputedStyle(hamSpan3).transform
            hamSpan1.style.transform= old_transform1 +"rotate(-45deg)"

            hamSpan1.style.top= hamSpan1_top
            hamSpan3.style.top= hamSpan3_top

            hamSpan3.style.transform= old_transform3+"rotate(45deg)"
            

        }else{
            smallNavBar.style.left="calc(100% - 300px)"
            hamSpan2.style.display="none"
            let old_transform1 = window.getComputedStyle(hamSpan1).transform
            let old_transform3 = window.getComputedStyle(hamSpan3).transform

            hamSpan1.style.transform= old_transform1+"rotate(45deg)"


            hamSpan3.style.transform= old_transform3+"rotate(-45deg)"

            hamSpan1.style.top= "50%"
            hamSpan3.style.top= "50%"
        }

    }

    hamburgerMenu.addEventListener("click",hamburgerMenuCallback)
}

export {onLoad,onResize}
