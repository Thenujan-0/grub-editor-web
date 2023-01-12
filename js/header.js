
let onResize=()=>{
    
    
    //to make the hamburger menu appear right when the navigation menu
    //starts overflowing
    let header =document.getElementsByTagName("header")[0]
    let hamburgerMenu = document.getElementById("hamburger_menu")
    let sideNavBar = document.getElementById("side_nav_bar")

    let clearedSideNavBar=false
    // remove the small_nav_bar when screen size enlarges
    let thresholdWidth=840;
    if ( header.clientWidth>thresholdWidth && hamMenuVisible()){
        // header.style.overflow="hidden"

        hamburgerMenu.click()
    }

}

function hamMenuVisible(){
    let smallNavBar=document.getElementById("side_nav_bar")
    let left =window.getComputedStyle(smallNavBar).left
    let pushedLeft =Number(left.substring(0,left.length-2))
    let header =$("#header")

    console.log(pushedLeft)
    console.log(header.width())
    return Math.abs(pushedLeft-header.width())>3
}

function loadHeader(){
    fetch("header.html").then((data)=>data.text()).then((text)=> {
        $("body")[0].insertAdjacentHTML('afterbegin',text)
    }).then(()=>{
        afterLoad()
        onResize()
    })
}

function afterLoad(){
    let hamburgerMenu= $("#hamburger_menu")
    let hamSpan2 = $("span#hamburger_menu_span2")
    let header =$("#header")
    
    //to make sure hamburger menu has the correct y cordinate
    let top = header.height()/2
    console.log(top)
    hamburgerMenu.css("top",top+"px")

    
    let hamburgerMenuCallback=()=>{
        console.log("humburger menu was clicked")
        let smallNavBar=document.getElementById("side_nav_bar")


        


        // if small nav bar is not pushed to the left by the approximate size of header
        //approximation is used to avoid problems when zoomed
        
        if (hamMenuVisible()){
            smallNavBar.style.left="100%"
            hamSpan2.css("display","block")
            hamburgerMenu.removeClass("close")

            

        }else{
            hamburgerMenu.addClass("close")
            
            smallNavBar.style.left="calc(100% - 300px)"
            hamSpan2.css("display","none")
        }

    }

    console.log("added callback")
    hamburgerMenu.click(hamburgerMenuCallback)
}

export {loadHeader,onResize}
