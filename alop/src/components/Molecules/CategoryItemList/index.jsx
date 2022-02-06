import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
// import { useSelector } from "react-redux";
import { hoverEventFunction } from '../../Functions/HoverEvent'
import { SearchNavigateFunction } from '../../Functions/submit'
import { CategoryBtn } from '../../index';

import './index.scss'

function CategoryItemList(props){
    
    const navigate = useNavigate();
    const [isLists, setIsLists] = useState(props.isLists)
    const itemList = isLists
    const [shown, setShown] = useState(false);
    // const [testData,setTestData] = useState("aaaa")
    // const [selectClass,setSelectClass ] = useState(useSelector((state) => state.select.class))
    // const [selectCategory,setSelectCategory ] = useState(useSelector((state) => state.select.category))


    useEffect(()=>{
        const listsContent = document.getElementsByClassName(props.isHoverElementsName);
        hoverEventFunction(listsContent, setShown, props.isText, isLists);

        
        if(shown){
            let categoryLists = document.getElementsByClassName("categoryLists__item");
            for(let i=0;i<=isLists.length-1;i++){
                if( isLists[i].choiceFlag ){
                    categoryLists[i].classList.add(props.isCheckClassName)
                }
            }
            
        }
    },[shown])
    
    
    return(
        <div className={"listsContent"}>
            <CategoryBtn isClassName={props.isClassName} isText={props.isText} /> 
            {
                shown &&(
                    <ul className={props.isItemsClassName}>
                        {itemList.map(( list,index )=>(<li onClick={() => SearchNavigateFunction(list.text, index, isLists, props.isCheckClassName, setIsLists, navigate, props.isSelect)} className={"categoryLists__item item"} key={index}>{list.text}</li>))}
                    </ul>
                )
            }
        </div>
    )
}

export default CategoryItemList;

