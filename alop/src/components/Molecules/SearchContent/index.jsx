import { useState } from 'react';
import { SearchArea, CategoryItemList } from '../../index';
import './index.scss'

function SearchContent(props){

    const classLists = [
        {
            text: "すべて",
            choiceFlag: true
        },
        {
            text: "初級",
            choiceFlag: false
        },
        {
            text: "中級",
            choiceFlag: false
        },
        {
            text: "上級",
            choiceFlag: false
        },
        {
            text: "フィードバック",
            choiceFlag: false
        },

    ]
    const categoryLists = [
        {
            text: "すべて",
            choiceFlag: true
        },
        {
            text: "原画マン",
            choiceFlag: false
        },
        {
            text: "動画マン",
            choiceFlag: false
        },
        {
            text: "CG",
            choiceFlag: false
        },
        {
            text: "色彩",
            choiceFlag: false
        },
        {
            text: "背景",
            choiceFlag: false
        },
        {
            text: "キャラクター",
            choiceFlag: false
        },

    ]

    

    const [isShown, setIsShown] = useState(false);
    return(
        <div className="searchContent">
            <SearchArea isUrl={props.isUrl} />
            <CategoryItemList isLists={categoryLists} isClassName={"categoryNavItem categoryHoverEvent"} isText={"カテゴリー"} isHoverElementsName={"categoryHoverEvent"} isItemsClassName={"categoryLists categoryWarp categoryHoverEvent"} />
            <CategoryItemList isLists={classLists} isClassName={"categoryNavItem classHoverEvent"} isText={"クラス"} isHoverElementsName={"classHoverEvent"} isItemsClassName={"categoryLists classWarp classHoverEvent"} />

        </div>
    )
}
export default SearchContent;
