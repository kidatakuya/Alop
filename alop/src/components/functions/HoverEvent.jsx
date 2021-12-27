
// カテゴリーナビのホバーイベント(色変化)
export const hoverEventFunction = (hoverElements, hoverFunction, isText, isLists) => {
    
    for(let i = 0; i <= hoverElements.length-1; i++){
        hoverElements[i].addEventListener("mouseenter", ()=>{
            if(isText == "カテゴリー"){
                hoverElements[0].classList.add("categoryBtn")
                
            }else if(isText == "クラス"){
                hoverElements[0].classList.add("classBtn")
            }
            
            hoverFunction(true)
        });
        hoverElements[i].addEventListener("mouseleave", ()=>{
            if(isText == "カテゴリー"){
                hoverElements[0].classList.remove("categoryBtn")
               
            }else if(isText == "クラス"){
                hoverElements[0].classList.remove("classBtn")
            }
            hoverFunction(false)
        });
        
        if(isLists[i].choiceFlag && i<=isLists.length-1 && hoverElements.length > isLists.length ){
            hoverElements[i+1].classList.add("classSelect");
        }
        

    }

}


