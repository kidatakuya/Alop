import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { hoverEventFunction } from '../../Functions/HoverEvent'
import { CategoryBtn } from '../../index';

import './index.scss'

// export const FlagsContext = createContext(false);

function CategoryItemList(props){
    const navigate = useNavigate();
    let { categoryId } = useParams();
    const [isLists, setIsLists] = useState(props.isLists)
    const [isShown, setIsShown] = useState(false);

    const SearchNavigateFunction = (pash, index, isLists, checkClassName,StateFunction) => {
        let categoryLists = document.getElementsByClassName("categoryLists__item");
        let navList = isLists
        console.log(checkClassName)
        for(let i=0;i<=navList.length-1;i++){
            if(navList[i].choiceFlag){
                navList[i].choiceFlag = false
                categoryLists[i].classList.remove(checkClassName)
            }
        }
        navList[index].choiceFlag = true
        categoryLists[index].classList.add(checkClassName)
        setIsLists(navList)
        navigate(`/CourseList/category=${pash}`)
        
    }
    
    useEffect(()=>{
        const listsContent = document.getElementsByClassName(props.isHoverElementsName);
        hoverEventFunction(listsContent, setIsShown, props.isText, isLists);

        
        if(isShown){
            let categoryLists = document.getElementsByClassName("categoryLists__item");
            for(let i=0;i<=isLists.length-1;i++){
                if( isLists[i].choiceFlag ){
                    categoryLists[i].classList.add(props.isCheckClassName)
                }
            }
            
        }

    
    },[isShown])
    
    
    return(
        <div className={"listsContent"}>
            <CategoryBtn isClassName={props.isClassName} isText={props.isText} /> 
            {
                isShown &&(
                    <ul className={props.isItemsClassName}>
                        {isLists.map(( list,index )=>(<li onClick={() => SearchNavigateFunction(list.text, index, isLists, props.isCheckClassName)} className={"categoryLists__item item"} key={index}>{list.text}</li>))}
                    </ul>
                )
            }
        </div>
    )
}

export default CategoryItemList;

