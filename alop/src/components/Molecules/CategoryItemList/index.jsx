import { useState } from 'react';
import { CategoryBtn } from '../../index';
import './index.scss'


function CategoryItemList(props){
    const lists = [
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
    const [Lists, setLists] = useState(lists)
    const [isShown, setIsShown] = useState(false);
    
    const test = (t) => {
        setIsShown(t)
        console.log(isShown)
    }

    return(
        <div className={"listsContent"}>
            <CategoryBtn disabled onClick={()=> setIsShown(true) } onMouseOver={()=>test(true)} onMouseLeave={() => test(true)} isClassName={props.isClassName} isText={props.isText} />
            {
                isShown &&(
                    <ul className={"categoryLists"} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                        {Lists.map(( list, index )=>(<li className="categoryLists__item" key={index}>{list.text}</li>))}
                    </ul>
                )
            }
        
        </div>
    )
}

export default CategoryItemList;

