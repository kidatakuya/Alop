
export const IconAnimation = ( event, className ) => {
    event.stopPropagation()
    if(event.currentTarget.classList.contains(className)){
        event.currentTarget.classList.remove(className)
    }else{
        event.currentTarget.classList.add(className)
    }
    
    // console.log(e.currentTarget)

}


