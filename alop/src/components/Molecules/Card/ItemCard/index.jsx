// import { Link } from "react-router-dom";
import { MainText, Title, Thumbnail } from './../../../index';

import './index.scss'

function ItemCard(props) {
    return(
        <div className={props.isClassName}>
            <Thumbnail isUrl="" isAlt="aaa"/>
            <Title isTitle="Title" />
            <MainText isText="aaaa" />
        </div>
    )
}

export default ItemCard;