import { useState, createContext, useEffect } from 'react';
import { hoverEventFunction } from '../../Functions/HoverEvent'
import { CategoryBtn } from '../../index';

import './index.scss'

export const FlagsContext = createContext(false);

function CategoryItemList(props){
    
    
    const [Lists, setLists] = useState(props.isLists)
    const [isShown, setIsShown] = useState(false);
    
    useEffect(()=>{
        const listsContent = document.getElementsByClassName(props.isHoverElementsName);
        hoverEventFunction(listsContent, setIsShown, props.isText, Lists);

    },[isShown])
    
    
    return(
        <div className={"listsContent"}>
        
            <CategoryBtn isClassName={props.isClassName} isText={props.isText} /> 
            {
                isShown &&(
                    <ul className={props.isItemsClassName}>
                        {Lists.map(( list,index )=>(<li className={"categoryLists__item item"} key={index}>{list.text}</li>))}
                    </ul>
                )
            }
        </div>
    )
}

export default CategoryItemList;

