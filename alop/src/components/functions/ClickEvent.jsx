
export const IconAnimation = ( e, className ) => {
    e.stopPropagation()
    if(e.currentTarget.classList.contains(className)){
        e.currentTarget.classList.remove(className)
    }else{
        e.currentTarget.classList.add(className)
    }
    
    // console.log(e.currentTarget)

}


