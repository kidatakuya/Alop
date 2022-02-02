import { useState } from 'react';
import { SearchArea, CategoryItemList } from '../../index';
import { useSelector } from "react-redux";
import './index.scss'

function SearchContent(props){
    const [classLists, setClassLists] = useState(useSelector((state) => state.classLists))
    const [categoryLists, setCategoryLists] = useState(useSelector((state) => state.categoryLists))


    

    const [isShown, setIsShown] = useState(false);
    return(
        <div className="searchContent">
            <SearchArea isUrl={props.isUrl} />
            <CategoryItemList isLists={categoryLists} isClassName={"categoryNavItem categoryHoverEvent"} isText={"カテゴリー"} isHoverElementsName={"categoryHoverEvent"} isItemsClassName={"categoryLists categoryWarp categoryHoverEvent"} isCheckClassName={"categoryChoice"} />
            <CategoryItemList isLists={classLists} isClassName={"categoryNavItem classHoverEvent"} isText={"クラス"} isHoverElementsName={"classHoverEvent"} isItemsClassName={"categoryLists classWarp classHoverEvent"} isCheckClassName={"classChoice"} />
        </div>
    )
}
export default SearchContent;
