import { useState } from 'react';
import { SearchArea, CategoryBtn, CategoryItemList } from '../../index';
import './index.scss'

function SearchContent(props){
    const [isShown, setIsShown] = useState(false);
    return(
        <div className="searchContent">
            <SearchArea isUrl={props.isUrl} />
            <CategoryItemList isClassName={"categoryNavItem"} isText={"カテゴリー"} />
            <CategoryBtn isClassName={"categoryNavItem"} isText={"クラス"} />

        </div>
    )
}
export default SearchContent;